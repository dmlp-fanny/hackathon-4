import { useContext, useState } from 'react'
import './SearchBar.scss'
import Context from "../Context";

export default function SearchBar () {
    const [query, setQuery] = useState(null)

    const { dispatch } = useContext(Context)

    const handleChange = (event) => {
        setQuery((event.target.value).toLowerCase())
    }

    const handleClick = () => {
        dispatch({
            type: 'searchKeyword/set',
            payload: query
        });
    }

    return (
        <div className="searchBar">
            <input type="text" placeholder="Search for a pictures..." onChange={ handleChange }/>
            <button onClick={ handleClick }>Search</button>
        </div>
    )
}