# Ravenous
Ravenous is a web application built using the React framework. It allows users to search for businesses through the Yelp API and sort the results using various filters.

A user can type the name of a business or food of choice into the search bar along with a preffered destination and click the LETS GO button to request business data from the Yelp API. Ravenous then displays a list of returned businesses from the users query and that list is sorted by "best match", "highest rated", or "most reviewed". 


### Prerequisites
* [Node.js](https://nodejs.org/en/) - The runtime environment used
* [npm](https://www.npmjs.com/) - The default package manager for Node.js


### Installing
* Using your Command Line Interface (CLI) type the command "node -v" to check if you have Node.js installed on your machine
* If Node is not installed on your machine, visit the Node website linked above and download the latest version of Node.js
* npm is distributed with with Node.js - meaning that when you download Node.js, you automatically get npm installed on your machine
* To confirm that you have npm installed you can type the command "npm -v" in your CLI

* To install the necessary dependencies to run the application, type the command "npm install" in your CLI
* To run the application type the command "npm start" into your CLI to begin the react script start
* If the application does not open automatically, type "http://localhost:3000/" into your browser


## Built With
* [React](https://reactjs.org/docs/getting-started.html) - The web framework used
* [npm](https://www.npmjs.com/) - Dependency Management


## Authors
I implemented each component of the application, along with the calls to the Yelp endpoints. Codecademy.com provided the styling/structure of the application
* **Gerardo Lopez** - App.js, Business.js, BusinessList.js, searchBar.js, Yelp.js 
* **Codecademy.com** - favicon.ico, index.html, manifest.json, reset.css, App.css, Business.css, BusinessList.css, searchBar.css,index.css, index.js, logo.svg, registerServiceWorker.js