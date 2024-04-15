const express = require('express');
const apiRouter = express.Router();
//BaseURL: http://localhost:8080/mythicalmunchies

//http://localhost:8080/mythicalmunchies/worlds
//Goes to api/worlds.js
apiRouter.use("/worlds", require("./worlds.js"))

//http://localhost:8080/mythicalmunchies/recipes
//Goes to api/recipes.js
apiRouter.use("/recipes", require("./recipes.js"))

//http://localhost:8080/mythicalmunchies/users
//Goes to api/users.js
apiRouter.use("/users", require("./users.js"))

module.exports = apiRouter