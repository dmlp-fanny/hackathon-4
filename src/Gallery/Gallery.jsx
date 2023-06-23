import { useEffect, useState } from "react"
import key from "../../key"
import Picture from "../Picture/Picture"
import { Link } from "react-router-dom"

export default function Gallery ({ setAuthor }) {

    const [searchKeyword, setSearchKeyword] = useState('love')
    const [pictures, setPictures] = useState(null)

    const fetchData = async () => {
        const response = await fetch (`https://api.unsplash.com/search/photos?query=${searchKeyword}&client_id=${key}`)
        const data = await response.json()
        setPictures(data.results);
        console.log(data.results);
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="pictures_container">
            {
                pictures === null ? '' : pictures.map(picture => 
                    <>
                    <Link to={"/author/" + picture.user.username}>Link</Link>
                    <Picture key={picture.id} picture={picture} setAuthor={setAuthor}/> 
                    </>
                )
            }
        </div>
    )
}