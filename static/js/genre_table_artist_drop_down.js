// Use D3 to select the table
let table = d3.select("table");

let ul = d3.select(".genres");

table.style("background-color", "#333"); // Change #333 to the desired darker color

genre_url = "http://127.0.0.1:5000/api/v1.0/genres";

// BONUS: Dynamic table
// Loop through an array of grades and build the entire table body from scratch
// Fetch data from the Flask API
fetch(genre_url)
  .then(response => response.json())
  .then(data => {
    // Loop through the data and populate the table
    data.forEach(item => {
      ul.append("li").text(item._id).attr("class","list-group-item d-flex justify-content-between align-items-center").append("span").text(item.count).attr("class","badge text-bg-secondary");

      // let row = tbody.append("tr"); // Append a row for each item

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

  document.addEventListener("DOMContentLoaded", function() {
    let artist1 = d3.select("#selDataset").node().value; // Use #selDataset to select dropdown

    console.log(artist1);
});

