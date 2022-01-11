import React from "react";
import ReactDOM from "react-dom";

const fname = "Developer";
const lname = "Connect";

const luckyNumber = 139;

ReactDOM.render(
  <div>
    <h1>Hello {fname + lname} </h1>
    <h1>
      Hello {fname} {lname}{" "}
    </h1>
    <h1>Hello {`${fname}${lname}`} </h1>
    <p>Your lucky number is {luckyNumber}</p>
    <p>som = {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
