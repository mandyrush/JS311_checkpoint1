const express = require('express');
const env = require('dotenv').config();
const app = express();

// Add support to parse json in the body
app.use(express.json());

let recipeRoutes = require('./routes/recipe');
app.use(recipeRoutes);

app.listen(process.env.PORT, () => {
    console.log('Running on port ', process.env.PORT);
});