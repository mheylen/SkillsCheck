import React, { Component } from "react";
import AddForm from "./components/AddForm/AddForm";
import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import UserFavorites from "./components/UserFavorites/UserFavorites";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieList: [],
      favorites: []
    };
  }

  componentDidMount() {
    this.getAllMovies();
  }

  getAllMovies = () => {
    axios.get("/api/movies").then(response => {
      console.log(response.data.results);
      this.setState({
        movieList: response.data.results
      });
    });
  };

  addToFavorites = movie => {
    const newMovie = {
      title: movie.title,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
      popularity: movie.popularity,
      overview: movie.overview
    };
    console.log(newMovie);
    axios.post("/api/movies", newMovie).then(response => {
      this.setState({
        favorites: response.data
      });
    });
  };

  render() {
    console.log(this.state.favorites);
    return (
      <div className="App">
        {/* components here */}
        <Header />
        <UserFavorites favorites={this.state.favorites} />
        <AddForm />
        <MovieList
          addToFavorites={this.addToFavorites}
          movieList={this.state.movieList}
        />
      </div>
    );
  }
}

export default App;
