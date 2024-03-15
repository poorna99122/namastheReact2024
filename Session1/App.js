const parent = React.createElement(
  "div",
  { id: "patent" },
 [ React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading1" }, "I am h1 Tag"),
    React.createElement("h2", { id: "heading2" }, "I am h2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading1" }, "I am h1 Tag"),
    React.createElement("h2", { id: "heading2" }, "I am h2 Tag"),
  ])]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);























// const heading = React.createElement(
//   "h2",
//   { id: "heading", xyz: "abc" },
//   "Hii I am Poorna Chandra Rao"
// );

// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
