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
    res.json('Testing create recipe route');
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