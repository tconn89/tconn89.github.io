
//<![CDATA[ 
    function createMarker(point,html) {
        var marker = new GMarker(point);
        GEvent.addListener(marker, "click", function() {
        marker.openInfoWindowHtml(html);
        });
    return marker;
    }

    function load() {
    if (GBrowserIsCompatible()) {
        var map = new GMap2(document.getElementById("map"));
        map.addControl(new GSmallMapControl());
        map.addControl(new GMapTypeControl());
        map.setCenter(new GLatLng(51.16349933440274, 4.371164292063712 ), 6);
        var point = new GLatLng(51.16349933440274, 4.371164292063712);
        var marker = createMarker(point,'<div style="width:240px"> \
          Place:    <b>ANTWERPEN          </b><br> \
          </div>')
          map.addOverlay(marker);
    }
   }
    load();
   //]]>
