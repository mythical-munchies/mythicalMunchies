const client = require('./client');
const uuid = require("uuid");

const {createIngredient} = require('./ingredients');
const {ingredients} = require('./seedArrays/ingrSeedData.js')
const {recipe_ingredients} = require('./seedArrays/recipeIngrData.js');
const {createRecipe, createRecipeIngredient} = require('./recipes.js')
const {recipes} = require('./seedArrays/recipesSeedData.js');
const {createWorld} = require('./worlds.js');
const {worlds} = require('./seedArrays/worldSeedData.js');
const {createUser, createUserRecipe} = require('./users.js');
const {users} = require('./seedArrays/userSeedData');
const {instructions} = require('./seedArrays/instSeedData.js');
const {createInstruction} = require('./instructions.js');
const {tags} = require('./seedArrays/tagSeedData.js');
const {createTag, createRecipeTag} = require('./tags.js');
const {recipe_tags} = require('./seedArrays/recipeTagsSeed.js');
const {user_recipes} = require('./seedArrays/userRecipeSeed.js');


//drop all tables if any exist to avoid duplicates
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

//async function to create tables
const createTables = async () => {
  const SQL = `
    CREATE TABLE worlds(
      id UUID PRIMARY KEY,
      name VARCHAR(100) NOT NULL UNIQUE,
      img_url VARCHAR(500)
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
      img_url VARCHAR(500)
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

//seeding worlds using create function from db/worlds.js and the array of worlds in db/seedArrays/worldSeedData.js
async function seedWorlds(client) {
  try {
    for (const world of worlds) {
      const createdWorld = await createWorld(world);
      // console.log(`Created world: ${createdWorld.name}`);
      // console.log(`${createdWorld.id}`); 
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
      console.log(`Created user: ${JSON.stringify(createdUser)}`); 
    }
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error; // Re-throw to indicate failure
  }
}

//Seeding Ingredients using create function from db/ingredients.js and the array of Ingredients in db/seedArrays/ingrSeedData.js
async function seedIngr(client) {
  try {
    for (const ingredient of ingredients) {
      const createdIngr = await createIngredient(ingredient);
      // console.log(`Created ingr: ${createdIngr.name}`); //
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
      console.log(recipe)
      const createdRecipe = await createRecipe(recipe);
      console.log(`Created recipe: ${createdRecipe.id}`); //
    }
  } catch (error) {
    console.error("Error seeding recipes:", error);
    throw error; // Re-throw to indicate failure
  }
}

//Seeding Instructions using create function from db/instructions.js and the array of Instructions in db/seedArrays/instSeedData.js
async function seedInst(client) {
  try {
    for (const instruction of instructions) {
      const createdInst = await createInstruction(instruction);
      // console.log(`Created step ${createdInst.index} for ${JSON.stringify(createdInst)}`); 
    }
  } catch (error) {
    console.error('Error seeding instructions:', error);
    throw error; // Re-throw to indicate failure
  }
};

//Seeding Recipe Ingredients using create function from db/recipes.js and the array of Recipe Ingredients in db/seedArrays/recipeIngrSeedData.js
async function seedRecipeIngr(client) {
  try {
    for (const recipe_ingredient of recipe_ingredients) {
      const createdRecipeIngr = await createRecipeIngredient(recipe_ingredient);
      // console.log(`Created ingredients for: ${JSON.stringify(createdRecipeIngr)}`); 
    }
  } catch (error) {
    console.error("Error seeding recipe ingredients:", error);
    throw error; // Re-throw to indicate failure
  }
};

//Seeding Tags
async function seedTags(client) {
  try {
    for (const tag of tags) {
      const createdTag = await createTag(tag);
      console.log(`Creates ${JSON.stringify(createdTag)}`)
    }
  } catch (error) {
    console.error("Error seeding tags:", error);
    throw error; // Re-throw to indicate failure
  }
};

//Seeding recipe tags
async function seedRecipeTags(client) {
  try {
    let tagsArr = []
    for (const recipe_tag of recipe_tags) {
      const createdRecipeTag = await createRecipeTag(recipe_tag);
      tagsArr.push(createdRecipeTag)
      // console.log(`Tagged ${JSON.stringify(createdRecipeTag)}`)
      // console.log(tagsArr)
    }
    return tagsArr
  } catch (error) {
    console.error("Error seeding recipe tags:", error);
    throw error; // Re-throw to indicate failure
  }
};

//seeding user reviews(recipes)
async function seedUserRecipes(client) {
  try {
    let userRecipesArr = []
    for (const user_recipe of user_recipes) {
      const createdReview = await createUserRecipe(user_recipe);
      userRecipesArr.push(createdReview)
      console.log(userRecipesArr)
    }
    return userRecipesArr
  } catch(error) {
    console.error("Error seeding user recipes:", error);
    throw error; // Re-throw to indicate failure
  }
};


//function to rebuild the db, called in seeed.js using npm run seed
async function rebuild() {
  try {
    await client.connect();
    await dropTables();
    console.log("tables yeeted");
    await createTables();
    console.log("tables built");
    await seedWorlds();
    console.log("seeded worlds");
    await seedUsers();
    console.log("seeded users");
    await seedIngr();
    console.log("ingredients seeded");
    await seedRecipes();
    console.log('seeded recipes');
    await seedInst();
    console.log('seeded instructions');
    await seedRecipeIngr();
    console.log('gathered ingredients for recipes');
    await seedTags();
    console.log('tags seeded');
    await seedRecipeTags();
    console.log('tagged recipes');
    await seedUserRecipes();
    console.log('added reviews');
  } catch (error) {
    console.log(error.message);
  }
}

// rebuild().finally(() => client.end());
module.exports = {
  rebuild,
};
