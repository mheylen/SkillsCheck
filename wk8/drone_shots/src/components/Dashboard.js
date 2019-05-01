import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./dashboard.css"

export default class Dashboard extends Component {
    constructor (props) {
        super(props);

        this.state = {
            content: []
        };
        this.getAllContent = this.getAllContent.bind(this);
    
    }
    componentDidMount() {
        this.getAllContent();
     
    }
    getAllContent() {
        axios.get("/api/content").then(res => {
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
                // <img src className="main-vid "></div>
                <div className= "outer">
                <div className="videos" key={content.content_id}>

                {
                copy[0] === '{' ? 
                <video height= "100%" width= "100%" controls ><source src= {joinDatMoFo}  /> </video>
                :
                <img src={content.video} />
                }
                <a href={joinDatMoFo} download={content.video} className = "button">Download
                <source src={joinDatMoFo}/>
                </a>
                {/* <button onClick= {() => {content.video}}> Download Video </button> */}
                
                
                
                </div>
            </div>
        
            )
        });
        return <div className="videos">{contentDisplay}</div>
    }
}