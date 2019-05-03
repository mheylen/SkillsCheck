import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";




export default class Pilot_Videos extends Component {
    constructor (props) {
        super(props);

        this.state = {
            content: [],
            edit: false
        };
        this.getOne = this.getOne.bind(this);
        this.deleteVideo = this.deleteVideo.bind(this);
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

    deleteVideo (id){
        console.log(id, "An ID")
        axios
        .delete(`/api/content/${id}`).then(res => {
            console.log(axios, "Axios call")
          this.setState({
            content: res.data
          });
        });
      }
      updateVideo(id){
        const { title, description, tag } = this.state;
        const payload = {
          title,
          description,
          tag
        };
        axios.put(`/api/content/${id}`, payload).then(() => {
          this.clearForm();
          this.props.history.push("/");
        });
      };
    
      clearForm = () => {
        this.setState({
          title:"",
          description:"",
          tag: ""
        });
      }


    
    render (){
        const { content, edit } = this.state;

        const contentDisplay = content.map(content => {
            let newVideo = content.video.split('')
            let copy = newVideo.slice()
            newVideo.pop();
            newVideo.shift()
            let joinDatMoFo = newVideo.join('')
            console.log(content, "Content Videos")
            return (
                <div key={content.content_id}>
                <h1>{content.title}</h1>
                {
                copy[0] === '{' ? 
                <video className="vidz" controls ><source src= {joinDatMoFo}  /> </video>
                :
                <img src={content.video} alt=""/>
                }
                <button onClick={() => this.deleteVideo(content.videos_id)} >Delete</button>
                <Link to={`/edit/${content.videos_id}`}>Edit</Link>
                <button onClick={() => {
                    this.clearForm();
                    if(edit) {
                        this.props.history.push("/");
                    }
                }}
                >
                Cancel
                </button>

                </div>
            )
        });
        return <div className="dashboard">{contentDisplay}</div>
    }
}