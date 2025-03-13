import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "This is a Heading - React"
// );

const DisplaySomething = () => {
  return (
    <>
      <h1>This is another heading - React Components</h1>
    </>
  );
};

const heading = (
  <>
    {DisplaySomething()}
    <h1>This is a Heading - from JSX</h1>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
