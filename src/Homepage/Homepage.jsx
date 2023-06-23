
import Gallery from "../Gallery/Gallery"
import { useState } from "react"
import SearchBar from "../SearchBar/SearchBar"

export default function Homepage () { 

    const [searchKeyword, setSearchKeyword] = useState('')
    
    return (
        <>
        <SearchBar setSearchKeyword={setSearchKeyword} />

        <Gallery searchKeyword={searchKeyword}/>
        </> 
    


    )
}