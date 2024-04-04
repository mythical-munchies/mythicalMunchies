// import { createRequire } from "module";
// const require = createRequire(import.meta.url);

const express = require('express');
const apiRouter = express.Router();

apiRouter.use("/worlds", require("./worlds.js"))

apiRouter.use("/recipes", require("./recipes.js"))

apiRouter.use("/users", require("./users.js"))

module.exports = apiRouter