const express = require('express');
const router = express.Router();

const controller = require('../controllers/recipe');

// Get all recipes
router.get('/recipes', controller.showRecipes);

// Get a recipe by it's id
router.get('/recipes/:id', controller.showRecipe);

// Create a recipe
router.post('/recipes', controller.createRecipe);

// Update a recipe
router.put('/recipes/:id', controller.updateRecipe);

// Delete a recipe
router.delete('/recipes/:id', controller.deleteRecipe);

module.exports = router;