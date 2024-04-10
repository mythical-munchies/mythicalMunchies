import React from "react";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
// STRETCH GOAL import add to cart if we turn into e-commerce 
//import remove favorite when it is created
//STRETCH GOAL importing icons for css 

const favorites = ({ favorites }) => {

    //connect to backend when available. will haver to adjust code when it is available but it should look like:
    // const {_id, image, title, price, category } = favorites;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    //removing favorites
    const removeFavoriteHandler = (favorites) => {
        dispatch(removeFavorite(favorites));
    }

    //STRETCH GOAL 
        //add to cart from favorites page



return (

<>
<div className='container'>

{/* link to recipes with backend      */}

    <div className='buttons'>
        <button onClick={() => removeFavoriteHandler(favorites)}/>
    </div>
</div>
</>

)

}

export default favorites;