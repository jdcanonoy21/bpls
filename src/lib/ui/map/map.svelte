<script>
	import { onMount } from 'svelte';
	import maplibregl, { NavigationControl } from 'maplibre-gl';
	import 'maplibre-gl/dist/maplibre-gl.css';
	import { ClearMarkers, mapOptions, loadBuiltinControls } from '$lib/ui/map/map.js';

	export let lng = 123.8854;
	export let lat = 10.316;
	export let geolocation = { lng, lat, markers: [] };
	export let zoom = 15;
	export let pitch = 0;
	export let bearing = 0;
	export let singleMarker = true;
	export let markerInfo = 'McDonalds';
	export let mapHeight = 100;
	export let viewOnly = false;

	$: center = [geolocation.lng, geolocation.lat];

	const addMarker = (marker) => {
		geolocation.markers = geolocation.markers.concat(marker);
	};

	const clearMarkers = () => {
		geolocation.markers = [];
	};

	const loadMarkers = (map, options = { viewOnly: true }) => {
		geolocation.markers.forEach(({ info, lnglat }) => {
			const newMarker = new maplibregl.Marker({ draggable: !viewOnly })
				.setLngLat(lnglat)
				.addTo(map);
			if (info) {
				const html = markerInfo ? `<p>${info}</p>` : '';
				newMarker.setPopup(new maplibregl.Popup().setHTML(html));
			}
			map.markers.push(newMarker);
		});
	};

	onMount(() => {
		mapOptions.center = center;
		mapOptions.zoom = zoom;
		mapOptions.pitch = pitch;
		mapOptions.bearing = bearing;

		var map = new maplibregl.Map(mapOptions);
		map.markers = [];

		loadMarkers(map, { viewOnly });
		loadBuiltinControls(map);

		if (!viewOnly) {
			map.addControl(new ClearMarkers(clearMarkers));
		}

		map.on('click', (e) => {
			if (singleMarker && geolocation.markers.length === 1) return;

			const lnglat = e.lngLat;
			const marker = new maplibregl.Marker({ draggable: true }).setLngLat(lnglat).addTo(map);
			if (markerInfo) {
				const html = markerInfo ? `<p>${markerInfo}</p>` : '';
				marker.setPopup(new maplibregl.Popup().setHTML(html));
			}
			map.markers.push(marker);
			addMarker(marker);
		});
	});
</script>

<div class="map" style="height: {mapHeight}vh;">
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
