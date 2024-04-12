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
//This will take you to a singular world. baseURL/worlds/:id
router.get("/:id", async (req, res, next) => {
  console.log(req);
  try {
    res.send(await fetchWorld());
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
