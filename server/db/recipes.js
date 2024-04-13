const client = require("./client");
const {uuid} = reqiure("uuid");

const createRecipe = async ({name, description, world_name, instructions, img_url}) => {
  // let steps = instructions.map((ist, i) => `$${i+1}`)
    const SQL = `
    INSERT INTO recipes(id, name, description, world_name, instructions, img_url)
    VALUES($1, $2, $3, $4, '{$5, $6, $7, $8, $9}', $10)
    RETURNING *
    `;
    const response = await client.query(SQL, [uuid.v4(), name, description, world_name, ...instructions, img_url]);
    return response.rows[0];
};

const createRecipeIngredient = async (
  recipe_id,
  ingredient_id,
  amount,
  unit
) => {
  const SQL = `
  INSERT INTO recipe_ingredient(id, recipe_id, ingredient_id, amount, unit)
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

const fetchAllRecipes = async () => {
  const SQL = `
  SELECT *
  FROM recipes
  `;
  const response = await client.query(SQL);
  return response.rows[0];
};

const fetchWorldRecipes = async (world_id) => {
  const SQL = `
  SELECT *
  FROM recipes
  WHERE world_id = $1
  `;
  const response = await client.query(SQL, [world_id]);
  return response.rows[0];
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
  return response.rows[0];
};

module.exports = {
  createRecipe,
  createRecipeIngredient,
  fetchAllRecipes,
  fetchWorldRecipes,
  fetchRecipe,
  fetchRecipeIngredients,
};
