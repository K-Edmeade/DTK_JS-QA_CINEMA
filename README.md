Coverage: 80.20%

## Final Project - QA Cinemas
For this group project we created a MERN stack web application for our QA cinema's website. This was connected to a backend database using MongoDB Cloud Atlas which allowed us to record films and customer bookings.

# Aim
The aim of the project was to develop a full stack application where users can navigate through the website and make bookings for movies, viweing latest releases, view current movies showing, accessing how to get to QA cinema, viewing an about us page, make comments and rate movies they've seen on our discussion board, checking for film classifications before making a booking and we also implemented a page where we have provided a places to go page around the area for activities and tourists attractions within the area

# Tech Stack
This project consisted of us using the following technlogies:

* Version Control System: Git
* Source Code Management: GitHub
* Kanban Board: Jira
* Full-Stack Development Technologies: MERN stack
* Database Management System: MongoDB Atlas database
* Back-End Programming Language: Node
* API Development Platform: Express
* Front-End Development Framework: React
* Unit Testing: Mocha, Chai
# Prerequisites programms to install
Git bash needs to be installed to clone this repository. Instructions for download can be found here

MongoDB can be installed here if not already installed for access to a local database. Alternatively, a cloud instance can be used.

Node.js can be installed from here

# Setup
Clone or download the repository into your files. Make sure you git clone it down. Once installed you can navigate through the methods and code.A step by step series of examples that tell you how to get a development env running

In git bash from from root project folder (cinema-project-app):

npm install
from 'client' folder:

npm install
In 'server' folder create a 'secrets' folder and insert a mongoDB URI as:

module.exports = {
  mongoURI:
    <MONGO_DB_URL>,
  mongoTestURI:
    <MONGO_TEST_DB_URL>
};
The folder structure for the server should look like this:

folder structure

To run whole project from root folder:

- npm run dev
To run only backend from root folder:

- npm run server
- or nodemon index.js
To run only frontend from 'client' folder:

- npm run client
--------------------notes--------------------

This project was set up using these instructions: https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/

server dependencies:

- npm i mocha chai chai-http nodemon express concurrently cors mongoose stripe

- npm i --save-dev nyc

client dependencies:

- npm i react-router-doms axios reactstrap react react-dom @stripe/react-stripe-js @stripe/stripe-js emailjs react-rating-stars-component

- npm install --save bootstrap



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# Testing
Once you got the project setup install Mocha, Chai and Istanbul to view coverage. 

In your terminal run: npm test to run the tests and check that they all pass or run npm run coverage to check the test coverage

# Deployment
Deployment can be acheived by running npm start on the client side and nodemon index.js on the server side.



# Built With
Visual Studio Code: IDE Mongo DB Express React Node Mocha Chai Stripe API emailJS

# Versioning
We Used Git for versioning




# Authors
* Tashfeen Arshad
* Damian Poclitar
* Jariful Hoque
* Syed Zaidi
* Kya Edmeade
# Acknowledgements
The whole QA team and the trainers.
