import React, { Component } from 'react';
import MovieForm from './components/addMovieForm/movieForm';
import Header from './components/header/header';
import MovieList from './components/movieList/movieList';
import UserFavorites from './components/userFavorites/userFavorites';
import axios from "axios";
import './App.css';


class App extends Component {
  constructor(){
  super ()
    this.state = {
      movieList: [],
      favorites: [],
    }
  }

  componentDidMount(){
   this.getAllMovies();
  }
  getAllMovies = () => {
    axios
    .get("/api/movies").then(response => {
      console.log(response.data.results)
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
      overview: movie.overview,
    };
    console.log(newMovie);
    axios.post('/api/movies', newMovie).then(res => {
      this.setState({
        favorites: res.data
      });
    });
  }

  render() {
    console.log(this.state.favorites)
    return (
      <div className="App">
      <Header />
      <UserFavorites favorites={this.state.favorites}/>
      <MovieForm />
      <MovieList 
          addToFavorites={this.addToFavorites} 
          movieList={this.state.movieList}/>

       
      </div>
    );
  }
}

export default App;
