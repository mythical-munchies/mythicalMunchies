const express = require("express");
const router = express.Router();
const { fetchWorlds, fetchWorld } = require("../db/worlds");

router.get("/", async (req, res, next) => {
  try {
    res.send(await fetchWorlds());
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    res.send(await fetchWorld());
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
