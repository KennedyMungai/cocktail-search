import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchSingleCocktail } from '../redux/features/cocktailSlice'
import { useDispatch, useSelector } from 'react-redux'


const SingleCocktail = () => {
  const {cocktail, loading} = useSelector((state) => ({...state.app}))
  const [modifiedCocktail, setModifiedCocktail] = useState([])
  const dispatch = useDispatch()

  return (
    <div>
        <h2>Single Cocktail</h2>
    </div>
  )
}

export default SingleCocktail