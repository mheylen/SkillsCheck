import React from "react";
import "./MovieList.css";
const posterBasePath = "http://image.tmdb.org/t/p/w185/";

export default function MovieList(props) {
  let mappedMovies = props.movieList.map(movie => {
    return (
      <div key={movie.id}>
        <h1>{movie.title}</h1>
        <h2>{movie.popularity}</h2>
        <img src={posterBasePath + movie.poster_path} alt="" />
        <span>{movie.overview}</span>
        <button onClick={() => props.addToFavorites(movie)}>
          Add To Favorites
        </button>
      </div>
    );
  });

  return <div>{mappedMovies}</div>;
}
