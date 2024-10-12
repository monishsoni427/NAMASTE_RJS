import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy", 
        location: "default loc",
        avatar_url: "",
      },
    };
    // console.log(this.props.name + " Child Constructor");
  }
  async componentDidMount() {
    // console.log(this.props.name + " Child ComponenDidMount");

    const data = await fetch("https://api.github.com/users/monishsoni427");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    // console.log(json);
  }
  componentDidUpdate() {
    // console.log(this.props.name + " component Did update");
  }
  componentWillUnmount() {
    // console.log("ComponentWillUnmount");
  }
  render() {
    // console.log(this.props.name + " Child Render");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="montyimage" />
        <h2>Name : {this.state.userInfo.name}</h2>
        <h3>Location:{location}</h3>

        <h4>Contact: @akshaymarch7</h4>
      </div>
    );
  }
}
export default UserClass;

/****
 * 
 * MOUNTING ---------
 * 
 * Constructor
 * Render (Dummy)
 *         <html Dummy>
 * ComponentDidMount
 *      <API call>
 *      this.setState()
 * 
 * UPDATE ------------
 *         render(API data)
 *          <HTML (new API data)>
 * componentDidUpdate()

*/
