import { Routes, Route } from "react-router-dom"
import Gallery from "../Gallery/Gallery"
import { useState } from "react"
import AuthorDetail from "../authordetail/AuthorDetail"

export default function Homepage () { 
    const [author, setAuthor] = useState(null)
    
    return (
        <Routes>
            <Route path="/" element={ <Gallery setAuthor={setAuthor} author={author} />} />
            <Route path="/author/:author" element={ <AuthorDetail /> } />
        </Routes>


    )
}