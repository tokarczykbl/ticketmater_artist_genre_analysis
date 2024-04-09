from flask import Flask, jsonify, render_template
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Connect to MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client['ticket_master_db']
tour_run_collection = db['tour_run']

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Welcome to my homepage! Please see available listed routes below.<br/><br/> "
        f"&emsp;To view all attraction information: &emsp;/api/v1.0/attractions<br/>"
        f"&emsp;To view all genres information: &emsp;&emsp;/api/v1.0/genres<br/>"
        f"&emsp;To view all attraction names: &emsp;&emsp;&emsp;/api/v1.0/attractions_unique_names<br/>"
        f"&emsp;To find tour info for band:&emsp;&emsp;&emsp;&emsp; /api/v1.0/tour/&lt;artist&gt;<br/>"         
   )

@app.route('/api/v1.0/attractions', methods=['GET'])
def get_attractions():
    # Retrieve attractions from the collection
    attractions = list(db['attractions'].find({}, {'_id': False}))
    
    # Return the attractions as JSON
    return jsonify(attractions)

@app.route('/api/v1.0/genres', methods=['GET'])
def get_genre_counts():
    # Aggregate genres and count occurrences
    pipeline = [
        {"$group": {"_id": "$genre", "count": {"$sum": 1}}},
        {"$sort": {"count": -1}}
    ]
    genres = list(db['attractions'].aggregate(pipeline))
    
    # Return the genres with counts as JSON
    return jsonify(genres)

@app.route('/api/v1.0/attractions_unique_names', methods=['GET'])
def get_attraction_names():
    # Query the collection to get unique attraction names
    attraction_names = tour_run_collection.distinct("attraction_name")
    
    # Return the unique attraction names as JSON
    return jsonify(attraction_names)


@app.route('/api/v1.0/tour/<artist>', methods=['GET'])
def get_tour(artist):
    # Retrieve tour data for the specified artist
    tour = list(tour_run_collection.find({'attraction_name': artist}, {'_id': False}))
    
    # Return the tour data as JSON
    return jsonify(tour)


if __name__ == '__main__':
    app.run(debug=True)
