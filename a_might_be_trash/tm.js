// initalize the map
const map = L.map("map").setView([40.806862, -96.681679], 3.5);

// Add the tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
maxZoom: 19,
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Store API query variables
let baseURL = 'http://127.0.0.1:5000/api/v1.0/attractions'
// Add the Date
let date = "$where=start_date between '2024-04-01' and '2024-09-30'";
// Add Segment
segment = "&segment=Music";
// Add Limit
limit = "&$limit=10000";

// Assemble API query URL
let url = baseURL + date + segment + limit;


// Get the data using d3
d3.json(url).then(function(response) {

    // Create a marker cluster group
    let markers = L.markerClusterGroup();

    // Loop through data
    for (let i = 0; i < response.length; i++) {

        // Set coordinate locations to a variable
        let longitude = response[i].venue_longitude
        let latitude = response[i].venue_latitude

        // Check coordinates
        if (longitude) {
            
            // Add a marker to the cluster group and bind a popup
            markers.addLayer(L.marker([longitude, latitude])
            .bindPopup(response[i].descriptor));
        }
    }

// Add marker cluster layer to map
map.addLayer(markers);
})
