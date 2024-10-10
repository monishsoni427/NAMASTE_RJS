import { createContext } from "react";

//its kind of a like a central global object
const UserContext = createContext({
  loggedInUser: "Default User",
});

export default UserContext;