### UNC Data Analytics Project 3: Gig Guide: An Interactive Visualization Tool for your Summer Concert Schedule



### Files Included

- **ticketmaster_database_creation.ipynb**: Jupyter Notebook containing all the code necessary query Ticketmaster Discovery API, remove unneccerrary JSON key value pairs, create MongoDB database, collections and documents, create JSON copies of raw data, manipulate data.
- **tickermaster_bar_chart_race_creation.ipynb**: Jupyter Notebook containing all the code necesary to create the Bar Chart Race gif which available on webpage.
- **index.html**: Framework for website
- **cluster_map.html**: Framework for cluster_map to be input into index.html
- **app.py**: Python file for creation of Flask API utilized to population maps, dropdowns and list
- `Static/css`:
    - **style.css**: CSS file for formatting of elements within page
- `Static/js`:
    -**cluster_map.js**: JavaScript file used for creating cluster map with concert artist, venue and location information
    -**genre_table_artist_drop_down.js**: JavaScript file used to create artist dropdown list and genre tally list
    -**tour_map.js**: JavaScript file used to create tour run map for selected artists



- `Resources` folder: Contains cleaned csv files for loading into PostgreSQL and provided source data in xlsx format for analysis.
- `screenshots` folder: Contains images of working tables in PostgreSQL.

## Usage

Usage of the application is dependent on having a local MongoDB database with the necessary collections of documents.  The user will also require an API key from [Ticketmaster] (https://developer.ticketmaster.com/).

1. Clone the repository to your local machine.
2. Create an account on the [Ticketmaster](https://developer.ticketmaster.com/) developer website to access your API
2. Execute the code until the `Create the Contacts Dataframe` section. From there, you will have two options to create the same end file, but they cannot be run sequentially. If choosing option one, you will need to restart your notebook to execute option two.
3. Open PostgreSQL software and create tables with the schema portion of the code. Import the data for the tables using the appropriate CSV files in the `Resources` folder.
4. Run the queries to check table load.

## Ethical Considerations

In gathering data for this project, Ticketmaster served as the sole source. Within the concert industry, debates about rising ticket prices and corporate monopolization exists. By relying solely on Ticketmaster, the website may unintentionally exclude certain independent venues that opt not to collaborate with Ticketmaster and its affiliates. This omission could impact smaller businesses, as their events may not be showcased on the platform, potentially limiting their visibility and audience reach.  Moreover, the focus on Ticketmaster's listings may inadvertently cater more to mainstream acts and larger venues, potentially excluding audiences that prefer independent or niche performances. This limitation in scope may inadvertently marginalize certain segments of the concert-going community.

## Data Sources

[Ticketmaster](https://developer.ticketmaster.com/) - To run the program you will need to create your own account on the Ticketmaster Developer website.
Please refer to [Discovery API documentation](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/) for further information.

## Dependencies

- [MongoDB Compass](https://www.mongodb.com/products/tools/compass)
- [Ticketmaster Developer Account and API](https://developer.ticketmaster.com/)
- pandas
- json
- numpy
- 