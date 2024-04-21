import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "../styles/SingleRecipe.css"
import { Link, useParams } from 'react-router-dom'
import Ramen from '../images/ponyo-ramen.jpg'
import CustomerReviews from './CustomerReviews';
import LeaveReview from './LeaveReview';
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function SingleRecipe({ worldsArray }) {
  const [world, setWorld] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState({});
  const [ingredient, setIngredient] = useState([]);
  const [instructions, setInstructions] = useState([]);


  // FETCH SINGLE WORLD
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


  // FETCH SINGLE RECIPE
  const {recipeid} = useParams();
  useEffect(()=> {
    const fetchRecipe = async() => {
      const response = await fetch (`https://mythicalmunchies.onrender.com/mythicalMunchies/recipes/single/${recipeid}`);
      const json = await response.json();
      console.log("THIS IS A SINGLE RECIPE", json)
      setRecipe(json);
    };
    fetchRecipe();
  }, [])

  // FETCH INGREDIENTS 
  const {ingredientid} = useParams();
  useEffect(()=> {
    const fetchIngredients = async() => {
      const response = await fetch (`https://mythicalmunchies.onrender.com/mythicalMunchies/ingredients/${recipeid}`);
      const json = await response.json();
      console.log("THESE ARE THE INGREDIENTS", json)
      setRecipe(json);
    };
    fetchIngredients();
  }, [])



  // FETCH INSTRUCTIONS 
  // const {instructionsid} = useParams();
  // useEffect(()=> {
  //   const fetchInstructions = async() => {
  //     const response = await fetch (`https://mythicalmunchies.onrender.com/mythicalMunchies/instructions/${recipeid}`);
  //     const json = await response.json();
  //     console.log("THESE ARE THE INSTRUCTIONS", json)
  //     setRecipe(json);
  //   };
  //   fetchInstructions();
  // }, [])

  return (
  <>
    <div className="single-container">
      <div className="goldy-background">
        <Link to="/single-world" className="back-button-recipe">Back</Link>
        
          <h2 className="title">{world.name}</h2>
          <Box className="boxes" sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
            
              <Grid className='box-1'item xs={6} >
                <div className='intro'>
                  <button className="bookmarky">Add to Bookmarks 📕</button>

                    {/* MAP OVER SINGLE RECIPE ARRAY HERE  */}
                    {/* fetch single object in the array */}
                    {/* check what is being passed in on line 26 */}
                    {/* tried different call methods i searched (.keys, ..getOwnPropertyNames but not sure if im supposed to pass in object or array ) */}
                    <h4 className='recipe-name'>Recipe.name </h4>
                      <img  className='pic' src={Ramen} alt="pic" />

                      {/* IS USER LOGGED IN? IF NOT THEN SHOW LEAVEREVIEW MODAL */}
                      <LeaveReview />
                    {/* MAP ENDS HERE  */}
                </div>
              </Grid>

              <Grid id="ingredients-list" item xs={6} >
                <div className="ingredients-post">
                  <h4 className="ingredients-title">Ingredients:</h4>
                  {/* MAP OVER RECIPE INGREDIENTS HERE */}
                    <ul className="ingredient-list">
                      <li className='ingredient-item'>map over ingredients array</li>
                    </ul>
                    {/* MAP ENDS HERE  */}
                </div>
              </Grid>

              <Grid id="intstructions" item xs={12} >
                <div className="instructions">
                  <h2 className='cooking-title'>Cooking Instructions:</h2>
                  {/* MAP OVER INSTRUCTIONS ARRAY HERE  */}
                    <ol>
                      <li>recipe.instructions</li>
                      <br />
                    </ol>
                  {/* MAP ENDS HERE  */}
                </div>
              </Grid>
        
              <Grid id="reviewz"item xs={12} >
                <hr className='recipe-hr'/>
                  <h2 className='review-title'>Reviews </h2>
                    <CustomerReviews />
              </Grid>

            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
}

export default SingleRecipe

 {/* <h2 className="title">{world.name}</h2> */}
        {/* this is where the return should start */}
        {/* {recipe.map((recipe) => {
          return (
            
            <Box className="boxes" sx={{ flexGrow: 1 }}>
          )   <Grid container spacing={2}>
                <Grid className='box-1'item xs={6} >
                  <div className='intro'>
                  <button className="bookmarky">Add to Bookmarks 📕</button>
                    <h4 className='recipe-name'>{recipe.name}</h4>
                      <img  className='pic' src={recipe.img_url} alt="pic" />
                        <LeaveReview />
                  </div>
                </Grid>

                <Grid id="ingredients-list" item xs={6} >
                  <div className="ingredients-post">
                    <h4 className="ingredients-title">Ingredients:</h4>
                      <ul className="ingredient-list">
                        <li className='ingredient-item'>{recipe.ingredients}</li>
                      </ul>
                  </div>
                </Grid>

                 <Grid id="intstructions" item xs={12} >
                <div className="instructions">
                  <h2 className='cooking-title'>Cooking Instructions:</h2>
                    <ol>
                      <li>{recipe.instructions}</li>
                      <br />
                    </ol>
                </div>  
              </Grid>
        })} */}

       {/* <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum explicabo aliquid similique. Rem dolorum autem nesciunt eum facilis eveniet quia nostrum tenetur, ducimus sunt delectus accusantium a nobis iste impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consequatur eaque autem dignissimos iusto. Veniam magni, optio officiis, hic possimus soluta, eius dolores rerum quam repudiandae odit. Consequatur, quasi accusamus!Lorem</li>
                      <br /> */}
                      {/* <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum hic id veniam neque ea voluptatem ullam reprehenderit quibusdam eveniet dicta asperiores, quasi optio odio repudiandae porro necessitatibus soluta vitae.</li>
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
                      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum hic id veniam neque ea voluptatem ullam reprehenderit quibusdam eveniet dicta asperiores, quasi optio odio repudiandae porro necessitatibus soluta vitae.</li> */}


  {/* MAP OVER SINGLERECIPE ARRAY HERE  */}
  //  {recipe.map((recipe) => {
  //   return(
  //     <>
  //      <h4 className='recipe-name'>{recipe.name}</h4>
  //     <img  className='pic' src={recipe.img_url} alt="pic" />
  //     {/* IS USER LOGGED IN? IF NOT THEN SHOW LEAVEREVIEW MODAL */}
  //     <LeaveReview />
  //     </>
  //   )
  // })}