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
            return (
            // <img src className="main-vid "></div>
            <div className= "outer">
                <div className="videos" key={content.content_id}>

                <h3>{content.title}</h3>
                <img src={content.video} />
                <button onClick={() => this.downloadVideo(content.content_id)}>Download Video</button>
                </div>
            </div>
        
            )
        });
        return <div className="videos">{contentDisplay}</div>
    }
}