document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("questionsBtn");
    if (btn) {
      btn.addEventListener("click", function () {
        alert("If you have questions, contact me at:\n" +
              "zohasaadia18968@gmail.com");
      });
    }
  });
  
  function initMap() {
    var mapEl = document.getElementById("map");
    if (!mapEl) return;
  
    var spots = [
      { title: "Chicago, IL", pos: { lat: 41.8781, lng: -87.6298 }, note: "Where I study and live." },
      { title: "Illinois Tech", pos: { lat: 41.8349, lng: -87.6280 }, note: "Campus vibes." },
      { title: "Maldives (Dream)", pos: { lat: 3.2028, lng: 73.2207 }, note: "Dream vacation spot." }
    ];
  
    var pinkStyle = [
      { elementType: "geometry", stylers: [{ color: "#ffeef6" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#8a004a" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#ffffff" }] },
      { featureType: "water", elementType: "geometry", stylers: [{ color: "#ffd3e6" }] },
      { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#ffd6e8" }] },
      { featureType: "road", elementType: "geometry", stylers: [{ color: "#f9c2d6" }] }
    ];
  
    var map = new google.maps.Map(mapEl, {
      center: { lat: 20, lng: -20 },
      zoom: 3,
      styles: pinkStyle,
      mapTypeControl: true,
      fullscreenControl: true,
      streetViewControl: false,
      zoomControl: true
    });
  
    var bounds = new google.maps.LatLngBounds();
    var infowindow = new google.maps.InfoWindow();
  
    spots.forEach(function (s) {
      var marker = new google.maps.Marker({
        position: s.pos,
        map: map,
        title: s.title
      });
      bounds.extend(s.pos);
      marker.addListener("click", function () {
        infowindow.setContent("<strong>" + s.title + "</strong><br>" + s.note);
        infowindow.open(map, marker);
      });
    });
  
    map.fitBounds(bounds);
  }
  