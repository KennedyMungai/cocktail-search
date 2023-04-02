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
    
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ]
    
        const newCocktail = {
          name, 
          image,
          info,
          category,
          glass,
          instructions,
          ingredients
        }
    
        setModifiedCocktail(newCocktail)
    }
    else 
    {
      setModifiedCocktail(null)
    }
  }, [id, cocktail])
    
  if(!modifiedCocktail)
  {
    return <h2 className="section-title">No Cocktail to display</h2>
  }
  else
  {
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
      ingredients
    } = modifiedCocktail

    return (
      <>
        {
          loading ? 
            (
            <div className='spinner-grow' role='status'>
              <span className="visually-hidden">
                Loading...
              </span>
            </div>
            ) :
            (
              <section className="section cocktail-section">
                <Link to={'/'}>
                  <button 
                    className="btn btn-danger"
                    style={{marginTop: '2rem'}}
                  >
                    Go Back
                  </button>
                </Link>
              </section>
            )
        }
      </>
    )
  }
}

export default SingleCocktail