const client = require("./client")
const uuid = require("uuid");

const createInstruction = async ({recipe_name, description, index}) => {
  const SQL = `
  INSERT INTO instructions(id, recipe_name, description, index)
  VALUES($1, $2, $3, $4)
  RETURNING *
  `;
  const response = await client.query(SQL, [uuid.v4(), recipe_name, description, index]);
  return response.rows[0];
};

module.exports = {
  createInstruction
}
