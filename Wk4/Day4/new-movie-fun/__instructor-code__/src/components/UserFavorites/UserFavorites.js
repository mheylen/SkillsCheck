import React from "react";
import "./UserFavorites.css";
const posterBasePath = "http://image.tmdb.org/t/p/w185/";

export default function UserFavorites(props) {
  let mappedFavorites = props.favorites.map(movie => {
    return (
      <div key={movie.id}>
        <img src={posterBasePath + movie.poster_path} alt="" />
        <h1>{movie.title}</h1>
        <h2>{movie.popularity}</h2>
        <span>{movie.overview.substring(0, 150)}</span>
      </div>
    );
  });
  return <div className="favorites-container">{mappedFavorites}</div>;
}
