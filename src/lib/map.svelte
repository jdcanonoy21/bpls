<!-- <script>
    import { onMount } from 'svelte';

    let map;

    onMount(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.6.0/dist/leaflet.css';
        link.onload = () => loadMap();

        document.head.appendChild(link);

        return () => {
            map.remove();
            link.parentNode.removeChild(link);
        };
    });

    async function loadMap() {
        await import('leaflet');
        map = L.map('map').setView([49, 12], 13);
        L.tileLayer('https://www.openstreetmap.org/#map=8/13.090/121.086', {
            attribution:
                '',
            maxZoom: 18,
        }).addTo(map);
    }
</script>

<style>
    #map {
        height: 480px;
    }
</style>

<div id="map" /> -->