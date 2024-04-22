const client = require("./client");
const uuid = require("uuid");

const { createIngredient } = require("./ingredients");
const { ingredients } = require("./seedArrays/ingrSeedData.js");
const { recipe_ingredients } = require("./seedArrays/recipeIngrData.js");
const { createRecipe, createRecipeIngredient } = require("./recipes.js");
const { recipes } = require("./seedArrays/recipesSeedData.js");
const { createWorld } = require("./worlds.js");
const { worlds } = require("./seedArrays/worldSeedData.js");
const { createUser, createUserRecipe } = require("./users.js");
const { users } = require("./seedArrays/userSeedData");
const { instructions } = require("./seedArrays/instSeedData.js");
const { createInstruction } = require("./instructions.js");
const { tags } = require("./seedArrays/tagSeedData.js");
const { createTag, createRecipeTag } = require("./tags.js");
const { recipe_tags } = require("./seedArrays/recipeTagsSeed.js");
const { user_recipes } = require("./seedArrays/userRecipeSeed.js");

//Drop all tables if any exist to avoid duplicates
const dropTables = async () => {
  const SQL = `
  DROP TABLE IF EXISTS user_recipes;
  DROP TABLE IF EXISTS recipe_ingredients;
  DROP TABLE IF EXISTS ingredients CASCADE;
  DROP TABLE IF EXISTS recipe_tags;
  DROP TABLE IF EXISTS instructions;
  DROP TABLE IF EXISTS tags CASCADE;
  DROP TABLE IF EXISTS users CASCADE;
  DROP TABLE IF EXISTS worlds CASCADE;
  DROP TABLE IF EXISTS recipes CASCADE;
  `;
  await client.query(SQL);
};

//Async function to create tables
const createTables = async () => {
  const SQL = `
    CREATE TABLE worlds(
      id UUID PRIMARY KEY,
      name VARCHAR(100) NOT NULL UNIQUE,
      img_url VARCHAR(500),
      banner_url VARCHAR(900)
    );
    CREATE TABLE users(
      id UUID PRIMARY KEY,
      username VARCHAR(500) UNIQUE,
      email VARCHAR(500) UNIQUE,
      password VARCHAR(500) NOT NULL
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
      cook_time VARCHAR(255),
      world_id VARCHAR(500),
      img_url VARCHAR(900)
    );
    CREATE TABLE recipe_ingredients(
      id UUID PRIMARY KEY,
      recipe_id UUID REFERENCES recipes(id) NOT NULL,
      ingredient_id UUID REFERENCES ingredients(id) NOT NULL,
      amount VARCHAR(500),
      unit VARCHAR(500)
    );
    CREATE TABLE user_recipes(
      id UUID PRIMARY KEY,
      user_id UUID REFERENCES users(id) NOT NULL,
      recipe_id UUID REFERENCES recipes(id) NOT NULL,
      rating INT,
      review TEXT,
      bookmarked BOOLEAN DEFAULT false
    );
    CREATE TABLE instructions(
      id UUID PRIMARY KEY,
      recipe_id UUID REFERENCES recipes(id) NOT NULL,
      description TEXT,
      index INT
    );
    CREATE TABLE tags(
      id UUID PRIMARY KEY,
      description TEXT
    );
    CREATE TABLE recipe_tags(
      id UUID PRIMARY KEY,
      recipe_id UUID REFERENCES recipes(id) NOT NULL,
      tag_id UUID REFERENCES tags(id)
    );
  `;
  await client.query(SQL);
};

//Seeding worlds using create function from db/worlds.js and the array of worlds in db/seedArrays/worldSeedData.js
async function seedWorlds(client) {
  try {
    for (const world of worlds) {
      const createdWorld = await createWorld(world);
    }
  } catch (error) {
    console.error("Error seeding worlds:", error);
    throw error; // Re-throw to indicate failure
  }
}

//Seeding users using create function from db/users.js and the array of users in db/seedArrays/usersSeedData.js
async function seedUsers(client) {
  try {
    for (const user of users) {
      const createdUser = await createUser(user);
    }
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error; // Re-throw to indicate failure
  }
}

//Seeding ingredients using create function from db/ingredients.js and the array of Ingredients in db/seedArrays/ingrSeedData.js
async function seedIngr(client) {
  try {
    for (const ingredient of ingredients) {
      const createdIngr = await createIngredient(ingredient);
    }
  } catch (error) {
    console.error("Error seeding ingredients:", error);
    throw error; // Re-throw to indicate failure
  }
}

//Seeding Recipes using create function from db/recipes.js and the array of Recipes in db/seedArrays/recipesSeedData.js
async function seedRecipes(client) {
  try {
    for (const recipe of recipes) {
      console.log(recipe);
      const createdRecipe = await createRecipe(recipe);
    }
  } catch (error) {
    console.error("Error seeding recipes:", error);
    throw error; // Re-throw to indicate failure
  }
}

//Seeding instructions using create function from db/instructions.js and the array of Instructions in db/seedArrays/instSeedData.js
async function seedInst(client) {
  try {
    for (const instruction of instructions) {
      const createdInst = await createInstruction(instruction);
    }
  } catch (error) {
    console.error("Error seeding instructions:", error);
    throw error; // Re-throw to indicate failure
  }
}

//Seeding recipe ingredients using create function from db/recipes.js and the array of Recipe Ingredients in db/seedArrays/recipeIngrSeedData.js
async function seedRecipeIngr(client) {
  try {
    for (const recipe_ingredient of recipe_ingredients) {
      const createdRecipeIngr = await createRecipeIngredient(recipe_ingredient);
    }
  } catch (error) {
    console.error("Error seeding recipe ingredients:", error);
    throw error; // Re-throw to indicate failure
  }
}

//Seeding tags
async function seedTags(client) {
  try {
    for (const tag of tags) {
      const createdTag = await createTag(tag);
    }
  } catch (error) {
    console.error("Error seeding tags:", error);
    throw error; // Re-throw to indicate failure
  }
}

//Seeding recipe tags
async function seedRecipeTags(client) {
  try {
    let tagsArr = [];
    for (const recipe_tag of recipe_tags) {
      const createdRecipeTag = await createRecipeTag(recipe_tag);
      tagsArr.push(createdRecipeTag);
    }
    return tagsArr;
  } catch (error) {
    console.error("Error seeding recipe tags:", error);
    throw error; // Re-throw to indicate failure
  }
}

//seeding user reviews(recipes)
async function seedUserRecipes(client) {
  try {
    let userRecipesArr = [];
    for (const user_recipe of user_recipes) {
      const createdReview = await createUserRecipe(user_recipe);
      userRecipesArr.push(createdReview)
    }
    return userRecipesArr;
  } catch (error) {
    console.error("Error seeding user recipes:", error);
    throw error; // Re-throw to indicate failure
  }
}

//function to rebuild the db, called in seeed.js using npm run seed
async function rebuild() {
  try {
    await client.connect();
    await dropTables();
    await createTables();
    await seedWorlds();
    await seedUsers();
    await seedIngr();
    await seedRecipes();
    await seedInst();
    await seedRecipeIngr();
    await seedTags();
    await seedRecipeTags();
    await seedUserRecipes();
    console.log("rebuild complete");
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { rebuild };
