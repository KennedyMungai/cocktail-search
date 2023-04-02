import React, { useRef } from 'react'
import './SearchInput.css'
import { fetchSearchCocktail } from '../redux/features/cocktailSlice'
import { useDispatch } from 'react-redux'


const SearchInput = () =>
{
    const searchValue = useRef()
    const dispatch = useDispatch()

    const handleSubmit = (e) =>
    {
        e.preventDefault()
    }

    const handleChange = (e) =>
    {
        const searchText = searchValue.current.value
    }

    return (
        <section className="section search">
            <form action="" className="search-form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Search Cocktail</label>
                    <input type="text" id="name" name='name' ref={searchValue} onChange={handleChange} />
                </div>
            </form>
        </section>
    )
}

export default SearchInput