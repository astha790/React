// writing our first program using react
const heading = React.createElement("h1", {
    id: "heading",
    xyz: "abc"
}, "Hello World Using React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
//creating nested div
/**
 * 
 * <div id = "parent">
 *      <div id = "child">
 *          <h1> I'm an h1 tag </h1>
 *          <h2> I'm an h2 tag </h2>
 *              //to create this type of structure of h1 and h2 we will use array.
 *      </div>
 *       <div id = "child2"> //to create this nested structure of more than 1 child we will again use array
 *          <h1> I'm an h1 tag </h1>
 *          <h2> I'm an h2 tag </h2>
 *              //to create this type of structure of h1 and h2 we will use array.
 *      </div>
 * </div>
 * 
 * ReactElement -> an object => HTML (Browser understands)
 */ const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "I'm a h1 tag"),
        React.createElement("h2", {}, "I'm a h2 tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "I'm a h1 tag"),
        React.createElement("h2", {}, "I'm a h2 tag")
    ])
]);
// to convert this code to simple and clean we will use JSX
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(parent);

//# sourceMappingURL=React.c36f364e.js.map
