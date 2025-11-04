const heading=React.createElement("h1",{
    id: "heading"
},"Hello world from React!! wohoo my first react code");

console.log(heading)// returns object.
 const root=ReactDOM.createRoot(document.getElementById("root"));

 const test=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{id:"tag"},[
    React.createElement("h3",{id:"sibling1"},"Sibling1 test"),
    React.createElement("h3",{id:"sibling2"},"Sibling2 test")
 ])));

root.render(test);