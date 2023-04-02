import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchSingleCocktail } from '../redux/features/cocktailSlice'
import { useDispatch, useSelector } from 'react-redux'


const SingleCocktail = () => {
  const {cocktail, loading} = useSelector((state) => ({...state.app}))
  const [modifiedCocktail, setModifiedCocktail] = useState([])
  const dispatch = useDispatch()
  const {id} = useParams()

  useEffect(() => {
    dispatch(fetchSingleCocktail({id}))
  }, [id])

  useEffect(() => {
    if(cocktail.length > 0)
    {
      const {
        strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: info,
        strCategory : category,
        strGlass: glass,
        strInstructions: instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = cocktail[0]
    }
  }, [id, cocktail])
    

  return (
    <div>
        <h2>Single Cocktail</h2>
    </div>
  )
}

export default SingleCocktail