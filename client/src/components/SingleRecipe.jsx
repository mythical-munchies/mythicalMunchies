import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./styles/SingleRecipe.css"
import { Link } from 'react-router-dom'
// import Rating from './mui-components/rating'
import Ramen from './images/ponyo-ramen.jpg'
import LeaveReview from './MyReviews'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function SingleRecipe() {
  return (

    <>
    <div className="single-container">
      <div className="goldy-background">
        <Link to="/single-world" className="back-button-recipe">Back</Link>
        <div className="title"> Studio Ghibli </div>
    {/* <div className='testingtons'> */}
        <Box className="boxes" sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid className='box-1'item xs={6} >
              <div className='intro'>
              
                <Link className="bookmark-button" to="/my-bookmarks"><button className="bookmark">Add to Bookmarks 📕</button></Link>
                <h4 className='recipe-name'>Ponyos Ham Ramen </h4>
                <img  className='pic' src={Ramen} alt="pic" />
            
              <div className="ratings">
                
                {/* <Link to ="/my-reviews" className="review-button">Leave a Review :)</Link> */}
                {/* <button className="review-button">Leave a Review :)</button> */}
                {/* TRYING MODAL HERE  */}
                <LeaveReview />
              </div>
              </div>
            </Grid>





        <Grid id="ingredients-list" item xs={6} >
          {/* <Item>2</Item> */}
          <div className="ingredients-post">
          <h4 className="ingredients-title">Ingredients:</h4>
        {/* this will eventually be an array.map to display the ingredients */}
          <ul className="ingredient-list">
            <li>1 lb. Rice</li>
            <li>2 cups Peas</li>
            <li>chicken noodles and soup with soda</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>THIS IS A TEST</li>
          </ul>
        </div>
        </Grid>





        <Grid id="intstructions" item xs={12} >
          {/* <Item>3</Item> */}
          <div className="instructions">

            <h2 className='cooking-title'>Cooking Instructions:</h2>
          <ol>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum explicabo aliquid similique. Rem dolorum autem nesciunt eum facilis eveniet quia nostrum tenetur, ducimus sunt delectus accusantium a nobis iste impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consequatur eaque autem dignissimos iusto. Veniam magni, optio officiis, hic possimus soluta, eius dolores rerum quam repudiandae odit. Consequatur, quasi accusamus!Lorem</li>
            <br />
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum hic id veniam neque ea voluptatem ullam reprehenderit quibusdam eveniet dicta asperiores, quasi optio odio repudiandae porro necessitatibus soluta vitae.</li>
            <br />
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum hic id veniam neque ea voluptatem ullam reprehenderit quibusdam eveniet dicta asperiores, quasi optio odio repudiandae porro necessitatibus soluta vitae.</li>
            <br />
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum explicabo aliquid similique. Rem dolorum autem nesciunt eum facilis eveniet quia nostrum tenetur, ducimus sunt delectus accusantium a nobis iste impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consequatur eaque autem dignissimos iusto. Veniam magni, optio officiis, hic possimus soluta, eius dolores rerum quam repudiandae odit. Consequatur, quasi accusamus!Lorem</li>
            <br />
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum hic id veniam neque ea voluptatem ullam reprehenderit quibusdam eveniet dicta asperiores, quasi optio odio repudiandae porro necessitatibus soluta vitae.</li>
            <br />
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum hic id veniam neque ea voluptatem ullam reprehenderit quibusdam eveniet dicta asperiores, quasi optio odio repudiandae porro necessitatibus soluta vitae.</li>
            <br />
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum hic id veniam neque ea voluptatem ullam reprehenderit quibusdam eveniet dicta asperiores, quasi optio odio repudiandae porro necessitatibus soluta vitae.</li>
           

          </ol>
        </div>
        </Grid>



      

        <Grid id="reviewz"item xs={12} >
          {/* <Item>4</Item> */}
          {/* style the HR later??? */}
          {/* THIS SHOULD BE ANOTHER COMPONENT???? */}
          <hr className='recipe-hr'/>
          <h2 className='review-title'>⭐️⭐️ Reviews ⭐️⭐️</h2>
          <div className="review-box">
          {/* <p>Username:</p> */}
          <p className="review">love this recipe! So good!!!!!</p>
          {/* <Rating className="rating-review" /> */}
        </div>
        </Grid>
      </Grid>
    </Box>
    </div>
    </div>
    </>
  );
}