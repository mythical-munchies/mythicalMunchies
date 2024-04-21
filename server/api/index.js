const express = require('express');
const apiRouter = express.Router();
//BaseURL: http://localhost:8080/mythicalmunchies

//http://localhost:8080/mythicalmunchies/worlds
apiRouter.use("/worlds", require("./worlds.js"))

//http://localhost:8080/mythicalmunchies/recipes
apiRouter.use("/recipes", require("./recipes.js"))

//http://localhost:8080/mythicalmunchies/users
apiRouter.use("/users", require("./users.js"))

//http://localhost:8080/mythicalmunchies/reviews
apiRouter.use("/reviews", require("./reviews.js"))

//http://localhost:8080/mythicalmunchies/tags
apiRouter.use("/tags", require("./tags.js"))

//http://localhost:8080/mythicalmunchies/ingredients
apiRouter.use("/ingredients", require("./ingredients.js"))

module.exports = apiRouter