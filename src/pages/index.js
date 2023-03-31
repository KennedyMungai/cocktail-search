import React from 'react'
import SearchInput from '../components/SearchInput'
import CocktailList from '../components/CocktailList'

const Home = () =>
{
    return (
        <div>
            <p>Home</p>
            <SearchInput />
            <CocktailList />
        </div>
    )
}

export default Home