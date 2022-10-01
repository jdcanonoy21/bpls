function ClearMarkers(markers, clearMarkerss) {
	this._markers = markers;
	this._clearMarkerss = clearMarkerss;
}

ClearMarkers.prototype.onAdd = function (map) {
	this._map = map;
	this._container = document.createElement('button');
	this._container.className = 'maplibregl-ctrl';
	this._container.innerHTML = '<i style="font-size:0.525rem;">Clear Markers</i>';
	this._container.addEventListener('click', () => {
		this._markers.forEach((marker) => marker.remove());
		this._clearMarkerss();
	});
	return this._container;
};

ClearMarkers.prototype.onRemove = function () {
	this._container.parentNode.removeChild(this._container);
	this._map = undefined;
};

export default ClearMarkers;
