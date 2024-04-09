// Initialize the map
const map = L.map("map").setView([40.806862, -96.681679], 3.5);

// Add the tile layer
let us_map = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Store API query variables
let baseURL = 'http://127.0.0.1:5000/api/v1.0/attractions';

// Create an object to store marker clusters by genre
let clustersByGenre = {};

// Get the data with d3
d3.json(baseURL).then(function(response) {

  // Loop through the data
  for (let i = 0; i < response.length; i++) {

    // Set the data location properties to variables
    let longitude = response[i].venue_longitude;
    let latitude = response[i].venue_latitude;
    let genre = response[i].genre;

    // Check for the location properties and genre
    if (longitude && latitude && genre) {

      // Create a marker for the current attraction
      let marker = L.marker([latitude, longitude]).bindPopup(
        `<b>Event:</b> ${response[i].event_name}<br>` +
        `<b>Artist Name:</b> ${response[i].attraction_name}<br>` +
        `<b>Venue:</b> ${response[i].venue_name}<br>` +
        `<b>Date:</b> ${response[i].start_date}<br>` +
        `<b>Event URL:</b> <a href="${response[i].event_url}" target="_blank">${response[i].event_url}</a>`
      );

      // Create a marker cluster group for the current genre if it doesn't exist
      if (!clustersByGenre[genre]) {
        clustersByGenre[genre] = L.markerClusterGroup();
      }

      // Add the marker to the cluster group for the current genre
      clustersByGenre[genre].addLayer(marker);
    }
  }

  // Create a layer control with all genres selected by default and add it to the map
  let defaultLayers = {};
  for (let genre in clustersByGenre) {
    defaultLayers[genre] = clustersByGenre[genre];
  }
  L.control.layers(null, defaultLayers).addTo(map);

}).catch(function(error) {
  console.error("Error fetching data:", error);
});