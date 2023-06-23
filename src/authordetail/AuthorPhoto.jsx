import { useState, useEffect } from "react";
import key from "../../key";

export default function AuthorPhoto({ author }) {
  const [photo, setPhoto] = useState(null);

  const fetchphoto = async () => {
    const response = await fetch(
      `https://api.unsplash.com/users/${author}/photos?client_id=${key}`
    );
    const data = await response.json();
    setPhoto(data);
    console.log(data)
    // console.log(data[0].urls.raw);
  };

  useEffect(() => {
    fetchphoto();
  }, []);

  return (
    <div>
      
        {photo
            ? photo.map( 
                (result, index) => <img key={index} src={result.urls.small} />
            
                )
            : "test"

        }
    
    </div>
  );
}
