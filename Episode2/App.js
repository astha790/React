import React from "react";
import ReactDOM from "react-dom/client";
// React Element
// React Element creates a react element that is an object but when we render it on the web page it converts to html element.
const heading = React.createElement("h1", {id:"heading"}, "Namaste React");
console.log(heading);

// with jsx :- JSX IS NOT HTML IT IS HTML LIKE OR XML SYNTAX.
// If we write the code in our browser console it will not work so, here parcel transpiles(converted) the code before it reaches the js engine and make it understand by browser.
const jsxHeading = <h1>Namaste React by JSX</h1>;
console.log(jsxHeading);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

// here babel is used by parcel to convert this jsx code readable by browser.
