// Pull in the db file which gives us access to our database connection
const db = require('../db/db');

// Get all recipes
const showRecipes = (req, res) => {
    console.log('/recipes');

    // Create sql query
    let sql = "SELECT * FROM recipes";

    // Query the database and send back appropriate status code or result of query
    db.query(sql, (error, rows) => {
        if (error) {
            console.log('Failed to return recipes');
            res.sendStatus(500);
        } else {
            console.log('GET all recipes: ', rows);
            res.json(rows);
        }
    })
}

// Get a single recipe by it's id
const showRecipe = (req, res) => {
    console.log('/recipes/:id', req.params.id);
    
    // Get the id from the request
    let id = req.params.id;

    // Create sql statement with placeholders to prevent sql injection
    let sql = "SELECT * FROM recipes WHERE id =  ?";

    // Create parameters to replace sql statement placeholders
    let params = [];
    params.push(id);

    // Query the database and send back appropriate status code or result of query
    db.query(sql, params, (error, rows) => {
        if (error) {
            console.log('Failed to return recipe');
            res.sendStatus(500);
        } else {
            console.log('GET recipe by id: ', rows);
            res.json(rows);
        }
    })
}

// Create a new recipe
const createRecipe = (req, res) => {
    console.log('/recipes', req.body);

    // Get values from the request
    let recipeName = req.body.recipe_name;
    let recipeRating = req.body.recipe_rating;

    // Create sql statement with placeholders to prevent sql injection
    let sql = "INSERT INTO recipes (recipe_name, recipe_rating) values (?, ?)";
    
    // Create parameters to replace sql statement placeholders
    let params = [];
    params.push(recipeName);
    params.push(recipeRating);

    // Query the database and send back appropriate status code
    db.query(sql, params, (error, rows) => {
        if (error) {
            console.log('Insert into db failed', error);
            res.sendStatus(500);
        } else {

            res.sendStatus(204);
        }
    });
}

// Update a single recipe
const updateRecipe = (req, res) => {
    console.log('/recipes/:id', req.body);
    
    // Get the values from the request
    let id = req.params.id;
    let recipeName = req.body.recipe_name;
    let recipeRating = req.body.recipe_rating;

    // Create sql statement with placeholders to prevent sql injection
    let sql = "UPDATE recipes SET recipe_name = ?, recipe_rating = ? WHERE id = ?";

    // Create parameters to replace sql statement placeholders
    let params = [];
    params.push(recipeName);
    params.push(recipeRating);
    params.push(id);

    // Query the database and send back appropriate status code
    db.query(sql, params, (error, rows) => {
        if (error) {
            console.log('Failed to update recipe', error);
            res.sendStatus(500);
        } else {
            console.log(rows);
            res.sendStatus(204);
        }
    })
}

// Delete a single recipe
const deleteRecipe = (req, res) => {
    console.log('/recipes/:id', req.params.id);
    
    // Get the id from the request
    let id = req.params.id;

    // Create sql statement with placeholders to prevent sql injection
    let sql = "DELETE FROM recipes WHERE id = ?";

    // Create parameters to replace sql statement placeholders
    let params = [];
    params.push(id);

    // Query the database and send back appropriate status code
    db.query(sql, params, (error, rows) => {
        if (error) {
            console.log('Failed to delete recipe');
            res.sendStatus(500);
        } else {
            res.sendStatus(204);
        }
    })
}

module.exports = {
    showRecipes,
    showRecipe,
    createRecipe,
    updateRecipe,
    deleteRecipe
}