const client = require("./client")
const bcrypt = require("bcrypt")
const salt_count = 10

async function getAllUsers() {
  try {
    const {rows} = await client.query('SELECT * FROM users ')
    return rows
  } catch(error) {
    console.log(error)
  }
}

async function createUser() {
  try {
   
  } catch(error) {
    console.log(error)
  }
}