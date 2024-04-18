const client = require("./client");
const uuid = require("uuid");
const {getRecipeId} = require('./recipes');

//Create a tag
const createTag = async ({description}) => {
  const SQL = `
  INSERT INTO tags(id, description)
  VALUES ($1, $2)
  RETURNING *
  `;
  const response = await client.query(SQL, [uuid.v4(), description]);
  return response.rows[0]
};

//Get tag's Id to use in tag recipe
const getTagId = async (description) => {
  const SQL = `
  SELECT *
  FROM tags
  WHERE description = $1
  `;
  // console.log(description)
  let {rows} = await client.query(SQL, [description])
  // console.log(rows)
  const tag_id = rows[0]
  return tag_id.id
};

//Add a tag to a recipe
const createRecipeTag = async ({recipe_name, description}) => {
  const tag_id = await getTagId(description)
  const recipe_id = await getRecipeId(recipe_name)
  const SQL = `
  INSERT INTO recipe_tags(id, recipe_id, tag_id)
  VALUES ($1, $2, $3)
  RETURNING *
  `;
  const response = await client.query(SQL, [uuid.v4(), recipe_id, tag_id])
  return response.rows;
};

//Fetch recipe's tags
const fetchRecipeTags = async (recipe_id) => {
  // const recipe_id = await getRecipeId(recipe_name)
  const SQL = `
  SELECT *
  FROM recipe_tags
  WHERE recipe_id = $1
  `;
  const response = await client.query(SQL, [recipe_id])
  return response.rows;
};

module.exports = {createTag, createRecipeTag, fetchRecipeTags}