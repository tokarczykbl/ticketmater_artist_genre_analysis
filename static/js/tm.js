// Initialize the map
const map = L.map("map").setView([40.806862, -96.681679], 3.5);

// Add the tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Store API query variables
let baseURL = 'http://127.0.0.1:5000/api/v1.0/attractions'
// Add Segment
//let segment = "&segment=Music";
// Add Limit
//let limit = "&$limit=10000";

// Assemble API query URL
let url = baseURL

// Create a new marker cluster group
let markers = L.markerClusterGroup();

// Get the data with d3
d3.json(url).then(function(response) {

  // Loop through the data
  for (let i = 0; i < response.length; i++) {

    // Set the data location properties to variables
    let longitude = response[i].venue_longitude;
    let latitude = response[i].venue_latitude;

    // Check for the location properties
    if (longitude && latitude) {

      // Add a new marker to the cluster group, and bind a popup
      markers.addLayer(L.marker([latitude, longitude])
        .bindPopup(response[i].attraction_name));
    }

  }

  // Add the marker cluster layer to the map
  map.addLayer(markers);

}).catch(function(error) {
  console.error("Error fetching data:", error);
});