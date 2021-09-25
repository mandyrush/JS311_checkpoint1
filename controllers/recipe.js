const db = require('../db/db');

const showRecipes = (req, res) => {
    console.log('/recipes');
    res.json('Testing show recipes route');
}

const showRecipe = (req, res) => {
    console.log('/recipes/:id', req.params.id);
    res.json('Testing show recipe route');
}

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

const updateRecipe = (req, res) => {
    console.log('/recipes/:id', req.body);
    res.json('Testing update recipe route');
}

const deleteRecipe = (req, res) => {
    console.log('/recipes/:id', req.params.id);
    res.json('Testing delete recipe route');
}

module.exports = {
    showRecipes,
    showRecipe,
    createRecipe,
    updateRecipe,
    deleteRecipe
}