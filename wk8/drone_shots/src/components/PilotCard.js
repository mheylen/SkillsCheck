import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setUsers } from "../ducks/reducer";
import Pilot_Videos from "./Pilot_Videos"
// import { setStore } from "../ducks/store"
import "./header.css";



class PilotCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      video: "",
      title: "",
      description: "",
      tag: "",
      videoList: []

    };
    this.signIn = this.signIn.bind(this);
    this.register = this.register.bind(this);
    this.logout = this.logout.bind(this);
    this.upload = this.upload.bind(this);
    this.getOne = this.getOne.bind(this)
  }

  componentDidMount() {
    axios.get("/api/users").then(res => {
      console.log(res)
      this.props.setUsers(res.data);
    });
    this.getOne();

  //   axios.get("/api/content").then(res => {
  //     this.props.setStore(res.data);
  //   })
  }
  

  upload() {
    const storePayload = {
      title: this.state.title,
      description: this.state.description,
      tag: this.state.tag,
      video: this.state.video,
      id: this.props.users.id
    };
    axios.post("/api/content", storePayload).then(res => {
      alert("Post Added") 
      this.getOne();
    })
  }
  
  signIn() {
    const loginPayload = {
      email: this.state.email,
      password: this.state.password
    };
    axios
      .post("/api/signin", loginPayload)
      .then(res => {
        console.log("logged in", res.data)
        this.props.setUsers(res.data);
      })
      .catch(err => alert(err));
  }

  register() {
    const loginPayload = {
      email: this.state.email,
      password: this.state.password
    };
    axios
      .post("/api/register", loginPayload)
      .then(res => {
        console.log(res.data)
        this.props.setUsers(res.data);
      })
      .catch(err => alert(err));
  }

  changeHandler = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  logout = () => {
    axios.post("/api/logout").then(() => {
      this.props.setUsers(null);
    });
  };

getOne () {
console.log("Hit")
  axios.get('/api/pilotContent/').then(response => {
    console.log(response.data.results)
    this.setState({
      videoList: response.data
    });
  });
  
}

  render() {
    const { email, password, video, description, tag, title, videoList} = this.state;
    const { users } = this.props;
    console.log(users)
    return (
        <div>
          <nav>
            <ul>
              {!users ? (
                <li>
                  <input
                    placeholder="email"
                    name="email"
                    value={email}
                    onChange={e =>
                      this.changeHandler(e.target.name, e.target.value)
                    }
                  />
                  <input
                    placeholder="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={e =>
                      this.changeHandler(e.target.name, e.target.value)
                    }
                  />
                  
                  <button onClick={this.register}>Register</button>
                  <button onClick={() => this.signIn()}>Sign In</button>
                </li>
              ) : (
                <button onClick={this.logout}>Logout</button>
              )}
              {JSON.stringify(this.state.users)}
              {users ?
              <li>
                  <input
                    placeholder="Upload Video"
                    name="video"
                    value={video}
                    onChange={e =>
                      this.changeHandler(e.target.name, e.target.value)
                    }
                  />

                  <input
                      placeholder="title"
                      type="title"
                      name="title"
                      value={title}
                      onChange={e =>
                        this.changeHandler(e.target.name, e.target.value)
                      }
                    />
                  <input
                    placeholder="description"
                    type="description"
                    name="description"
                    value={description}
                    onChange={e =>
                      this.changeHandler(e.target.name, e.target.value)
                    }
                  />
                    <input
                    placeholder="tag"
                    type="tag"
                    name="tag"
                    value={tag}
                    onChange={e =>
                      this.changeHandler(e.target.name, e.target.value)
                    }
                    />
                  <button onClick={this.upload}>Upload</button>
              
                </li>
                : null
              } </ul>
              <ul>
                  {users ?
              
              <Pilot_Videos/>

                : null
              } 

          </ul>
          </nav>
        </div>
      
    );
  }
}

const mapStateToProps = reduxState => {
  console.log(reduxState)
  return {
    users: reduxState.users
  };
};

const mapDispatchToProps = {
  setUsers: setUsers,
  // setStore: setStore
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PilotCard);

// import React, { Component } from "react";
// import { connect } from "react-redux";
// import axios from "axios";

// class PilotCard extends Component {
//   constructor(){
//     super()
//       this.state ={
//         contentList:[]
//       }
//   }

//   componentDidMount(){
//     this.getAllContent();
//   };

// getAllContent = () => {
//   axios.get("/api/content").then(response => {
//     console.log(response.data.results)
//     this.setState({
//       contentList: response.data.results
//     });
//   });
// };

// deleteFromList = (id) => {
//   axios.delete(`/api/content/${id}`).then(response => {
//     this.setState({
//       contentList: response.data
//     })
//   })
// }

//   render() {
//     console.log();
//     return <div>{JSON.stringify(this.props.pilot)}
//     <ul>
//       <li>Input Video</li>
//       <li>Input Title</li>
//       <li>Input Tags</li>
//       <li>Input Description</li>
//     </ul>
//    What should we display here. The pilots drone videos?
    
//     </div>;
//   }
// }

// const mapStateToProps = reduxState => {
//   return {
//     user: reduxState.user
//   };
// };

// export default connect(mapStateToProps)(PilotCard);