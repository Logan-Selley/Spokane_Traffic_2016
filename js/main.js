window.onload = function() {
    var corner1 = L.latLng(47.593438, -117.564103),
        corner2 = L.latLng(47.760980, -117.272784),
        bounds = L.latLngBounds(corner1, corner2);

    var map = L.map('map', {
        maxZoom: 16,
        minZoom: 13,
        maxBounds: bounds
    }).setView([47.656759, -117.425727], 13);

    var grayscale = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png', {
        attribution: 'Basemap: cartocdn |'
    }).addTo(map);
    var streets = L.tileLayer('http://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png', {
        attribution: 'Basemap: cartocdn |'
    });
    var satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}@2x', {
        attribution: 'Basemap: ArcGIS |'
    });

    var basemap = L.tileLayer('/Data/Basemap/Basemap/{z}/{x}/{y}.png', {
        attribution: 'Modified Basemap: Created by Logan Selley using MapBox',
        detectRetina: true
    }).addTo(map);

    var traffic = L.tileLayer('/Data/Thematic/TrafficFlow/{z}/{x}/{y}.png', {
        attribution: 'Data: City of Spokane Open GIS Data',
        detectRetina: true
    });

    var grouped = L.tileLayer('/Data/LayerGroup/LayerGroup/{z}/{x}/{y}.png', {
        attribution: 'Data: City of Spokane Open GIS Data | Modified Basemap: Created by Logan Selley Using MapBox',
        detectRetina: true
    });

    var evergreen = L.tileLayer('Data/MapTheme/MapTheme/{z}/{x}/{y}.png', {
        attribution: 'Evergreen Theme: Created by Logan Selley using MapBox',
        detectRetina: true
    });

    var baselayers = {
        'Grayscale': grayscale,
        'Streets': streets,
        'Satellite': satellite
    };

    var overlays = {
        'Modified Basemap': basemap,
        'Spokane Traffic 2016': traffic,
        'Basemap + Data': grouped,
        'Evergreen': evergreen
    }

    L.control.layers(baselayers, overlays, {
        collapsed: false,
        position: 'topright'
    }).addTo(map);

    L.control.scale({
        position: 'bottomleft'
    }).addTo(map);

    var legend = L.control({
        position: 'bottomright'
    });

    // Add Legend html content when it's added to the map
    legend.onAdd = function() {
        var div = L.DomUtil.create('div', 'legend');
        div.innerHTML += '<b> Traffic Flow Counts</b><br />';
        div.innerHTML += '<i style="background: #ff0000; opacity: 0.5"></i><p> 21622 - 41474 Vehicles per hour</p>';
        div.innerHTML += '<i style="background: #ff4040; opacity: 0.5"></i><p> 9698 - 21621 Vehicles per hour</p>';
        div.innerHTML += '<i style="background: #ff8080; opacity: 0.5"></i><p> 5939 - 9697 Vehicles per hour</p>';
        div.innerHTML += '<i style="background: #ffbfbf; opacity: 0.5"></i><p> 3384 - 5938 Vehicles per hour</p>';
        div.innerHTML += '<i style="background: #ffffff; opacity: 0.5"></i><p> 0 - 3383 Vehicles per hour</p>';
        return div;
    }

    // add legend to map
    legend.addTo(map);

}