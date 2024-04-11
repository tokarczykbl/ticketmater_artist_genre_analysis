# UNC Data Analytics Project 3: Gig Guide: An Interactive Visualization Tool for Your Summer Concert Schedule

## Summary

This project aims to provide an interactive visualization tool, Gig Guide, for users to explore and plan their summer concert schedule. By leveraging data from Ticketmaster's Discovery API, Gig Guide offers insights into various concerts, artists, and venues, facilitating informed decision-making for concert-goers.  The usere will need to install the neccessary dependencies to operate as the data is hosted locally on the users machine for this project.  

## Ethical Considerations

In gathering data for this project, Ticketmaster served as the sole source. Within the concert industry, debates about rising ticket prices and corporate monopolization exist. By relying solely on Ticketmaster, the website may unintentionally exclude certain independent venues that opt not to collaborate with Ticketmaster and its affiliates. This omission could impact smaller businesses, as their events may not be showcased on the platform, potentially limiting their visibility and audience reach. Moreover, the focus on Ticketmaster's listings may inadvertently cater more to mainstream acts and larger venues, potentially excluding audiences that prefer independent or niche performances. This limitation in scope may inadvertently marginalize certain segments of the concert-going community.

## Files Included

- **ticketmaster_database_creation.ipynb**: Jupyter Notebook containing code to query Ticketmaster Discovery API, manipulate data, and create MongoDB database collections.
- **tickermaster_bar_chart_race_creation.ipynb**: Jupyter Notebook containing code to create bar chart race GIFs for visualization purposes.
- **index.html**: HTML framework for the website.
- **cluster_map.html**: HTML framework for the cluster map visualization.
- **app.py**: Python file for the creation of Flask API used to populate maps, dropdowns, and lists.
- `Static/css`:
  - **style.css**: CSS file for formatting elements within the page.
- `Static/js`:
  - **cluster_map.js**: JavaScript file used to create the cluster map with concert artist, venue, and location information.
  - **genre_table_artist_drop_down.js**: JavaScript file used to create artist dropdown lists and genre tally lists.
  - **tour_map.js**: JavaScript file used to create tour run maps for selected artists.
- `json_files`:
  - **ticketmaster_events_part_1.json**: JSON file containing Ticketmaster Discovery API results (part 1).
  - **ticketmaster_events_part_2.json**: JSON file containing Ticketmaster Discovery API results (part 2).
  - **ticketmaster_attractions.json**: JSON file containing single attractions broken out from Ticketmaster events.
  - **ticketmaster_tour_run.json**: JSON file containing single artist and all their associated tour dates and venue locations.
- `bar_chart_races`: Various example outputs of bar chart races using different styles.
- `b_other_docs`:
  - **BenandLuna.jpg**: Image file.
  - **David.png**: Image file.
  - **ETL Workflow Diagram.pdf**: ETL workflow diagram created using LucidChart.
  - **Project 3 Proposal - Ticket Master.docx**: Initial proposal document.

## Usage

Usage of the application is dependent on having a local MongoDB database with the necessary collections of documents. The user will also require an API key from Ticketmaster.

1. Clone the repository to your local machine.
2. Create an account on the Ticketmaster developer website to access your API key.
3. Open the **ticketmaster_database_creation.ipynb** file.
4. Edit the first code block to point to your personal API key.
5. Run code blocks 1-10 up until the code blocks listed "As needed".
6. Check your MongoDB using MongoDB Compass or other preferred methods to ensure the database and collections were created.
7. Close **ticketmaster_database_creation.ipynb**.
8. Open **tickermaster_bar_chart_race_creation.ipynb** and run all code blocks to create a collection of bar chart race GIFs.
9. Run **app.py** file using `python app.py` and open the API in a browser.
10. Open **index.html** in a Live Server with VS Code or your preferred choice of operation.
11. Navigate the website using menu buttons, map filters, and dropdowns to select the artists and genres you are interested in.

## Data Sources

- [Ticketmaster](https://developer.ticketmaster.com/): To run the program, you will need to create your own account on the Ticketmaster Developer website. Refer to the [Discovery API documentation](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/) for further information.

## Dependencies

- [MongoDB Compass](https://www.mongodb.com/products/tools/compass)
- [Ticketmaster Developer Account and API](https://developer.ticketmaster.com/)
- Python Libraries:
  - pandas
  - requests
  - json
  - sys
  - pymongo, MongoClient
  - matplotlib.pyplot
  - [bar_chart_race](https://www.dexplo.org/bar_chart_race/)
