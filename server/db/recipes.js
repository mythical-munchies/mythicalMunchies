const client = require("./client");
const uuid = require("uuid");

const createRecipe = async ({
  name,
  description,
  world_name,
  img_url,
}) => {
  // let steps = instructions.map((ist, i) => `$${i+1}`)
  const SQL = `
    INSERT INTO recipes(id, name, description, world_name, img_url)
    VALUES($1, $2, $3, $4, $5)
    RETURNING *
    `;
  const response = await client.query(SQL, [
    uuid.v4(),
    name,
    description,
    world_name,
    img_url,
  ]);
  return response.rows[0];
};

const createRecipeIngredient = async (
  recipe_name,
  ingredient_name,
  amount,
  unit
) => {
  //select id from recipes where name = recipe_name 
  const SQL = ``;
  //save id as varriable to pass in response as recipe_id
  //select id from ingredients where name = ingr_name
  //save id as ingredient_id 
  const SQL = `
  INSERT INTO recipe_ingredient(id, recipe_id, ingredient_id, amount, unit)
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
  return response.rows;
};

const fetchAllRecipes = async () => {
  const SQL = `
  SELECT *
  FROM recipes
  `;
  const response = await client.query(SQL);
  return response.rows;
};

const fetchWorldRecipes = async (world_id) => {
  const SQL = `
  SELECT *
  FROM recipes
  WHERE world_id = $1
  `;
  const response = await client.query(SQL, [world_id]);
  return response.rows;
};

const fetchRecipe = async (id) => {
  const SQL = `
  SELECT *
  FROM recipes
  WHERE id = $1
  `;
  const response = await client.query(SQL, [id]);
  return response.rows[0];
};

const fetchRecipeIngredients = async (recipe_id) => {
  const SQL = `
  SELECT *
  FROM recipe_ingredient
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
};
