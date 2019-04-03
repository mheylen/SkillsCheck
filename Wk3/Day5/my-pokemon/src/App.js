import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      pokemon: []
    };
  }
  
  componentDidMount(){
    this.getPokemon();
  }

  getPokemon(){
    Axios
    .get('https://api.pokemontcg.io/v1/cards')
    .then(response => {
      console.log(response);
      this.setState({
        pokemon:response.data.cards
      })
    })
    .catch(err => console.log(err));
  }
  
  render() {
    const pokemon = this.state.pokemon.map(poke => {
      return <div>
        <h1>{poke.name}</h1>
        <img src ={poke.imageUrl} />
      </div>
    })
    return (
      <div className="App">{pokemon} </div>
    );
  }
}

export default App;
