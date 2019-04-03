// controller file helps searate concerns, the controller file holds the methods used on each endpoint.

let pokemon = [
    {
      id: 1,
      name: "pikachu",
      attack: "thunderbolt",
      hp: 100
    },
    { id: 2, name: "charizard", attack: "flame spin", hp: 150 },
    { id: 3, name: "venasaur", attack: "vinewhip", hp: 200 },
    { id: 4, name: "blastoise", attack: "water canon", hp: 160 },
    { id: 5, name: "cubone", attack: "confusion", hp: 100 },
    { id: 6, name: "magneton", attack: "self destruct", hp: 120 }
  ];

  let id = 7;

  module.exports = {
      readPokemon: (req, res) => {
        res.status(200).send(pokemon);
      },
    createPokemon: (req, res) => {
        const {name, hp, attack} = req.body;
        const newPokemon ={
            id,
            name,
            hp,
            attack
        };
        // what is the id++
        id++
        pokemon.push(newPokemon);
        res.status(200).send(pokemon);
    },
    updatePokemonById: (req, res) => {
        const {id} = req.params;
        const {name, attack, hp} = req.query;

        let index = pokemon.findIndex((elem) => elem.id === +id)
        if(index !== -1){
            pokemon[index].name = name || pokemon[index].name;
            pokemon[index].hp = hp || pokemon[index].hp;
            pokemon[index].attack = attack || pokemon[index].attack;
            res.status(200).send(pokemon);
        } else {
            res.status(404).send("oh fiddle sticks, id not found")}
    }
  };