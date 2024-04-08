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

const fetchWorlds = async () => {
  const SQL = `
  SELECT *
  FROM worlds
  `;
  const response = await client.query(SQL);
  return response.rows[0];
};

const fetchWorld = async (world_id) => {
  const SQL = `
  SELECT *
  FROM worlds
  WHERE world_id = $1
  `;
  const response = await client.query(SQL, [world_id]);
  return response.rows[0];
};

module.exports = {
  createWorld,
  fetchWorlds,
  fetchWorld
}