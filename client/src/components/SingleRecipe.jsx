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
  const [recipe, setRecipe] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);


  // FETCH SINGLE WORLD
  const { worldid } = useParams();
  useEffect(() => {
    const fetchSingleWorld = async () => {
      const response = await fetch(
        `https://mythicalmunchies.onrender.com/mythicalMunchies/worlds/${worldid}`
      );
      const json = await response.json();
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
      console.log("THESE ARE THE INGREDIENTS", json.ingredients, json.recipeIngredient);
      setIngredients(json.ingredients);
    };
   fetchIngredients();
  }, [])



  // FETCH INSTRUCTIONS 
  const {instructionsid} = useParams();
  useEffect(()=> {
    const fetchInstructions = async() => {
      const response = await fetch (`https://mythicalmunchies.onrender.com/mythicalMunchies/recipes/instructions/${recipeid}`);
      const json = await response.json();
      console.log("THESE ARE THE INSTRUCTIONS", json)
      setInstructions(json);
    };
    fetchInstructions();
  }, [])

  return (
  <>
    <div className="single-container">
      <div className="goldy-background">
        {/* <Link to={`/single-world/${world.id}`} className="back-button-recipe">Back</Link> */}
        <Link to="/worlds" className="back-button-recipe">Back</Link>
        
        <h2 className="title">{ world.name } </h2>
          <Box className="boxes" sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
            
              <Grid className='box-1'item xs={6} >
                <div className='intro'>
                  <button className="bookmarky">Add to Bookmarks 📕</button>
                    {recipe.map((r)=> {
                      return(
                        <>
                        <h4 className='recipe-name'>{r.name}</h4>
                      <img  className='pic' src={r.img_url} alt="pic" />
                      <h4 className="cooktime">Cook Time: {r.cook_time}</h4>
                      </>
                      )
                    })}
                   

                      {/* IS USER LOGGED IN? IF NOT THEN SHOW LEAVEREVIEW MODAL */}
                      <LeaveReview />
                </div>
              </Grid>

              <Grid id="ingredients-list" item xs={6} >
                <div className="ingredients-post">
                  <h4 className="ingredients-title">Ingredients:</h4>
                  

                  {/* MAP OVER RECIPE INGREDIENTS HERE */}
                  {ingredients.map((ingredient) => {
                    return(
                    <ul className="ingredient-list">
                      <li className='ingredient-item'>{ingredient.name}</li>
                    </ul>
                    )
                  })}
                    
                    {/* MAP ENDS HERE  */}
                </div>
              </Grid>

              <Grid id="intstructions" item xs={12} >
                <div className="instructions">
                  <h2 className='cooking-title'>Cooking Instructions:</h2>
                  {/* MAP OVER INSTRUCTIONS ARRAY HERE  */}
                  {instructions.map((instruction) => {
                    return(
                      <ol className='listy'>
                        <li className='eachin'>{instruction.description}</li>
                      <br />
                     
                    </ol>
                    )
                  })}
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

 