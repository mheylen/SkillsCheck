import React, { Component } from 'react';

export default class Student extends Component {
    constructor(){
        super()
        this.state= {
            answeredQuestions: [],
            newQuestion: ""
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.clickHandler= this.clickHandler.bind(this);
        }
changeHandler(event){
    this.setState({
    newQuestion: event.target.value
    });
}

clickHandler(){
    this.setState({
        answeredQuestions: [...this.state.answeredQuestions, this.state.newQuestion ]
    })
}

render() {



    return (
        <div>
            <h1>Student</h1>
            <div>{this.state.answeredQuestions.length}</div>
            <input onChange={this.changeHandler} />
            <button onClick ={this.clickHandler}> Add Your Question</button>
            {this.state.answeredQuestions.map (question => <li>{question}</li> )}
        </div>
    )
}
}
