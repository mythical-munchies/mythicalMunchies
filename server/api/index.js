const express = require('express');
const apiRouter = express.Router();
//BaseURL: http://localhost:8080/mythicalmunchies

//go to worlds.js API 
apiRouter.use("/worlds", require("./worlds.js"))

apiRouter.use("/recipes", require("./recipes.js"))

apiRouter.use("/users", require("./users.js"))

module.exports = apiRouter