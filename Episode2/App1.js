// React Components:-
/**
 * 1. Class based component
 * 2. Function based component
 */
import React from "react";
import ReactDOM from "react-dom/client";

//Part-IV
const Title = () => (
    <h1 className = "head" tabIndex = "5">
        React JSX title
    </h1>
);

const HeadingComponent = () => (
    <div id = "container">
        <Title /> 
        <Title></Title>
        {Title()}
        <h1 className = "heading">Namaste React Components</h1>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);

//Title can be used in all 3 ways given above within our jsx.


/*
// Part-III
const num = 100; //this function of js can be used under our jsx using {}. If we write {num} inside the jsx it will be replaced by 100
const HeadingComp = () => (
    <div id = "container">
        <h2>{console.log("Sakshi")}</h2>
        <h3>{num}</h3> 
        <h1 className = "heading">Namaste React Component</h1>
    </div>
); //h2 and h3 are working as js code inside jsx.
// h2 will be displayed in our console of web browser.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComp/>);
*/
/*
// Part-II
const Title = () => (
    <h1 className = "head" tabIndex = "5">
        React JSX title
    </h1>
);

// Component Composition:- Using component inside component or nested component
//
    // Here, in the code Title is one component
    // and inside the HeadingComp we are using it 
    // So, this is known as Component Composition.
//
const HeadingComponent = () => (
    <div id = "container">
        <Title /> 
        { //The above title will automatically come here while web page will be loaded}
        <h1 className = "heading">Namaste React Components</h1>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);

*/

//Part-I

// const heading = <h1 className="heading">Namaste React part-4</h1>;
/*
const HeadingComp = () => {
    return <h2 className = "heading">React functional component</h2>
}
const HeadingComp1 = () => <h2 className="heading">React functional component</h2>
const HeadingComp2 = () => (
    <div id="container">
        <h1 className = "heading">React functional component</h1>
    </div>
); // in this one we are creating nested structure
/ These all three codes have same meaning but different style of writing 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComp2 />);
*/