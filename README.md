# JS CODE

```c++
const papa = React.createElement(
  "h4",
  {
    className: "grandParents",
  },
  [
    React.createElement(
      "div",
      {
        className: "parent1",
      },
      [
        React.createElement(
          "h1",
          {
            className: "child1",
          },
          "This is number 1"
        ),
        React.createElement(
          "h1",
          {
            className: "child2",
          },
          "This is number 2"
        ),
      ]
    ),

    React.createElement(
      "div",
      {
        className: "parent2",
      },
      [
        React.createElement(
          "h1",
          {
            className: "child3",
          },
          "This is number 3"
        ),
        React.createElement(
          "h1",
          {
            className: "child4",
          },
          "This is number 4"
        ),
      ]
    ),

    // console.log(heading);
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(papa);
```

# HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>React App</title>
    <script
      src="https://unpkg.com/react@18/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
      crossorigin
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <style>
      .fuck {
        color: red;
      }

      .grandParents {
        border: red solid 1px;
      }

      .parent1,
      .parent2 {
        background: rgb(83, 74, 59);
        color: #fff;
      }
    </style>
  </head>

  <body>
    <div id="root"></div>

    <!-- React & Babel -->
    <!-- React 18 -->
    <script
      crossorigin
      src="https://unpkg.com/react@19/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@19/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script type="text/babel" src="./app.js"></script>

    <!-- Your separate JSX file -->
    <script type="text/babel" src="app.jsx"></script>
  </body>
</html>
```

```
// const papa = React.createElement("h4", {
//     className: "grandParents"
// }, [React.createElement("div", {
//     className: "parent1"
// }, [
//     React.createElement("h1", {
//         className: "child1",
//     }, "This is number 1"),
//     React.createElement("h1", {
//         className: "child2"
//     }, "This is number 2")
// ]),


// React.createElement("div", {
//     className: "parent2"
// }, [
//     React.createElement("h1", {
//         className: "child3",
//     }, "This is number 3"),
//     React.createElement("h1", {
//         className: "child4"
//     }, "This is number 4")
// ]),



//     // console.log(heading);
// ])


```
