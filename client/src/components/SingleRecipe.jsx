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
import Logo from '../icons/cauldronyellow.png'

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
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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

  {/* MODAL */}
<Modal  
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>

{/* MODAL HEADER */}
        <Modal.Header closeButton>
            <div className="login-modal-header">
                <button id="close" onClick={handleClose}>
                <svg class="w-[28px] h-[28px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                </svg>
                </button>

                <div className="top">
                <img id="login-logo" src={Logo} alt="Mythical Munchies Logo" />
                <h3 className="login-welcome">
                     Welcome to Mythical Munchies
                </h3>
                <p id="login-text">Lets get to cooking!</p>
                </div>
            </div>
        </Modal.Header>
    
{/* MODAL BODY */}
        <Modal.Body>
            <div className="p-4 md:p-5">
                <form className="space-y-4" action="#">
                    <div>
                        <input type="username" name="username" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="username or email" required />
                    </div>
                    <div>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div className="flex justify-between">
                        <div id="checky" className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label id="login-check" htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                    </div>
                    <button id="submissions" type="submit" className="w-full text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-blue-800">Login</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        <a id="login-check" onClick={handleShow} href="/signup" className="text-blue-700 hover:underline dark:text-blue-500">Dont have an account? Sign up!</a>
                        {/* <button onClick={handleShow} className="text-blue-700 hover:underline dark:text-blue-500">Dont have an account? Sign up!</button> */}
                    </div>
                </form>
            </div>
        </Modal.Body>

{/* MODAL FOOTER */}
        <Modal.Footer>
            {/* <button onClick={handleClose} type="submit" className="text-white inline-flex items-center bg-red-900 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Close</button> */}
        </Modal.Footer>
    </Modal>    

    <div className="single-container">
      <div className="goldy-background">
        {/* <Link to={`/single-world/${world.id}`} className="back-button-recipe">Back</Link> */}
        <Link to="/worlds" className="back-button-recipe">Back</Link>
        
        <h2 className="title">{ world.name } </h2>
          <Box className="boxes" sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
            
              <Grid className='box-1'item xs={6} >
                <div className='intro'>
                  <button onClick={handleShow} className="bookmarky">Add to Bookmarks 📕</button>
                    {recipe.map((r)=> {
                      return(
                        <>
                      <h4 key={r.id} className='recipe-name'>{r.name}</h4>
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

 