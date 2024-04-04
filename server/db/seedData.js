const client = require('./client')
const uuid = require('uuid');

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
      name VARCHAR(100) NOT NULL UNIQUE
    );
    CREATE TABLE users(
      id UUID PRIMARY KEY,
      username VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(50) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE
    );
    CREATE TABLE allergens(
      id UUID PRIMARY KEY,
      name VARCHAR(255) NOT NULL UNIQUE
    );
    CREATE TABLE ingredients(
      id UUID PRIMARY KEY,
      name VARCHAR(255) NOT NULL UNIQUE,
      description TEXT
    );
    CREATE TABLE ingredient_allergen(
      id UUID PRIMARY KEY,
      ingredient_id UUID REFERENCES ingredients(id) NOT NULL,
      allergen_is UUID REFERENCES allergens(id)
    );
    CREATE TABLE recipes(
      id UUID PRIMARY KEY,
      name VARCHAR(255) NOT NULL UNIQUE,
      description TEXT,
      world_id UUID REFERENCES worlds(id) NOT NULL,
      user_id UUID REFERENCES users(id) 
    );
    CREATE TABLE image_url(
      id UUID PRIMARY KEY,
      url TEXT,
      recipe_id UUID REFERENCES recipes(id) NOT NULL
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

async function rebuild() {
  try {
      await client.connect()
      await dropTables()
      await createTables()
      // await createInitialData()
  } catch (error) {
      console.log(error.message)
  }
}

rebuild().finally(() => client.end())
module.exports = {
  rebuild
};