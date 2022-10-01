<script>
	import { onMount } from 'svelte';
	import maplibregl, { NavigationControl } from 'maplibre-gl';
	import 'maplibre-gl/dist/maplibre-gl.css';
	import ClearMarkers from '$lib/ui/map/clear-markers.js';

	export let lng = 123.8854;
	export let lat = 10.316;
	export let zoom = 10;
	export let pitch = 0;
	export let bearing = 0;
	export let singleMarker = true;
	export let markerInfo = 'McDonalds';
	export let markers = [];

	$: center = [lng, lat];

	const clearMarkers = () => {
		markers.splice(0, markers.length);
	};

	onMount(() => {
		const lnglat = document.getElementById('coordinates');

		var map = new maplibregl.Map({
			container: 'map',
			style: {
				version: 8,
				name: 'Blank',
				center: [0, 0],
				zoom: 0,
				sources: {
					'raster-tiles': {
						type: 'raster',
						tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
						tileSize: 256,
						minzoom: 5,
						maxzoom: 30
					}
				},
				layers: [
					{
						id: 'background',
						type: 'background',
						paint: {
							'background-color': '#e0dfdf'
						}
					},
					{
						id: 'simple-tiles',
						type: 'raster',
						source: 'raster-tiles'
					}
				]
			},
			center: center,
			zoom: zoom,
			pitch: pitch,
			bearing: bearing,
			antialias: true
		});

		const geocoder_api = {
			// @ts-ignore
			forwardGeocode: async (config) => {
				const features = [];
				try {
					let request =
						'https://nominatim.openstreetmap.org/search?q=' +
						config.query +
						'&format=geojson&polygon_geojson=1&addressdetails=1';
					const response = await fetch(request);
					const geojson = await response.json();
					for (let feature of geojson.features) {
						let center = [
							feature.bbox[0] + (feature.bbox[2] - feature.bbox[0]) / 2,
							feature.bbox[1] + (feature.bbox[3] - feature.bbox[1]) / 2
						];
						let point = {
							type: 'Feature',
							geometry: {
								type: 'Point',
								coordinates: center
							},
							place_name: feature.properties.display_name,
							properties: feature.properties,
							text: feature.properties.display_name,
							place_type: ['place'],
							center: center
						};
						features.push(point);
					}
				} catch (e) {
					console.error(`Failed to forwardGeocode with error: ${e}`);
				}

				return {
					features: features
				};
			}
		};

		map.addControl(
			// @ts-ignore
			new MaplibreGeocoder(geocoder_api, {
				maplibregl: maplibregl,
				marker: false,
				draggable: true
			}),
			'top-left'
		);

		// @ts-ignore
		map.addControl(new NavigationControl(), 'top-right');

		map.addControl(
			new maplibregl.GeolocateControl({
				positionOptions: {
					enableHighAccuracy: true
				},
				trackUserLocation: true
			})
		);

		map.addControl(new ClearMarkers(markers, clearMarkers));

		map.on('click', (e) => {
			if (singleMarker && markers.length === 1) return;

			const lnglat = e.lngLat;
			const marker = new maplibregl.Marker({ draggable: true }).setLngLat(lnglat).addTo(map);
			if (markerInfo) {
				const html = markerInfo ? `<p>${markerInfo}</p>` : '';
				marker.setPopup(new maplibregl.Popup().setHTML(html));
			}
			markers.push(marker);
		});
	});
</script>

<div class="map">
	<div id="map" class="map__surface" />
	<div id="map__coordinates" class="coordinates" />
</div>

<style>
	.map {
		position: relative;
		width: 100%;
		height: 100vh;
	}
	.map__surface {
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 0;
	}
	.map__coordinates {
		background: gray;
		color: white;
		position: absolute;
		bottom: 30px;
		font-size: 13px;
		z-index: 9999;
		display: none;
		padding: 5px;
		border-radius: 3px;
		left: 10px;
		text-align: left;
	}
</style>
