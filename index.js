const express = require('express');
const env = require('dotenv').config();
const app = express();

// Add support to parse json in the body
app.use(express.json());

// Serve any static files contained in the public directory
app.use(express.static('public'));

// Pull in the recipe routes and use them
let recipeRoutes = require('./routes/recipe');
app.use(recipeRoutes);

// Start listening for requests
app.listen(process.env.PORT, () => {
    console.log('Running on port ', process.env.PORT);
});