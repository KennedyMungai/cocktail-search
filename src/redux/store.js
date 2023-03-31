import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchCocktails = createAsyncThunk("cocktails/fetchCocktails", async () => 
{
    return fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=").then((res) => res.json())
})


const cocktailSlice = createSlice({
    name: "cocktails",
    initialState: {
        cocktails: [],
        cocktail: [],
        loading: false,
        error: null
    },
    extraReducers: {
        [fetchCocktails.pending]: (state, action) => 
        {
            state.loading = true
        },
        [fetchCocktails.fulfilled]: (state, action) =>
        {
            state.cocktails = action.payload.drinks
        }
    }
})