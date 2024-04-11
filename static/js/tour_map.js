let myMap;

function init() {
  myMap = L.map("map").setView([37.8283, -96.0000], 5);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);

  const artist = "$UICIDEBOY$";
  const url = "http://127.0.0.1:5000/api/v1.0/tour/" + artist;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Initialize an empty array to store the coordinates
      const coordinates = [];

      // Loop through each event in the fetched data
      data.forEach((event, index) => {
        // Loop through each venue in the event
        event.dates.forEach((date, dateIndex) => {
          date.venues.forEach((venue, venueIndex) => {
            // Push the latitude and longitude of the venue to the coordinates array
            coordinates.push([venue.latitude, venue.longitude]);

            // Create marker for the venue coordinates
            const marker = L.marker([venue.latitude, venue.longitude]).addTo(myMap);

            // Create a popup for the marker displaying the venue information and date
            const popupContent = `<b>Venue:</b> ${venue.name}<br><b>City:</b> ${venue.city}<br><b>Start Date:</b> ${date.start_date}`;
            marker.bindPopup(popupContent);

            // Optionally, you can add a tooltip to show additional information
            const tooltipContent = `Start Date: ${date.start_date}`;
            marker.bindTooltip(tooltipContent);
          });
        });
      });

      // Create polyline with the extracted coordinates
      L.polyline(coordinates, { color: 'black' }).addTo(myMap);
    })
    .catch(error => {
      console.error('Error fetching tour data:', error);
    });
}

d3.select("#selDataset").on("change", updateMap);

function updateMap() {
  const dropdownMenu = d3.select("#selDataset");
  const artist = dropdownMenu.property("value");
  const url = "http://127.0.0.1:5000/api/v1.0/tour/" + artist;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Clear existing markers and polylines
      myMap.eachLayer(layer => {
        if (layer instanceof L.Marker || layer instanceof L.Polyline) {
          myMap.removeLayer(layer);
        }
      });

      // Initialize an empty array to store the coordinates
      const coordinates = [];

      // Loop through each event in the fetched data
      data.forEach((event, index) => {
        // Loop through each venue in the event
        event.dates.forEach((date, dateIndex) => {
          date.venues.forEach((venue, venueIndex) => {
            // Push the latitude and longitude of the venue to the coordinates array
            coordinates.push([venue.latitude, venue.longitude]);

            // Create marker for the venue coordinates
            const marker = L.marker([venue.latitude, venue.longitude]).addTo(myMap);

            // Create a popup for the marker displaying the venue information and date
            const popupContent = `<b>Venue:</b> ${venue.name}<br><b>City:</b> ${venue.city}<br><b>Start Date:</b> ${date.start_date}`;
            marker.bindPopup(popupContent);

            const tooltipContent = `Start Date: ${date.start_date}`;
            marker.bindTooltip(tooltipContent);
          });
        });
      });

      // Create polyline with the extracted coordinates
      L.polyline(coordinates, { color: 'black' }).addTo(myMap);
    })
    .catch(error => {
      console.error('Error fetching tour data:', error);
    });
}

init();
