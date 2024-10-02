// import React from "react";
import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
          webseries: "By Monish"
    }
    console.log("Parent Constructor")
  }
  
  componentDidMount(){
    console.log("Parent ComponenDidMount ");
    this.setState({
      webseries: "By AKshay Saini"
    })
  }
  componentDidUpdate(){
    console.log("Parent Component Did Update")
  }
  render() {
    console.log("Parent render")
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Namaste React {this.state.webseries}</h2>
        <UserClass name={"First"} location={"Dehradun class"} />
        {/* <UserClass name={"Second"} location={"Jaipur class"} /> */}
      </div>
    );
  }
}
/* 
- Parent Constructor 
- Parent Render
    - First Constructor
    - First Render    

    - Second Constructot
    - Second render
    
    <DOM Updated - IN SINGLE BATCH>
    - First ComponentDidMount
    - Second ComponentDidMount
-Parent ComponentDidMount
    
*/
export default About;
