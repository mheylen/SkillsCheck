import React, { Component } from 'react';
import logo from './logo.svg';
import Header from "./Header"
import './App.css';

// extend react Component to get special features
class App extends Component {
  constructor(props){
    // super allows for use of the Components methods we imported from react
    super(props);
    // state holds all of our data we are working with in the component
    this.state =  {
      picture: "",
      name: "",
      friends:[]
    };
    this.updatePicture = this.updatePicture.bind(this);
    this.addFriend = this.addFriend.bind(this);
  }
updatePicture (event){
  console.log(event.target.value)
this.setState({picture: event.target.value});
// setState will cause a rerendering of your coponent with the new data passed in
}
updateName(event) {
  console.log(event.target.value);
  this.setState({name: event.target.value});
}

addFriend(){
  const {name, picture, friends} = this.state;
  // let newFriends = friends.slice()
  // newFriends.push({picture: picture, name: name});
  // this.setState({friends: newFriends, picture: "", name: ""})
    this.setState({
      friends: [...friends,{name: name, picture: picture}],
      name:"",
      picture:""
    });
}


  render() {
    const {friends, name, picture} = this.state;
    console.log(friends);
    const mappedFriends = friends.map((element, index, arr) => {
      
      return (<div key={element.name}>
        <img style={{border: index % 2 ===1 ? "red 1px solid" : "blue 1px solid"}} src={element.picture} />
        <span>{element.name}</span>
      </div>
      );
  });
    return (
    <div>
      <Header label = "new location of the header from prop" />
      <Header label = "This is Cooooooooooooool" />
      <Header label = "new location of the header from prop" />
      <Header label = "new location of the header from prop" />
      <label>Picture</label>
      <input onChange ={this.updatePicture} value={picture}/>
      
      <label>Name</label>
      <input onChange = {event => this.updateName(event)}
      value={name} 
      />
      <button onClick={this.addFriend}>Add Friend</button>
      {mappedFriends}
  </div>  
    )
}
}

export default App;
