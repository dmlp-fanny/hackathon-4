import { useContext, useEffect, useState } from "react";
import key from "../../key";
import Picture from "../Picture/Picture";
import "./gallery.scss";
import Context from "../Context";
import PageBtn from "../PageBtn/PageBtn";

export default function Gallery() {
  const [pictures, setPictures] = useState(null);
  const [perPage, setPerPage] = useState(12);

  const { context: {width, searchKeyword, page} } = useContext(Context)

  const fetchData = async () => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?per_page=${perPage}&query=${searchKeyword}&client_id=${key}&page=${page}`
    );
    const data = await response.json();
    setPictures(data.results);
  };

  useEffect(() => {
    fetchData();
  }, [searchKeyword, page]);

  return (
    <>
        {pictures === null
          ? "Loading"
          : 
            width <= 30 
            ?
            <div className="pictures_container_30" /**style={{height: 200 + "vh"}}**/>
              {pictures.map(picture => <Picture key={picture.id} picture={picture} />)}
            </div>
            :
            width > 30 && width < 50 ?
            <div className="pictures_container_50">
              {pictures.map(picture => <Picture key={picture.id} picture={picture} />)}
            </div>
          :
            <div className="pictures_container_100">
              {pictures.map(picture => <Picture key={picture.id} picture={picture} />)}
            </div>
        }

      <div className="pagination">
        {
          page > 1 ? 
            <PageBtn label='Previous Page' value={-1}/>
            :
            <button className="btnEmpty">Previous Page</button>
        }
          Page {page}
                  
            <PageBtn label='Next Page' value={+1}/> 
      </div>
    </>
  );
}
