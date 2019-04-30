import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



export default class Pilot_Videos extends Component {
    constructor (props) {
        super(props);

        this.state = {
            content: []
        };
        this.getOne = this.getOne.bind(this);
        
    }
    componentDidMount() {
        this.getOne();
        
    }
    getOne() {
        axios.get("/api/pilotContent/").then(res => {
            this.setState({
                content: res.data
            });
        });
    }

    
    render (){
        const { content } = this.state;

        const contentDisplay = content.map(content => {
            let newVideo = content.video.split('')
            let copy = newVideo.slice()
            newVideo.pop();
            newVideo.shift()
            let joinDatMoFo = newVideo.join('')
            return (
                <div key={content.content_id}>
                <h1>{content.title}</h1>
                {
                copy[0] === '{' ? 
                <video width="50px" height="50px" controls ><source src= {joinDatMoFo}  /> </video>
                :
                <img src={content.video} />
                }
                <button onClick={() => content.delete(content.id)}>delete</button>
                
                </div>
            )
        });
        return <div className="dashboard">{contentDisplay}</div>
    }
}