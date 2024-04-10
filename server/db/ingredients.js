const client = require("./client")

const createIngredient = async ({name, description}) => {
  const SQL = `
  INSERT INTO ingredients(id, name, description)
  VALUES($1, $2, $3)
  RETURNING *
  `;
  const response = await client.query(SQL, [uuid.v4(), name, description]);
  return response.rows[0];
};

module.exports = {
  createIngredient
}