import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state={
      students:[]
    }
  }
  componentDidMount(){
    this.fetchAllStudents();
  }
  fetchAllStudents = () => {
    Axios.get('/api/students').then(response => {
      this.setState({
        students: response.data
      })
    })
  }
  render() {
    const {students} = this.state
    const mappedStudents = students.map(student=> {
      return (
        <div key={student.id}>
        <h1>{student.name}</h1>
      </div>
      )
    })
    return (
      <div className="App">{mappedStudents}</div>
    );
  }
}

export default App;
