window.onload = function() {
    var corner1 = L.latLng(47.593438, -117.564103),
        var corner2 = L.latLng(47.760980, -117.272784),
            bounds = L.latLngBounds(corner1, corner2);

    var map = L.map('map', {
        maxZoom: 16,
        minZoom: 12,
        maxBounds: bounds
    }).setView([47.656759, -117.425727], 12);

}