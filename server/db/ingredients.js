const client = require("./client")
const uuid = require("uuid");

//Create an ingredient
const createIngredient = async ({name, description}) => {
  const SQL = `
  INSERT INTO ingredients(id, name, description)
  VALUES($1, $2, $3)
  RETURNING *
  `;
  const response = await client.query(SQL, [uuid.v4(), name, description]);
  return response.rows[0];
};

//Get all ingredients
const fetchIngredients = async () => {
  const SQL = `
  SELECT *
  FROM ingredients
  `;
  const response = await client.query(SQL);
  return response.rows;
}

const fetchIngredient = async (ingredient_id) => {
  const SQL = `
  SELECT *
  FROM ingredients
  WHERE id = $1
  `;
  const response = await client.query(SQL,[ingredient_id]);
  return response.rows[0];
}

//Get all the ingredients for a recipe
const fetchRecipeIngredients = async (recipe_id) => {
  console.log(recipe_id)
  const SQL = `
  SELECT *
  FROM recipe_ingredients
  WHERE recipe_id = $1
  `;
  const response = await client.query(SQL, [recipe_id]);
  const ingrResponse = await Promise.all(response.rows.map(row => fetchIngredient(row.ingredient_id)))
  return {recipeIngredient:response.rows, ingredients: ingrResponse};
};

module.exports = {
  createIngredient,
  fetchRecipeIngredients,
  fetchIngredients
}