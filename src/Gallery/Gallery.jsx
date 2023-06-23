import { useContext, useEffect, useState } from "react";
import key from "../../key";
import Picture from "../Picture/Picture";
import "./gallery.scss";
import Context from "../Context";

export default function Gallery() {
  const [pictures, setPictures] = useState(null);
  const [perPage, setPerPage] = useState(12);

  const { context: {searchKeyword} } = useContext(Context)

  const fetchData = async () => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?per_page=${perPage}&query=${searchKeyword}&client_id=${key}`
    );
    const data = await response.json();
    setPictures(data.results);
  };

  useEffect(() => {
    fetchData();
  }, [searchKeyword]);

  return (
    <>
      <div className="pictures_container">
        {pictures === null
          ? "Loading"
          : pictures.map(picture => (
              <Picture key={picture.id} picture={picture} />
            ))}
      </div>
    </>
  );
}
