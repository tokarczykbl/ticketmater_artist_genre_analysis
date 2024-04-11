### UNC Data Analytics Project 3: Gig Guide: An Interactive Visualization Tool for your Summer Concert Schedule

This repository contains materials for Module 13 of the UNC Data Analytics Program, focusing on the tools taught in the first half of the program. Techniques utilized cover:

- Reading data from xlsx files into pandas dataframes.
- Checking the datatypes and converting datatypes for readability.
- Creating new data frames via column manipulation and merging using pandas.
- Utilizing JSON and Regex techniques to create a contacts data frame parsed out from source data.
- Converting all dataframes to CSV for loading into PostgreSQL databases.
- Creating SQL database schema for proper creation of tables and relationships.
- Building SQL queries to check table loads were valid.
- Utilizing [Quick Database Diagrams](https://app.quickdatabasediagrams.com/#/) to create an ERD visualization schema.

### Files Included

- **ETL_Mini_Project_BTokarczyk_JGuinn.ipynb**: Jupyter Notebook containing all the code necessary to load xlsx files, create dataframes, manipulate data, and create csv files.
- **ERD.Model.png**: Image file of the ERD schema created using Quick Database Diagrams.
- **crowdfund_db_schema.sql**: SQL file for creating tables and joining data in PostgreSQL. Queries are included for checking table data.
- **02-project.md**: Course-provided instructions for completing the project.
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

[Ticketmaster] (https://developer.ticketmaster.com/) - To run the program you will need to create your own account on the Ticketmaster Developer website.
Please refer to [Discovery API documentation](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/) for further information.

## Dependencies

- [MongoDB Compass](https://www.mongodb.com/products/tools/compass)
- [Ticketmaster Developer Account and API](https://developer.ticketmaster.com/)
- pandas
- json
- numpy
- 