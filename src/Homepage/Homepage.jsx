
import Gallery from "../Gallery/Gallery"
import { useState } from "react"
import SearchBar from "../SearchBar/SearchBar"
import Slider from "../Slider/Slider"

export default function Homepage () { 

    const [searchKeyword, setSearchKeyword] = useState('')

    return (
        <>
        <SearchBar setSearchKeyword={setSearchKeyword} />

        <Slider />

        <Gallery searchKeyword={searchKeyword}/>
        </> 
    


    )
}