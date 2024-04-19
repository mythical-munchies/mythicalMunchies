import React from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/SingleWorld.css";
import ghibliBanner from "../images/banner_studioghibli.png";
import { useState, useEffect } from "react"
function SingleWorld() {
  const [world, setWorld] = useState({});
  const [recipes, setRecipes] = useState({});

  const {worldid} = useParams();
  useEffect(()=> {
    const fetchSingleWorld = async() => {
      const response = await fetch (`https://mythicalmunchies.onrender.com/mythicalMunchies/worlds/${worldid}`);
      const json = await response.json();
      console.log(json)
      setWorld(json);
    };
    fetchSingleWorld();
  }, []);


  const {recipeid} = useParams();
  useEffect(()=> {
    const fetchRecipes = async() => {
      const response = await fetch (`https://mythicalmunchies.onrender.com/mythicalMunchies/worlds/${worldid}/${recipeid}`);
      const json = await response.json();
      console.log(json)
      setRecipe(json);
    };
    fetchRecipes
  })
  
  return (
    <>
      <div className="single-container">
        <div className="gold-background">
          <Link to="/worlds" className="back-button">
            Back
          </Link>

          {/* TO MAP OVER - WILL IT NEED TO BE AN IF STATEMENT? */}

          {/* if ${world.id} === {recipe.id}

          return (
            {recipes.map((world) => {
              return (
                <div key={world.id} className="title">{world.name}</div>

              <div className="banner-image-container">
                <img src={world.img_url} className="banner-image" alt="world-banner"/>
              </div>

                            // how to change to recipe array?

              <div className="recipe-tile">
                <img className="recipe-image" src={recipe.img_url} alt="some yummy food!"/>
                  <Link target="blank" to="{`/single-recipe/$recipe.id}`}">Recipe.name</Link>
              </div>
              )
            })}
          )
           */}

            <div className="title"> World.name </div>

              <div className="banner-image-container">
                <img className="banner-image" src={ghibliBanner} alt="world-banner"/>
              </div>

        
              <div className="recipe-tile">
                <img className="recipe-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNUF7YgIkI8JGC9DDY3yRqYe5zFrNWuFpw5I_mV1PvpA&s" alt="Ham Ramen"/>
                  <Link target="blank" to="/single-recipe">Recipe.name</Link>
              </div>
        </div>
      </div>
    </>
  );
}

export default SingleWorld;


{/* <div className="recipe-tile">
          <img
            className="recipe-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNUF7YgIkI8JGC9DDY3yRqYe5zFrNWuFpw5I_mV1PvpA&s"
            alt="Ham Ramen"
          />
          <div className="movie-title">Ponyos</div>
          <div className="recipe-title">Ham Ramen</div>
        </div> */}
        {/* <div className="recipe-tile">
          <img
            className="recipe-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNUF7YgIkI8JGC9DDY3yRqYe5zFrNWuFpw5I_mV1PvpA&s"
            alt="Ham Ramen"
          />
          <div className="movie-title">Ponyos</div>
          <div className="recipe-title">Ham Ramen</div>
        </div> */}