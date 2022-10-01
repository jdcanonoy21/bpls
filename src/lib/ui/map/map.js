import maplibregl, { NavigationControl } from 'maplibre-gl';

export const mapOptions = {
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
	antialias: true
};

export const geocoder_api = {
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

export function loadBuiltinControls(map) {
	map.addControl(
		// @ts-ignore
		new MaplibreGeocoder(geocoder_api, {
			maplibregl: maplibregl,
			marker: false,
			draggable: true
		}),
		'top-left'
	);

	map.addControl(new NavigationControl(), 'top-right');

	map.addControl(
		new maplibregl.GeolocateControl({
			positionOptions: {
				enableHighAccuracy: true
			},
			trackUserLocation: true
		})
	);
}

/*==========================================
MAP ACTIONS
============================================*/
export function ClearMarkers(clearMarkers) {
	this._clearMarkers = clearMarkers;
}

ClearMarkers.prototype.onAdd = function (map) {
	this._map = map;
	this._container = document.createElement('button');
	this._container.className = 'maplibregl-ctrl';
	this._container.innerHTML = '<i style="font-size:0.525rem;">Clear Markers</i>';
	this._container.addEventListener('click', () => {
		this._map.markers.forEach((marker) => marker.remove());
		this._clearMarkers();
	});
	return this._container;
};

ClearMarkers.prototype.onRemove = function () {
	this._container.parentNode.removeChild(this._container);
	this._map = undefined;
};
