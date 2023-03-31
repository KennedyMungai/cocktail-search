import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCocktails } from '../redux/features/cocktailSlice'
import { Link } from 'react-router-dom'


const CocktailList = () =>
{
    const { cocktails, loading } = useSelector((state) => ({ ...state.app }))
    const [modifiedCocktail, setModifiedCocktail] = useState([])
    const dispatch = useDispatch()

    useEffect(() =>
    {
    }, [])


    return (
        <div>CocktailList</div>
    )
}

export default CocktailList