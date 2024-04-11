### UNC Data Analytics Project 3: Gig Guide: An Interactive Visualization Tool for your Summer Concert Schedule

### Summary

## Ethical Considerations

In gathering data for this project, Ticketmaster served as the sole source. Within the concert industry, debates about rising ticket prices and corporate monopolization exists. By relying solely on Ticketmaster, the website may unintentionally exclude certain independent venues that opt not to collaborate with Ticketmaster and its affiliates. This omission could impact smaller businesses, as their events may not be showcased on the platform, potentially limiting their visibility and audience reach.  Moreover, the focus on Ticketmaster's listings may inadvertently cater more to mainstream acts and larger venues, potentially excluding audiences that prefer independent or niche performances. This limitation in scope may inadvertently marginalize certain segments of the concert-going community.

### Files Included

- **ticketmaster_database_creation.ipynb**: Jupyter Notebook containing all the code necessary query Ticketmaster Discovery API, remove unneccerrary JSON key value pairs, create MongoDB database, collections and documents, create JSON copies of raw data, manipulate data.
- **tickermaster_bar_chart_race_creation.ipynb**: Jupyter Notebook containing all the code necesary to create the Bar Chart Race gif which available on webpage.
- **index.html**: Framework for website
- **cluster_map.html**: Framework for cluster_map to be input into index.html
- **app.py**: Python file for creation of Flask API utilized to population maps, dropdowns and list
- `Static/css`:
    - **style.css**: CSS file for formatting of elements within page
- `Static/js`:
    - **cluster_map.js**: JavaScript file used for creating cluster map with concert artist, venue and location information
    - **genre_table_artist_drop_down.js**: JavaScript file used to create artist dropdown list and genre tally list
    - **tour_map.js**: JavaScript file used to create tour run map for selected artists
- `json_files`:
    - **ticketmaster_events_part_1.json**: JSON file of Ticketmaster Discovery API results
    - **ticketmaster_events_part_2.json**: JSON file of Ticketmaster Discovery API results
    - **ticketmaster_attractions.json**: JSON file of single attractions broken out from Ticketmaster events
    - **ticketmaster_tour_run.json**: JSON file of single artist and all their associates tour dates and venue locations
- `bar_chart_races`: Various example outputs of bar chart races using different styles
- `b_other_docs`:
    - **BenandLuna.jpg**: Image
    - **David.png**: Image
    - **ETL Workflow Diagram.pdf**: ETL Workflow diagram using [LucidChart](https://www.lucidchart.com)
    - **Project 3 Proposal - Ticket Master.docx**: Initial Proposal Document


## Usage

Usage of the application is dependent on having a local MongoDB database with the necessary collections of documents.  The user will also require an API key from [Ticketmaster] (https://developer.ticketmaster.com/).

1. Clone the repository to your local machine.
2. Create an account on the [Ticketmaster](https://developer.ticketmaster.com/) developer website to access your API
3. Open the **ticketmaster_database_creation.ipynb** file.
4. You will need to edit the first code block to point to your personal API key. Currently the code uses the sys method to point to a file with personal key.
5. Run code blocks 1-10 up until the code blocks listed "As needed".
6. Check your MongoDB using Compass or other methods of choice to ensure database and collections were created.
7. Close **ticketmaster_database_creation.ipynb**
8. OPen **tickermaster_bar_chart_race_creation.ipynb** and run all code blocks to create collection of bar_chart_race gifs
9. Run **app.py** file using "python app.py" and open API in browser
10. Open **index.html** in Live Server with VS Code or personal choice of operation.
11. Navigate website using menu buttons, map filters, and dropdown to select which artists and genres you are interested



## Data Sources

[Ticketmaster](https://developer.ticketmaster.com/) - To run the program you will need to create your own account on the Ticketmaster Developer website.
Please refer to [Discovery API documentation](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/) for further information.

## Dependencies

- [MongoDB Compass](https://www.mongodb.com/products/tools/compass)
- [Ticketmaster Developer Account and API](https://developer.ticketmaster.com/)
- Python Libraries
    - pandas
    - requests
    - json
    - sys
    - pymongo, MongoClient
    - matplotlib.pyplot
    - bar_chart_race [documentation](https://www.dexplo.org/bar_chart_race/)