# My-Social-Network-API 👥

![License Badge](https://img.shields.io/github/license/jak3ster/My-Social-Network-API) ![Top Language](https://img.shields.io/github/languages/top/jak3ster/My-Social-Network-API)

  ---
An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Using [Express.js](https://www.npmjs.com/package/express) for routing, [Mongoose](https://www.npmjs.com/package/mongoose) packages (MongoDB database, and the Mongoose ODM) and Moment.js package for `Date` object to format timestamps.

No seed data, data is created using Insomnia via the API. A walkthrough video that demonstrates its functionality and all of the acceptance criteria from the link to the video below.

## Installation 📌

1. Download or clone repository
2. Node.js, MongoDB and Insomia are required to run the application
3. Using the bash command line window, `npm install` to install the required npm packages
4. To start using the application, use MongoDB Compass to connect to the MongoDB URI mongodb://localhost:27017
5. The application is invoked by running `npm start` in the bash command line window and the Mongoose models are synched to the MongoDB database
6. Using MongoDB Compass, In the list of databases, shows the socialmedia database with all thoughts and users data
7. Using Insomnia, create seed data and test the API routes with Usage section below

## Usage 📌

The application demonstrates the database for a social networking application. API routes are tested through Insomia.
The walkthrough video shows various functionalities of the application:

- GET route to return all users and all thoughts
- GET route to return a single user and a single thought
- POST route for creating a user in the database
- PUT route for updating a user in the database
- DELETE route to delete users from the database
- POST route for creating a thought in the database
- PUT route for updating a thought in the database
- DELETE route to delete a thought from the database
- POST route to create a reaction
- DELETE route to delete a reaction
- POST route for adding a friend to a user's friend list
- DELETE route for deleting a friend from a user's friend list

## Demo and Links 📌

* [Demo Video](https://drive.google.com/file/d/1v6pWhlGxQ-OOFc19byTr8Lxqxkx33ANY/view?usp=sharing/)
* [Github](https://github.com/jak3ster/My-Social-Network-API/)

## Features 📌

* JavaScript
* Node.js
* MongoDB
* npm packages
  * express
  * moment
  * mongoose
  * nodemon

## License 📌

  Licensed under the [MIT](LICENSE) license.
