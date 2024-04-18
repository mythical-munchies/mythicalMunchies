const client = require("./client")
const uuid = require("uuid");
const {getRecipeId} = require('./recipes');

//Create a instruction 
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

//Fetch instructions
const fetchInstructions = async (recipe_id) => {
  // const recipe_id = await getRecipeId(recipe_name)
  const SQL = `
  SELECT *
  FROM instructions 
  WHERE recipe_id = $1
  `;
  const response = await client.query(SQL,[recipe_id]);
  return response.rows;
};

module.exports = {
  createInstruction,
  fetchInstructions
}
