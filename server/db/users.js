const client = require("./client");
const bcrypt = require("bcrypt");

const createUser = async ({ username, email, password }) => {
  const SQL = `
  INSERT INTO users(id, username, email, password)
  VALUES($1, $2, $3, $4)
  RETURNING *
  `;
  const response = await client.query(SQL, [
    uuid.v4(),
    username,
    email,
    await bcrypt.hash(password, 5),
  ]);
  return response.rows[0];
};

const createUserRecipe = async (user_id, recipe_id, rating, review) => {
  const SQL = `
  INSERT INTO user_recipe(id, user_id, recipe_id, rating, review)
  VALUES($1, $2, $3, $4, $5)
  `;
  const response = await client.query(SQL, [
    uuid.v4(),
    user_id,
    recipe_id,
    rating,
    review,
  ]);
  return response.rows[0];
};

const fetchUsers = async () => {
  const SQL = `
    SELECT *
    FROM users
  `;
  const response = await client.query(SQL);
  return response.rows;
};

const fetchUser = async (user_id) => {
  const SQL = `
    SELECT *
    FROM users
    WHERE user_id = $1
  `;
  const response = await client.query(SQL, [user_id]);
  return response.rows;
};

// added to Lucas's original code to account for the login using username or email
const fetchUserByEmailOrUsername = async (emailOrUsername) => {
  const SQL = `
    SELECT *
    FROM users
    WHERE email = $1 OR username = $2
  `;
  const response = await client.query(SQL, [emailOrUsername, emailOrUsername]);
  return response.rows;
};

const loginUser = async ({ emailOrUsername, password }) => {
  // Query the database to find the user based on email or username
  const user = await fetchUserByEmailOrUsername(emailOrUsername);
  // If user is not found or password doesn't match, throw an error
  if (!user || !bcrypt.compareSync(password, user.password)) {
    throw new Error("Invalid credentials");
  }
  return user;
};

//End of Simone's testing code

const fetchUserRecipes = async (user_id) => {
  const SQL = `
  SELECT *
  FROM user_recipe
  WHERE user_id = $1
`;
  const response = await client.query(SQL, [user_id]);
  return response.rows;
};

const deleteUserRecipe = async ({ user_id, id }) => {
  const SQL = `
    DELETE FROM user_recipe
    WHERE id = $1 AND user_id = $2
    RETURNING *
  `;
  const response = await client.query(SQL, [id, user_id]);
  if (!response.rows.length) {
    const error = Error("no review found");
    error.status = 500;
    throw error;
  }
};
module.exports = {
  createUser,
  createUserRecipe,
  fetchUsers,
  fetchUser,
  fetchUserRecipes,
  deleteUserRecipe,
  fetchUserByEmailOrUsername,
  loginUser,
};
