import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchSingleCocktail } from '../redux/features/cocktailSlice'
import { useDispatch, useSelector } from 'react-redux'


const SingleCocktail = () => {
  return (
    <div>
        <h2>Single Cocktail</h2>
    </div>
  )
}

export default SingleCocktail