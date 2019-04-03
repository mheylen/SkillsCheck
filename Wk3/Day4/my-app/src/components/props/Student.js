import React, {Component} from 'react';

export default class Student extends Component {
    constructor(){
        super()
        this.state = {
            question:""
        }
    }

    changeHandler(letter){
        this.setState({
          question: letter
        });
    }





    render(){
        return(<div>
            <h1>Student Component</h1>
            <input onChange={(event) => this.changeHandler(event.target.value)} value={this.state.question}/>
            <button onClick={() => this.props.askQuestion(this.state.question)}>
            Ask Question
            </button>
        </div>
        );
    }
}
