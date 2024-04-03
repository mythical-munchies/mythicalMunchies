import React, { useState } from "react";
import { Link } from "react-router-dom"
import "./styles/SingleRecipe.css";
import Rating from './styles/rating'



function SingleRecipe() {
  return (
    <>
    {/* <div className="whole-page"> */}
      <div className="goldy-background">
      <Link to="/single-world" className="back-button-recipe">Back</Link>

        <div className="title">
          <h1 className="recipe-world-title">Studio Ghibli</h1>
        </div>

        <div className="top-container">
          {/* button should only work if logged in */}
          {/* if logged in and working, should change text to added! */}
          <Link to ="/my-bookmarks"><button className="bookmark">Add to Bookmarks</button></Link>

          <div className="title-container">
            <h4>Ponyo Ham </h4>
            <img className="recipe-test-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNUF7YgIkI8JGC9DDY3yRqYe5zFrNWuFpw5I_mV1PvpA&s" alt="test" />
          </div>
            

          <div className="ratings">
            <Rating />
            <Link to ="/my-reviews" className="review-button">Leave a Review 👍🏻</Link>
          </div>
      </div>

      <div className="ingredients-container">
        <div className="ingredients-post">
          <h4 className="ingredients-title">Ingredients:</h4>
        {/* this will eventually be an array.map to display the ingredients */}
          <ul className="ingredient-list">
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        </div>
      </div>

      <div className="instructions-container">
        <div className="instructions">
          <ol>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum explicabo aliquid similique. Rem dolorum autem nesciunt eum facilis eveniet quia nostrum tenetur, ducimus sunt delectus accusantium a nobis iste impedit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum hic id veniam neque ea voluptatem ullam reprehenderit quibusdam eveniet dicta asperiores, quasi optio odio repudiandae porro necessitatibus soluta vitae.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum hic id veniam neque ea voluptatem ullam reprehenderit quibusdam eveniet dicta asperiores, quasi optio odio repudiandae porro necessitatibus soluta vitae.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum hic id veniam neque ea voluptatem ullam reprehenderit quibusdam eveniet dicta asperiores, quasi optio odio repudiandae porro necessitatibus soluta vitae.</li>
            
          </ol>
        </div>
      </div>

      <div className="reviews-container">
        <div className="review-box">
          <p>Username:</p>
          <p className="review">love this recipe! So good!!!!!</p>
          <Rating className="rating-review" />
        </div>
      </div>


      </div>     
      {/* </div> */}

     
       
    
    
  
    </>
  )
}

export default SingleRecipe

    {/* <div className="testings">
    <h1>REMINDER: We need to change the urls to display the correct world name and food</h1>
    <h1>This is Butter Beer Recipe Test!</h1>
  </div> */}