# Tourism Management System

A fully-featured web application for managing tourist attractions, visitor reviews, and visitor activity. This system allows users to interact with attractions by submitting reviews, while visitors' activities (such as the number of attractions they've reviewed) are tracked.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Attractions](#attractions)
  - [Visitors](#visitors)
  - [Reviews](#reviews)
- [Additional Routes](#additional-routes)
- [Technologies](#technologies)
- [License](#license)

## Installation

To get started with this project, follow these steps:

### 1. Clone the repository:

````
git clone https://github.com/yourusername/tourism-management-system.git
````

### 2. Install dependencies:
Navigate to the project directory and install the necessary dependencies using npm.

````
cd tourism-management-system
npm install
````

### 3. Set up MongoDB:
Ensure that MongoDB is installed and running on your local machine. If you're using MongoDB Atlas or any other cloud database, replace the local MongoDB connection string with the appropriate one in index.js.
To run MongoDB locally:
````
mongod
````

### 4. Start the server:
Once everything is set up, run the application using the following command:
````
npm start
````
The application will be available at http://localhost:5000.
# Usage
This application provides a set of RESTful API endpoints that you can interact with using Postman, curl, or any HTTP client.
## API Endpoints
### Attractions
POST /api/attractions
Creates a new attraction.
#### Request Body:
````
{
  "name": "Attraction Name",
  "location": "Location Name",
  "entryFee": 20,
  "rating": 4.5
}
````
#### Response:
````
{
  "_id": "attraction_id",
  "name": "Attraction Name",
  "location": "Location Name",
  "entryFee": 20,
  "rating": 4.5
}
````
GET /api/attractions
Retrieves all attractions.

#### Response:
````
[
  {
    "_id": "attraction_id",
    "name": "Attraction Name",
    "location": "Location Name",
    "entryFee": 20,
    "rating": 4.5
  }
]
````
GET /api/attractions/:id
Retrieves an attraction by its ID.

#### Response:
````
{
  "_id": "attraction_id",
  "name": "Attraction Name",
  "location": "Location Name",
  "entryFee": 20,
  "rating": 4.5
}
````
PUT /api/attractions/:id
Updates an attraction by its ID.

#### Request Body:
````
{
  "name": "Updated Attraction Name",
  "location": "Updated Location Name",
  "entryFee": 25,
  "rating": 4.8
}
````
DELETE /api/attractions/:id
Deletes an attraction by its ID.

### Visitors
POST /api/visitors
Creates a new visitor.
Request Body:
````
{
  "name": "Visitor Name",
  "email": "visitor@example.com"
}
````
#### Response:
````
{
  "_id": "visitor_id",
  "name": "Visitor Name",
  "email": "visitor@example.com"
}
````
GET /api/visitors
Retrieves all visitors.

### Response:
````
[
  {
    "_id": "visitor_id",
    "name": "Visitor Name",
    "email": "visitor@example.com"
  }
]
````
GET /api/visitors/:id
Retrieves a visitor by their ID.

#### Response:
````
{
  "_id": "visitor_id",
  "name": "Visitor Name",
  "email": "visitor@example.com"
}
````
PUT /api/visitors/:id
Updates a visitor by their ID.
Request Body:
````
{
  "name": "Updated Visitor Name",
  "email": "updated@example.com"
}
````
DELETE /api/visitors/:id
Deletes a visitor by their ID.

### Reviews
POST /api/reviews
Creates a new review for an attraction by a visitor.

#### Request Body:
````
{
  "attraction": "attraction_id",
  "visitor": "visitor_id",
  "score": 4,
  "comment": "Great experience!"
}
````
#### Response:
````
{
  "_id": "review_id",
  "attraction": "attraction_id",
  "visitor": "visitor_id",
  "score": 4,
  "comment": "Great experience!"
}
````
GET /api/reviews
Retrieves all reviews.

#### Response:
````
[
  {
    "_id": "review_id",
    "attraction": "attraction_id",
    "visitor": "visitor_id",
    "score": 4,
    "comment": "Great experience!"
  }
]
````
GET /api/reviews/:id
Retrieves a review by its ID.

### Response:
````
{
  "_id": "review_id",
  "attraction": "attraction_id",
  "visitor": "visitor_id",
  "score": 4,
  "comment": "Great experience!"
}
````
PUT /api/reviews/:id
Updates a review by its ID.

#### Request Body:
````
{
  "score": 5,
  "comment": "Amazing experience!"
}
````
DELETE /api/reviews/:id
Deletes a review by its ID.

## Additional Routes
```` 
GET /api/attractions/top-rated
````
Returns the top 5 attractions with the highest average ratings.
````
GET /api/visitors/activity
````
Returns a list of visitors along with the count of attractions they have reviewed.

## Technologies
- Node.js: A JavaScript runtime environment used to build the backend.
- Express.js: A web application framework for Node.js used for building REST APIs.
- MongoDB: A NoSQL database used for storing data.
- Mongoose: An ODM (Object Document Mapper) used for interacting with MongoDB in a structured way.
- Body-parser: Middleware to parse incoming request bodies in a middleware before your handlers.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
````
This Markdown version of the `README.md` file uses headings, code blocks, and bullet points to format the content. Feel free to adjust the content according to your needs.
````

# Contributors (Special Thanks)

- Zoha Waheed 
 (Sp23-bse-168)
