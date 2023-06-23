import { Routes, Route } from "react-router-dom"
import Gallery from "../Gallery/Gallery"

export default function Homepage () {

    
    return (
        <Routes>
            <Route path="/" element={ <Gallery />} />
            <Route path="/author/:{name}" element={ <AuthorDetail /> } />
        </Routes>


    )
}