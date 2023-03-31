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
        dispatch(fetchCocktails())
    }, [])

    useEffect(() =>
    {
        if (cocktails)
        {
            const newCocktails = cocktails.map((item) =>
            {
                const {
                    idDrink,
                    strDrink,
                    strDrinkThumb,
                    strAlcoholic,
                    strGlass
                } = item

                return {
                    id: idDrink,
                    name: strDrink,
                    image: strDrinkThumb,
                    info: strAlcoholic,
                    glass: strGlass
                }
            })

            setModifiedCocktail(newCocktails)
        }
    }, [cocktails])



    return (
        <div>
            <h2>Cocktail List</h2>
        </div>
    )
}

export default CocktailList