const client = require("./client")

const createRecipe = async ({name, description, world_id, user_id, img_url}) => {
  const SQL = `
  INSERT INTO recipes(id, name, description, world_id, user_id, img_url)
  VALUES($1, $2, $3, $4, $5, $6)
  RETURNING *
  `;
  const response = await client.query(SQL, [uuid.v4(), name, description, world_id, user_id, img_url]);
  return response.rows[0];
};

const createRecipeIngredient = async (recipe_id, ingredient_id, amount, unit) => {
  const SQL = `
  INSERT INTO recipe_ingredient(id, recipe_id, ingredient_id, amount, unit)
  RETURNING *
  `;
  const response = await client.query(SQL, [uuid.v4(), recipe_id, ingredient_id, amount, unit]);
  return response.rows[0];
}

module.exports = {
  createRecipe,
  createRecipeIngredient
}
