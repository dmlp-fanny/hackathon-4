import { useState,useEffect } from "react";
import key from "../../key"
import AuthorPhoto from "./AuthorPhoto"
import { useParams } from "react-router-dom";
import BackBtn from "./BackBtn";


export default function AuthorDetail() {

    const [ searchResults,setSearchResults ] = useState(null)

    const { author } = useParams()

    const datafetching = async () => {
    
        const response = await fetch(`https://api.unsplash.com/users/${author}?client_id=${key}`);

        const data = await response.json();

        setSearchResults(data);    
    }

    useEffect(() => { 
        datafetching()
    }, [])
      
    return (
        <div className="authordetail">
            <BackBtn />
            <h1>Author's information</h1>
            <ul>
                
                    {searchResults === null 
                    ?
                    ""
                    :
                    <div>
                        Author name: {searchResults.first_name}
                        <br />
                        User name: {searchResults.username}
                        <br />
                        Bio: {searchResults.bio}
                    </div>
                    
                    }
                
              
                    
            </ul>
            <AuthorPhoto author={author}/>
        </div>
    )
}