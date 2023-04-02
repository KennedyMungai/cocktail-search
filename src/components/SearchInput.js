import React, { useRef } from 'react'
import './SearchInput.css'


const SearchInput = () =>
{
    const searchValue = useRef()

    const handleSubmit = (e) =>
    {
        e.preventDefault()
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