const client = require("./client")

const createWorld = async ({name, img_url}) => {
  const SQL = `
  INSERT INTO worlds(id, name, img_url)
  VALUES($1, $2, $3)
  RETURNING *
  `;
  const response = await client.query(SQL, [uuid.v4(), name, img_url]);
  return response.rows[0];
};

module.exports = {
  createWorld
}