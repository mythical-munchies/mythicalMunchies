const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const secret = "ravioliRavioliGiveMeTheFormuioli";

const {
  // loginUser,
  createUser,
  fetchUserById,
  fetchUser,
  fetchUsers,
} = require("../db/users");
const { token } = require("morgan");

// Fetch All Users Route
//http://localhost:8080/mythicalmunchies/users/
router.get("/", async (req, res, next) => {
  try {
    const users = await fetchUsers();
    res.send({ users });
  } catch (error) {
    next(error);
  }
});

// Login Route
//http://localhost:8080/mythicalmunchies/users/login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await fetchUser(username)
    if (!user){
      res.send('No user found :(')
    } else {
      const passwordValidation = await bcrypt.compare(password, user.password)
      if (!passwordValidation) {
        res.send('You shall not pass :(')
      }
    }
    res.status(200).json({
      message: "Login successful!",
      user, 
      token: JWT.sign({user: user.username}, secret)
    });
    console.log(token)
  } catch (error) {
    res.status(401).json({
      error: `Error: ${error.message}`,
    });
  }
});

// Signup Route
//http://localhost:8080/mythicalmunchies/users/signup
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

// Fetch Single User Route
//http://localhost:8080/mythicalmunchies/users/:user_id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await fetchUserById(id);
    res.send({ user });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
