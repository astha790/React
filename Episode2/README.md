In this episode what I have learnt:-
1. How to run and build our code without writing npx parcel index.html again and again?
- We will update our scripts under package.json by:-
    "scripts": {
    "start":"parcel index.html",
    "build":"parcel build index.html", 
    "test": "jest"
  }

2. How to write react code to create element and render the element?
- To create a heading using h1 tag by using react:-
    => const heading = React.createElement("h1",{id:"heading"},"Namaste React");
        This will create a react element which is an object.
- To show the changes on our web page we need to render it using ReactDOM
    => const root = ReactDOM.createRoot(document.getElementById("root"));
    // this will help to render the changes on our root id
    => root.render(heading);

3. How to make our code simpler using JSX?
- using HTML-like syntax 
old:- const heading = React.createElement("h1",{id:"heading"},"Namaste React");
new:- const heading = <h1> Namaste React </h1>;

- JSX is based on ecmascript (es6) so, it doesn't understand react code.
- If we will write the jsx code in our browser console it will generate error but here, in our vs code we are using parcel which has babel inside it which is transpilling our react code.
- The transpilling process is as follows:-
JSX -> React.createElement -> React Element -> JS object -> HTML Element

4. Babel is also a piece of js code(npm package) which takes a piece of code and then convert it to another piece of code

5. React Components:-
- React component is everythong including heading, footer, title, input box, search bar etc.
- Two types:- a. Class-based component  b. Function-based component
- 1. React-Based Component:-
    - In simple words, it starts with capital letter and it is a normal js function where it returns a piece of jsx element.
    - i.e. const HeadingComponent = () =>{
        <h1> React JS Function based Component </h1>
    };

    - Component Composition:-
    const Title = () => (
        <h1 className = "head" tabIndex = "5">
            React JSX title
        </h1>
    );

// Component Composition:- Using component inside component or nested component
/*
    Here, in the code Title is one component
    and inside the HeadingComp we are using it 
    So, this is known as Component Composition.
*/
    const HeadingComponent = () => (
        <div id = "container">
            <Title /> 
            { /*The above title will automatically come here while web page will be loaded*/}
            <h1 className = "heading">Namaste React Components</h1>
        </div>
    );

    - To render the component we will brackets like this:-
        root.render(<HeadComp />);
        // this will render our HeadingComp on our web page.


6. It is not necessary to use arrow function to create react component we can also create it using normal function.
7. To use js code under jsx we will use {}.
8. Component can be called in different ways:-
    - <Title /> // normally we call like this
    - <Title> </Title> // this can also be used
    - {Title()} // we can also use js function call to call the Title Component