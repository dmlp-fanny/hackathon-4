import { useState,useEffect } from "react";
import key from "../../key"

export default function AuthorPhoto() {
    const [photo,setPhoto] = useState ();

    const fetchphoto = async () => {
    
        const response = await fetch(`https://api.unsplash.com/users/${AUTHORS_USERNAME}/photos?client_id=${key}`);
        const data = await response.json() 
        setPhoto(data);
      
    }
      
    useEffect(() => { 
        fetchphoto()
    }, [])

    return (
        <>
            <div>
                <h2>Author photo</h2>
            </div>
        </>
    )
}