/*
  <div id="parent">
    <div id = "child1">
      <h1>I am h1 tag</h1>
      <h2>I am h2 tag</h2>
    </div>
    <div id = "child2">
      <h1>I am h1 tag</h1>
      <h2>I am h2 tag</h2>
    </div>
  </div>
  ReactElement(Object) => HTML(Browser Understanding)
*/
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);

//JSX
const heading = React.createElement(
  "h1",
  {
    id: "heading",
    xyz: "abc",
  },
  "Hello World From React"
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([heading, parent]);
