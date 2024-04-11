const express = require('express');
const router = express.Router();
// import { fetchUsers } from '../db/users';

// const {authenticate, findUserWithToken, getRecipes} = require('./db')

const {
  loginUser,
  createUser,
  fetchUserByEmailOrUsername,
  fetchUser,
} = require("../db/users");

router.get('/', async(req, res, next)=> {
  try {
    const users = await fetchUsers()
    res.send({users});
  } catch (ex) {
    next (ex)
  }
});

//Login Route 
router.post("/login", async (req, res) => {
  const { usernameOrEmail, password } = req.body;

  try {
    const user = await loginUser({ usernameOrEmail, password });
    res.status(200).json({
      message: "Login successful!",
      user,
    });
  } catch (error) {
    res.status(401).json({
      error: `Error: ${error.message}`,
    });
  }
});

// Signup Route
// mythicalmunchies/signup - come back to this to update
router.post("/signup", async (req, res) => {
  const { usernameOrEmail, password } = req.body;

  try {
    let newUser;

    // Check if the input is an email
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usernameOrEmail);

    if (isEmail) {
      // If it's an email, attempt to create a new user using the provided email
      newUser = await createUser({ email: usernameOrEmail, password });
    } else {
      // If it's a username, attempt to create a new user using the provided username
      newUser = await createUser({ username: usernameOrEmail, password });
    }

    res.status(201).json({
      message: "Signup successful!",
      user: newUser,
    });
  } catch (error) {
    res.status(400).json({
      error: `Error: ${error.message}`,
    });
  }
});
module.exports = router

// Fetch User Route
router.get("/user/:user_id", async (req, res) => {
  const { user_id } = req.params;

  try {
    const user = await fetchUser(user_id);
    res.status(200).json({
      message: "User fetched successfully!",
      user,
    });
  } catch (error) {
    res.status(404).json({
      error: `Error: ${error.message}`,
    });
  }
});

// Creating the instance of express 
const app = express();

// To use the router for paths starting with '/auth'
app.use("/auth", router);

// This will start the server and listen on a port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Miracle Alert! Server is listening on port ${PORT}`);
});

// 
