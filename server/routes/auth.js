const express = require("express");
const router = express.Router();
// double check that file path below is correct
const { loginUser, createUser } = require("../db/users");

// Login Route
router.post("/login", async (req, res) => {
  // Login Logic Time! Pulled from server/db/users.js
  const { email, password } = req.body;
  try {
    const user = await loginUser({ email, password }); // Pass an object with email and password properties
    res.status(200).json({
      message:
        "Bravo! 🎉✨ You've unlocked the gates to our magical realm once more! 🚪🔓 Welcome back to Mythical Munchies! 🍰🌈 Let the culinary adventures begin anew! 🍽️✨",
      user,
    });
  } catch (error) {
    res.status(401).json({
      error: `Uh-oh! 🧙‍♂️🔮 Let's give it another go! 🛠️🌈 Error: ${error.message}`,
    });
  }
});

// Signup Route
router.post("/signup", async (req, res) => {
  // Signup Logic Time!! Pulled from server/db/users.js
  const { email, password } = req.body;
  try {
    const newUser = await createUser({ email, password }); // Pass an object with email and password properties
    res.status(201).json({
      message:
        "Voila! 🎩🌟 You're officially enchanted into the realm of Mythical Munchies! 🧁✨ Welcome aboard the fantastical feast! 🍽️🔮",
      user: newUser,
    });
  } catch (error) {
    res.status(400).json({
      error: `Uh-oh! 🧙‍♂️🔮 Looks like something went wrong while creating your account! Let's give it another go! 🛠️🌈 Error: ${error.message}`,
    });
  }
});

module.exports = router;
