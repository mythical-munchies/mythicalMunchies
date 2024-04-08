const client = require('./client');
const uuid = require('uuid');
const {recipes} = require('data.js');
const data = require('data.json')

//drop all tables if any exist 
const dropTables = async() => {
  const SQL = `
  DROP TABLE IF EXISTS user_recipe;
  DROP TABLE IF EXISTS recipe_ingredient;
  DROP TABLE IF EXISTS image_url; 
  DROP TABLE IF EXISTS ingredient_allergen;
  DROP TABLE IF EXISTS ingredients;
  DROP TABLE IF EXISTS allergens;
  DROP TABLE IF EXISTS users CASCADE;
  DROP TABLE IF EXISTS worlds CASCADE;
  DROP TABLE IF EXISTS recipes CASCADE;
  `;
  await client.query(SQL);
};

//async function to create tables back
const createTables = async() => {
  const SQL = `
    CREATE TABLE worlds(
      id UUID PRIMARY KEY,
      name VARCHAR(100) NOT NULL UNIQUE,
      img_url VARCHAR(500)
    );
    CREATE TABLE users(
      id UUID PRIMARY KEY,
      username VARCHAR(255) NOT NULL UNIQUE,
      email VARCHAR(255) NOT NULL UNIQUE
      password VARCHAR(50) NOT NULL,
    );
    CREATE TABLE ingredients(
      id UUID PRIMARY KEY,
      name VARCHAR(255) NOT NULL UNIQUE,
      description TEXT
    );
    CREATE TABLE recipes(
      id UUID PRIMARY KEY,
      name VARCHAR(255) NOT NULL UNIQUE,
      description TEXT,
      world_id UUID REFERENCES worlds(id) NOT NULL,
      user_id UUID REFERENCES users(id),
      img_url VARCHAR(500)
    );
    CREATE TABLE recipe_ingredient(
      id UUID PRIMARY KEY,
      recipe_id UUID REFERENCES recipes(id) NOT NULL,
      ingredient_id UUID REFERENCES ingredients(id) NOT NULL,
      amount INT,
      unit VARCHAR(255)
    );
    CREATE TABLE user_recipe(
      id UUID PRIMARY KEY,
      user_id UUID REFERENCES users(id) NOT NULL,
      recipe_id UUID REFERENCES recipes(id) NOT NULL,
      rating INT,
      review TEXT
    );
  `;
  await client.query(SQL);
}

const seedUsers = async () => {
  // let SQL = ``
  // let userCount = 0
  for (let i =0; i < users.length; i++){
    createUser(users[i])
  }
}

async function rebuild() {
  try {
      await client.connect()
      await dropTables()
      await createTables()
      // await createInitialData()
      //await seedUsers
  } catch (error) {
      console.log(error.message)
  }
}

rebuild().finally(() => client.end())
module.exports = {
  rebuild
};