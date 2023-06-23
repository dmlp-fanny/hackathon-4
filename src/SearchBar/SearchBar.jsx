import { useState } from 'react'
import './SearchBar.scss'

export default function SearchBar ({ setSearchKeyword }) {
    const [query, setQuery] = useState(null)

    const handleChange = (event) => {
        setQuery((event.target.value).toLowerCase())
    }

    const handleClick = () => {
        setSearchKeyword(query)
    }

    return (
        <div className="searchBar">
            <input type="text" placeholder="Search for a pictures..." onChange={ handleChange }/>
            <button onClick={ handleClick }>Search</button>
        </div>
    )
}