const client = require("./client");
const uuid = require("uuid");
const createWorld = async ({ name, img_url }) => {
  const SQL = `
  INSERT INTO worlds(id, name, img_url)
  VALUES($1, $2, $3)
  RETURNING *
  `;
  const response = await client.query(SQL, [uuid.v4(), name, img_url]);
  return response.rows[0];
};

const fetchWorlds = async () => {
  const SQL = `
  SELECT *
  FROM worlds
  `;
  const response = await client.query(SQL);
  return response.rows;
};

const fetchWorld = async (id) => {
  const SQL = `
  SELECT *
  FROM worlds
  WHERE id = $1
  `;
  console.log(id);
  const response = await client.query(SQL, [id]);
  return response.rows[0];
};

module.exports = {
  createWorld,
  fetchWorlds,
  fetchWorld,
};
