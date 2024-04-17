const express = require("express");
const router = express.Router();
const { fetchWorlds, fetchWorld } = require("../db/worlds");

//Fetch All Worlds
//http://localhost:8080/mythicalmunchies/worlds/
router.get("/", async (req, res, next) => {
  try {
    res.send(await fetchWorlds());
  } catch (err) {
    console.log(err);
  }
});

//Fetch Single World
//http://localhost:8080/mythicalmunchies/worlds/:id
router.get("/:id", async (req, res, next) => {
  console.log(req.params.id);
  try {
    res.send(await fetchWorld(req.params.id));
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
