// Use D3 to select the table
let table = d3.select("table");

// Use D3 to create a bootstrap striped table
// https://getbootstrap.com/docs/5.3/content/tables/#striped-rows
table.classed("table-striped", true);

// Use D3 to select the table body
let tbody = d3.select("tbody");

genre_url = "http://127.0.0.1:5000/api/v1.0/genres";

// BONUS: Dynamic table
// Loop through an array of grades and build the entire table body from scratch
// Fetch data from the Flask API
fetch(genre_url)
  .then(response => response.json())
  .then(data => {
    // Loop through the data and populate the table
    data.forEach(item => {
      let row = tbody.append("tr"); // Append a row for each item

      // Append cells for genre and count
      row.append("td").text(item._id);
      row.append("td").text(item.count);
    });
  })
  .catch(error => console.error('Error fetching data:', error));


names_url = "http://127.0.0.1:5000/api/v1.0/attractions_unique_names"

fetch(names_url)
  .then(response => response.json())
  .then(data => {
    let dropdown = document.getElementById("selDataset");

    data.forEach(attraction => {
      let option = document.createElement("option");
      option.value = attraction;
      option.textContent = attraction;
      dropdown.appendChild(option);
    });
  })
  .catch(error => console.error('Error fetching data:', error));


  let myMap = L.map("map2").setView([39.8283, -98.5795], 5);

  // Add a tile layer (the background map image) to our map.
  // Use the addTo() method to add objects to our map.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);

