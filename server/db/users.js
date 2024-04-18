const client = require("./client");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const { getRecipeId } = require("./recipes");

//Create a user
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

//Get a user's ID
const getUserID = async (username) => {
  const SQL = `
  SELECT *
  FROM users
  WHERE username = $1
  `;
  let { rows } = await client.query(SQL, [username]);
  const user_id = rows[0];
  console.log(user_id.id)
  return user_id.id;
};

//Create a Review
const createUserRecipe = async ({
  username,
  recipe_name,
  rating,
  review,
  bookmarked,
}) => {
  const user_id = await getUserID(username);
  const recipe_id = await getRecipeId(recipe_name);
  const SQL = `
  INSERT INTO user_recipes(id, user_id, recipe_id, rating, review, bookmarked)
  VALUES($1, $2, $3, $4, $5, $6)
  RETURNING *
  `;
  const response = await client.query(SQL, [
    uuid.v4(),
    user_id,
    recipe_id,
    rating,
    review,
    bookmarked,
  ]);
  return response.rows[0];
};

//Get all users, may not be needed
const fetchUsers = async () => {
  const SQL = `
    SELECT *
    FROM users
  `;
  const response = await client.query(SQL);
  return response.rows;
};

//fetch single user by username
const fetchUser = async (username) => {
  const id = await getUserID(username);
  console.log(`fetch single ${id}`)
  const SQL = `
    SELECT *
    FROM users
    WHERE id = $1
  `;
  const response = await client.query(SQL, [id]);
  return response.rows[0];
};

//fetch user by id
const fetchUserById = async (id) => {
  const SQL = `
    SELECT *
    FROM users
    WHERE id = $1
  `;
  const response = await client.query(SQL, [id]);
  return response.rows[0];
};

// added to Lucas's original code to account for the login using username or email
// const fetchUserByEmailOrUsername = async (username, email) => {
//   const SQL = `
//     SELECT *
//     FROM users
//     WHERE email = $1 OR username = $2
//   `;
//   const response = await client.query(SQL, [username, email]);
//   return response.rows[0];
// };

// const loginUser = async (username, password) => {
//   // Query the database to find the user based on email or username
//   // const user = await fetchUserByEmailOrUsername(usernameOrEmail);
//   console.log(user);
//   // If user is not found or password doesn't match, throw an error
//   if (!user || !bcrypt.compareSync(password, user.password)) {
//     throw new Error("Invalid credentials");
//   }
//   return user;
// };

//End of Simone's testing code

//Get all of a recipe's reviews 
const fetchRecipeReviews = async (recipe_id) => {
  const SQL = `
  SELECT *
  FROM user_recipes
  WHERE recipe_id = $1
  `;
  const response = await client.query(SQL, [recipe_id]);
  return response.rows;
}

//Get all of a user's reviews
const fetchUserReviews = async (user_id) => {
  const SQL = `
  SELECT *
  FROM user_recipes
  WHERE user_id = $1
`;
  const response = await client.query(SQL, [user_id]);
  return response.rows;
};

//Get a single review
const fetchReview = async ({id}) => {
  const SQL = `
  SELECT *
  FROM user_recipes 
  WHERE id = $1
  `;
  const response = await client.query(SQL, [id])
  return response.rows;
};

//Update a review 
// const updateReview = async ({ user_id, id }) => {
//   const SQL = `
//     UPDATE user_recipes

//     WHERE id = $1 AND user_id = $2
//     RETURNING *
//   `;
//   const response = await client.query(SQL, [id, user_id]);
//   if (!response.rows.length) {
//     const error = Error("no review found");
//     error.status = 500;
//     throw error;
//   }
// };

//Delete a user's review
const deleteReview = async ({ user_id, id }) => {
  const SQL = `
    DELETE FROM user_recipes
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
  fetchUserById,
  fetchUserReviews,
  deleteReview,
  // fetchUserByEmailOrUsername,
  // loginUser,
  fetchRecipeReviews,
  fetchReview
};
