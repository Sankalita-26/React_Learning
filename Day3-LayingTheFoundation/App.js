import React from "react";
import ReactDOM from "react-dom/client";

//JSX -HTML like or XML like syntax used in React

const heading =(

    <div id="container">
        <h1 id="title">Hello World from JSX</h1>
        <h1 className="testing">This is another heading with className n</h1>;

    </div>
     

  ) 
  ;


  console.log(heading);
  
  

    // React functional component(both options are same syntactically)


    const HeadingComponent = () =>  <h1 className="heading"> This is a functional component</h1>
    

    const  HeadingComponent2 =()=>{
        return <h1 className="heading2"> This is functional component with return statement after changes</h1>;
    }


//How to use JavaScript code inside JSX

const number = <h3>hey i am js code but i will print inside JSX</h3>;
//js code


const JscodeInsideJSX = () => (
<div id="containter">
{number}
<h2>Above line is the js code</h2>
</div>
)


//Rendering the JSX element to the DOM

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    {heading}  
    {<HeadingComponent/>}
    {<HeadingComponent2/>}
    {<JscodeInsideJSX/>}
  </div>
);
