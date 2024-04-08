const client = require("./client")
const bcrypt = require("bcrypt")

const createUser = async ({username, email, password}) => {
  const SQL =`
  INSERT INTO users(id, username, email, password)
  VALUES($1, $2, $3, $4)
  RETURNING *
  `;
  const response = await client.query(SQL, [uuid.v4(), username, email, await bcrypt.hash(password, 5)]);
  return response.rows[0];
};

const createUserRecipe = async (user_id, recipe_id, rating, review) => {
  const SQL = `
  INSERT INTO user_recipe(id, user_id, recipe_id, rating, review)
  VALUES($1, $2, $3, $4, $5)
  `;
  const response = await client.query(SQL )
}

module.exports = {
  createUser,
  createUserRecipe
}
