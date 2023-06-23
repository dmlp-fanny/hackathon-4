import { useEffect, useState } from "react"
import key from "../../key"
import Picture from "../Picture/Picture"
import './gallery.scss'


export default function Gallery ({ searchKeyword }) {

    const [pictures, setPictures] = useState(null)

    const fetchData = async () => {
        const response = await fetch (`https://api.unsplash.com/search/photos?query=${searchKeyword}&client_id=${key}`)
        const data = await response.json()
        setPictures(data.results);
    }

    useEffect(() => {
        fetchData()
    }, [searchKeyword])

    return (
        <>
        <div className="pictures_container">
            {
                pictures === null ? '' : pictures.map(picture => 

                    <Picture key={picture.id} picture={picture} />
                )
            }
        </div>
        </>
    )
}