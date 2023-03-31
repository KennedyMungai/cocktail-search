import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchCocktails = createAsyncThunk("cocktails/fetchCocktails", async () => 
{
    return fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=").then((res) => res.json())
})