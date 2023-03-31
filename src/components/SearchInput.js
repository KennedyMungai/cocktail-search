import React, { useRef } from 'react'
import './SearchInput.css'


const SearchInput = () =>
{
    const searchValue = useRef()


    return (
        <section className="section search">
            <form action="" className="search-form">
                <div className="form-control">
                    <label htmlFor="name">Search Cocktail</label>
                    <input type="text" id="name" name='name' ref={searchValue} />
                </div>
            </form>
        </section>
    )
}

export default SearchInput