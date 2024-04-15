import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./styles/SingleRecipe.css"
import { Link } from 'react-router-dom'
import Ramen from './images/ponyo-ramen.jpg'
// import LeaveReview from './MyReviews'
// import Profile from './icons/profile.png'
import CustomerReviews from './CustomerReviews';

// =======
import LeaveReview from './LeaveReview';
// >>>>>>> main

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
        <h2 className="title"> World.name</h2>
    {/* <div className='testingtons'> */}
        <Box className="boxes" sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid className='box-1'item xs={6} >
              <div className='intro'>
              
              {/* this acts like an add to favorites like in the cat -api */}
                <button className="bookmarky">Add to Bookmarks 📕</button>
               
                <h4 className='recipe-name'>Recipe.name </h4>
                <img  className='pic' src={Ramen} alt="pic" />
                {/* IS USER LOGGED IN? IF NOT THEN SHOW LEAVEREVIEW MODAL */}
                <LeaveReview />
            
              <div className="ratings">
          
              </div>
              </div>
            </Grid>

        <Grid id="ingredients-list" item xs={6} >
          {/* <Item>2</Item> */}
          <div className="ingredients-post">
          <h4 className="ingredients-title">Ingredients:</h4>
        {/* this will eventually be an array.map to display the ingredients */}
          <ul className="ingredient-list">
            <li className='ingredient-item'>map over ingredients array</li>
          </ul>
        </div>
        </Grid>

        <Grid id="intstructions" item xs={12} >
          {/* <Item>3</Item> */}
          <div className="instructions">

            <h2 className='cooking-title'>Cooking Instructions:</h2>
          <ol>
            <li>recipe.instructions</li>
            <br />
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
          <hr className='recipe-hr'/>
          <h2 className='review-title'> Reviews </h2>
          <CustomerReviews />
        </Grid>

      </Grid>
    </Box>
    </div>
    </div>
    </>
  );
}

