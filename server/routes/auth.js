const express = require("express");
const router = express.Router();
const {
  loginUser,
  createUser,
  fetchUserByEmailOrUsername,
  fetchUser,
} = require("../db/users");

// Login Route
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
router.post("/signup", async (req, res) => {
  const { usernameOrEmail, password } = req.body;

  try {
    let newUser;

    // Check if the input is an email. That crazy thing is directly from StackOverflow to test for emails.
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usernameOrEmail);

    if (isEmail) {
      // If it's an email, attempt to create a new user using the provided email
      newUser = await createUser({ email: usernameOrEmail, password });
    } else {
      // If it's a username, attempt to create a new user using the provided username
      newUser = await createUser({ username: usernameOrEmail, password });
    }

    // These are backend success and error messages
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

module.exports = router;

//Old Code

// const express = require("express");
// const router = express.Router();
// const { loginUser, createUser } = require("../db/users");

// // Login Route
// router.post("/login", async (req, res) => {
//   // Login Logic Time! Pulled from server/db/users.js
//   const { email, password } = req.body;
//   try {
//     const user = await loginUser({ email, password });
//     res.status(200).json({
//       message:
//         "Bravo! 🎉✨ You've unlocked the gates to our magical realm once more! 🚪🔓 Welcome back to Mythical Munchies! 🍰🌈 Let the culinary adventures begin anew! 🍽️✨",
//       user,
//     });
//   } catch (error) {
//     res.status(401).json({
//       error: `Uh-oh! 🧙‍♂️🔮 Let's give it another go! 🛠️🌈 Error: ${error.message}`,
//     });
//   }
// });

// // Signup Route
// router.post("/signup", async (req, res) => {
//   // Signup Logic Time!! Pulled from server/db/users.js
//   const { email, password } = req.body;
//   try {
//     const newUser = await createUser({ email, password });
//     res.status(201).json({
//       message:
//         "Voila! 🎩🌟 You're officially enchanted into the realm of Mythical Munchies! 🧁✨ Welcome aboard the fantastical feast! 🍽️🔮",
//       user: newUser,
//     });
//   } catch (error) {
//     res.status(400).json({
//       error: `Uh-oh! 🧙‍♂️🔮 Looks like something went wrong while creating your account! Let's give it another go! 🛠️🌈 Error: ${error.message}`,
//     });
//   }
// });

// module.exports = router;
