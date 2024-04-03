import client from "../client.js";

export const createTables = async() => {
  const SQL = `
  DROP TABLE IF EXISTS reviews;
  DROP TABLE IF EXISTS recipes;
  DROP TABLE IF EXISTS users;
  DROP TABLE IF EXISTS worlds;
  CREATE TABLE worlds(
    id UUID PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
  );
  CREATE TABLE users(
    id UUID PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    birthday DATE,
    pronouns VARCHAR(50),
    about VARCHAR(280)
  );
  CREATE TABLE recipes(
    id UUID PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    world_id UUID REFERENCES worlds(id) NOT NULL,
    ingredients VARCHAR(65000) NOT NULL,
    instructions VARCHAR(65000) NOT NULL,
    isDairyFree boolean DEFAULT false,
    isVegetarian boolean DEFAULT false,
    isNutFree boolean DEFAULT false,
    isGlutenFree boolean DEFAULT false,
    isEggFree boolean DEFAULT false,
    isSeafoodFree boolean DEFAULT false
  );
  CREATE TABLE reviews(
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id) NOT NULL,
    recipe_id UUID REFERENCES recipes(id) NOT NULL,
    CONSTRAINT user_review_unique UNIQUE (user_id, recipe_id),
    rating decimal(2,1),
    CONSTRAINT chk_rating CHECK (rating >= 0 AND rating <= 5),
    review VARCHAR(300)
  );
  `;
  await client.query(SQL);
};
