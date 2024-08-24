// import React from "react";
import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor")
  }
  componentDidMount(){
    console.log("Parent ComponenDidMount ");
  }

  render() {
    console.log("Parent render")
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Namaste React webseries</h2>
        <UserClass name={"First"} location={"Dehradun class"} />

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
