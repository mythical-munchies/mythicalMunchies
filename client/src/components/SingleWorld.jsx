import React from "react";
import { Link, useParams } from "react-router-dom";
import "./styles/SingleWorld.css";
import ghibliBanner from "./images/banner_studioghibli.png";
import { useState, useEffect } from "react"
function SingleWorld() {
  const [world, setWorld] = useState({});

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


  return (
    <>
    <div className="single-container">
      <div className="gold-background">
        <Link to="/worlds" className="back-button">
          Back
        </Link>

        {/* Make title linked to database. Hard coded for styling. */}
        <div className="title"> World.name </div>
        {/* Banner image */}
        <div className="banner-image-container">
          <img
            className="banner-image"
            src={ghibliBanner}
            alt="world-banner"
          />
        </div>

        {/* Recipe tiles */}
        <div className="recipe-tile">
          <img
            className="recipe-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNUF7YgIkI8JGC9DDY3yRqYe5zFrNWuFpw5I_mV1PvpA&s"
            alt="Ham Ramen"
          />
          {/* <div className="movie-title">Ponyos</div> */}
          <Link target="blank" to="/single-recipe" >Recipe.name</Link>
          {/* <div className="recipe-title">Ham Ramen</div> */}
        </div>
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
      </div>
    </div>
    </>
  );
}

export default SingleWorld;