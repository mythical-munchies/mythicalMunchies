import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favoriteRecipes: localStorage.getItem("favoriteRecipes") ? JSON.parse(localStorage.getItem("favoriteRecipes")) : [],

}

export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavorites: (state, action) => {
            let eachFavoriteRecipeIndex = state.favoriteRecipes.findIndex((item) => item?._id === action.payload?._id);

            if (eachFavoriteRecipeIndex >= 0) {
                alert('You have already saved this recipe to your favorites');
            } else {
                let assembledRecipe;
                assembledRecipe = { ...action.payload }
                state.favoriteRecipes.push(assembledRecipe);
                localStorage.setItem("favoriteRecipes", JSON.stringify(state.favoriteRecipes));
            }
        },

        //remove from favorites
        removeFavorite: (state, action) => {
            const updatedFavorites = state.favoriteRecipes?.filter((item) => item?._id !== action.payload?._id)

            state.favoriteRecipes = updatedFavorites;

            localStorage.setItem("favoriteRecipes", JSON.stringify(state.favoriteRecipes));

        },

        clearFavorites: (state, action) => {
            state.favoriteRecipes = [];
            localStorage.setItem("favoriteRecipes", JSON.stringify(state.favoriteRecipes));
        }
    },
})

// action creators are generated for each case reducer function 
// export const {} = cartSlice.actions

export const { addToFavorites, removeFavorite, clearFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer