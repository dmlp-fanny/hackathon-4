import { useState, useEffect } from "react";
import key from "../../key";
import AuthorPhoto from "./AuthorPhoto";
import { useParams } from "react-router-dom";

export default function AuthorDetail() {
  const [searchResults, setSearchResults] = useState(null);

  const { author } = useParams();

  const datafetching = async () => {
    const response = await fetch(
      `https://api.unsplash.com/users/${author}?client_id=${key}`
    );

    const data = await response.json();

    setSearchResults(data);

    console.log(data);
  };

  useEffect(() => {
    datafetching();
  }, []);

  return (
    <div className="authordetail">
      <h1>Author's information</h1>
      <ul>
        <li>Personal information</li>
        <li>Download</li>
        <li>Likes</li>
      </ul>
      <AuthorPhoto />
    </div>
  );
}
