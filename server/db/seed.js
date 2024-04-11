const client = require("./client");
const { rebuild } = require("./seedData");

rebuild()
  .catch(console.error)
  .finally(() => client.end());
