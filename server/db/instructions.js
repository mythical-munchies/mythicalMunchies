const client = require("./client")
const uuid = require("uuid");
const {getRecipeId} = require('./recipes');

const createInstruction = async ({recipe_name, description, index}) => {
  const recipe_id = await getRecipeId(recipe_name)
  const SQL = `
  INSERT INTO instructions(id, recipe_id, description, index)
  VALUES($1, $2, $3, $4)
  RETURNING *
  `;
  const response = await client.query(SQL, [uuid.v4(), recipe_id, description, index]);
  return response.rows[0];
};

// const fetchInstructions = async () => {
//   const SQL = `
  
//   `;
// }

module.exports = {
  createInstruction
}
