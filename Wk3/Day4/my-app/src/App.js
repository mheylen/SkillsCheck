import React, { Component } from 'react';
import './components/fundamentals/user';
import User from './components/fundamentals/user';
import Student from './components/state/student'
import Mentor from './components/props/Mentor'
import Queue from './components/props/Queue';
class App extends Component {
  render(){
    return(
      <div className="App">
      {/* <User friends = {["mike", "david", "steve"]} /> */}
      {/* <Student />
      <Mentor /> */}
      <Queue />
      </div>
    );
    }
  }

export default App




// class Mentor extends Component {
//   componentDidUpdate() {
//     console.log("Logan saved the day!");
//   }
//   render() {
//     return (
//       <div>
//         <h1>Logan Mace</h1>
//         <h2>{this.props.questions.length}</h2>
//         <h3>questions to answer</h3>
//         <button onClick={this.props.answerQuestion}>Answer a question!</button>
//       </div>
//     );
//   }
// }
// export default App;













// class App extends Component {
//   constructor(){
//   super();
  
//   this.state = {questionsAsked:0};
//   this.setState = this.questionsAsked.bind(this);
//   }
//   buttonClick (){
//     this.buttonClick({questionsAsked: this.state.questionsAsked+1})
//   }

//   render() {
//     return (
//       <div className="App">
//       <h1>Mike the student</h1>
//       <h3>  </h3>
//       </div>
//     );
//   }
// }


// class Queue extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       questions: []
//     };

//     this.askQuestion = this.askQuestion.bind(this);
//     this.answerQuestion = this.answerQuestion.bind(this);
//   }
//   askQuestion(newQuestion) {
    
//     const questions = [...this.state.questions, newQuestion];
//     this.setState({ questions });
//   }
//   answerQuestion(index) {
//     const questions = [...this.state.questions];
//     questions.splice(index, 1);
//     this.setState({ questions });
//   }

  
//   render() {
//     <div className="queue-container">
//       <h1>The Queue</h1>
//       <h3>{this.state.questions.length}</h3>
//       <h3>questions need answers</h3>
//       <h3> askQuestion={this.askQuestion} </h3>
//       <h3> answerQuestion={this.answerQuestion} </h3>
//     </div>;
//   }
// }


// export default App;


