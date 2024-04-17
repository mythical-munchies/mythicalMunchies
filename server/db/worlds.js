const client = require("./client");
const uuid = require("uuid");

//Create a world
const createWorld = async ({ name, img_url }) => {
  const SQL = `
  INSERT INTO worlds(id, name, img_url)
  VALUES($1, $2, $3)
  RETURNING *
  `;
  const response = await client.query(SQL, [uuid.v4(), name, img_url]);
  return response.rows[0];
};

//Fetch all worlds
const fetchWorlds = async () => {
  const SQL = `
  SELECT *
  FROM worlds
  `;
  const response = await client.query(SQL);
  return response.rows;
};

//Fetch a single world
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

//Get world's id by world name
const getWorldId = async ({name}) => {
  const SQL = `
  SELECT *
  FROM worlds 
  WHERE name = $1
  `;
  const response = await client.query(SQL, [name])
  return response.rows[0];
}

module.exports = {
  createWorld,
  fetchWorlds,
  fetchWorld,
  getWorldId
};
