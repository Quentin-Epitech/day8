var map = L.map('map').setView([46.603354, 1.888334], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);


var epitech = L.icon({
  iconUrl: 'https://www.pngkit.com/png/detail/459-4596239_epitech-epitech-logo-transparent.png',
  iconSize: [50, 50], 
  iconAnchor: [25, 50], 
  popupAnchor: [0, -50]  
});

var ecole = [
  { name: "Paris", coords: [48.9416, 2.3653] },
  { name: "Nantes", coords: [47.1856, -1.5983] },
  { name: "Bordeaux", coords: [44.7745, -0.5753] },
  { name: "Lyon", coords: [45.0835, 4.8097] },
  { name: "Toulouse", coords: [43.2876, 1.4623] }
];

ecole.forEach(function(school) {
  L.marker(school.coords, { icon: epitech })
    .addTo(map)
    marker.bindPopup("<b>" + school.name + " rocks!</b>");
});
