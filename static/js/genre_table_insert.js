// Use D3 to select the table
let table = d3.select("table");

// Use D3 to create a bootstrap striped table
// https://getbootstrap.com/docs/5.3/content/tables/#striped-rows
table.classed("table-striped", true);

// Use D3 to select the table body
let tbody = d3.select("tbody");

url = "http://127.0.0.1:5000/api/v1.0/genres";

// BONUS: Dynamic table
// Loop through an array of grades and build the entire table body from scratch
// Fetch data from the Flask API
fetch(url)
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