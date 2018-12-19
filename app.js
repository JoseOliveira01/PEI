// Import views
const VIEW = require('./app/appView');

// Configuration file
const config = require('./config'); 

// Connect to database
VIEW.mongoose.connect(config.database);

// Create Express WApp (Web App)
const express = require('express');
const app = express();

// Start routes
app.use('/', VIEW.Router);

// Init server
app.listen(8080, console.log(" . Server is listening at localhost:8080"));

