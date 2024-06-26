import React from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/SingleWorld.css";
import { useState, useEffect } from "react"

function SingleWorld() {
  const [world, setWorld] = useState({});
  const [recipes, setRecipes] = useState([]);

  const { worldid } = useParams();
  useEffect(() => {
    const fetchSingleWorld = async () => {
      const response = await fetch(
        `https://mythicalmunchies.onrender.com/mythicalMunchies/worlds/${worldid}`
      );
      const json = await response.json();
      console.log("THIS IS A SINGLE WORLD", json);
      setWorld(json);
    };
    fetchSingleWorld();
  }, []);

  const { recipeid } = useParams();
  useEffect(() => {
    const fetchWorldRecipes = async () => {
      const response = await fetch(
        `https://mythicalmunchies.onrender.com/mythicalMunchies/recipes/${worldid}`
      );
      const json = await response.json();
      console.log("THESE ARE WORLD RECIPES", json);
      console.log(worldid);
      setRecipes(json);
    };
    fetchWorldRecipes();
  }, []);

  return (
    <>
      <div className="single-container">
        <div className="gold-background">
          <Link to="/worlds" className="back-button">
            Back
          </Link>
                <div  className="title">{world.name}</div>
                  <div className="banner-image-container">
                    <img src={world.banner_url} className="banner-image" alt="world-banner"/>
                  </div>
                    {recipes.map((recipe) => {
                      return (
                    <>
                       <div key={recipe.id} className="recipe-tile">
                         <img className="recipe-image" src={recipe.img_url} alt="some yummy food!"/>
                          <Link className="recipe-title" target="blank" to={`/single-world/${world.id}/single-recipe/${recipe.id}`}>{recipe.name}</Link>
                       </div>
                    </>
                  )
              })}
        </div>
      </div>
    </>
  );
}

export default SingleWorld;

