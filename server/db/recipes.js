const client = require("./client");
const uuid = require("uuid");
const { getWorldId } = require("./worlds");

//Create a recipe
const createRecipe = async ({
  name,
  description,
  world_name,
  cook_time,
  img_url,
}) => {
  // let steps = instructions.map((ist, i) => `$${i+1}`)
  const world_id = await getWorldId(world_name);
  const SQL = `
    INSERT INTO recipes(id, name, description, cook_time, world_id, img_url)
    VALUES($1, $2, $3, $4, $5, $6)
    RETURNING *
    `;
  const response = await client.query(SQL, [
    uuid.v4(),
    name,
    description,
    cook_time,
    world_id,
    img_url,
  ]);
  return response.rows[0];
};

//Get the id by recipe name
const getRecipeId = async (name) => {
  let SQL = `
  SELECT id 
  FROM recipes 
  WHERE name = $1
`;
  console.log(name);
  //save id as variable to pass in response as recipe_id
  let { rows } = await client.query(SQL, [name]);
  const recipe_id = rows[0];
  // console.log(recipe_id, typeof(recipe_id))
  return recipe_id.id;
};

//Get ingredient id by name
const getIngrId = async (ingredient_name) => {
  let SQL = `
  SELECT id 
  FROM ingredients 
  WHERE name = $1
`;
  // console.log(ingredient_name)
  let { rows } = await client.query(SQL, [ingredient_name]);
  const ingredient_id = rows[0];
  // console.log(ingredient_id.id)
  return ingredient_id.id;
};

//Adds ingredients to a recipe
const createRecipeIngredient = async ({
  recipe_name,
  ingredient_name,
  amount,
  unit,
}) => {
  const recipe_id = await getRecipeId(recipe_name);
  //select id from ingredients where name = ingr_name
  const ingredient_id = await getIngrId(ingredient_name);
  //  console.log(recipe_id, ingredient_id)
  const SQL = `
  INSERT INTO recipe_ingredients(id, recipe_id, ingredient_id, amount, unit)
  VALUES($1, $2, $3, $4, $5)
  RETURNING *
  `;
  const response = await client.query(SQL, [
    uuid.v4(),
    recipe_id,
    ingredient_id,
    amount,
    unit,
  ]);
  return response.rows[0];
};

//Get all recipes
const fetchAllRecipes = async () => {
  const SQL = `
  SELECT *
  FROM recipes
  `;
  const response = await client.query(SQL);
  return response.rows;
};

//Get all of a single worlds recipes
const fetchWorldRecipes = async (world_id) => {
  console.log(`world id ${world_id}`);
  const SQL = `
  SELECT *
  FROM recipes
  WHERE world_id = $1
  `;
  const response = await client.query(SQL, [world_id]);
  return response.rows;
};

//Get a single recipe
const fetchRecipe = async (id) => {
  const SQL = `
  SELECT *
  FROM recipes
  WHERE id = $1
  `;
  const response = await client.query(SQL, [id]);
  console.log(response);
  return response.rows;
};

//Get all the ingredients for a recipe
const fetchRecipeIngredients = async (recipe_id) => {
  // const recipe_id = getRecipeId(recipe_name)
  console.log(recipe_id);
  const SQL = `
  SELECT *
  FROM recipe_ingredients
  WHERE recipe_id = $1
  `;
  const response = await client.query(SQL, [recipe_id]);
  return response.rows;
};

module.exports = {
  createRecipe,
  createRecipeIngredient,
  fetchAllRecipes,
  fetchWorldRecipes,
  fetchRecipe,
  fetchRecipeIngredients,
  getRecipeId,
};
