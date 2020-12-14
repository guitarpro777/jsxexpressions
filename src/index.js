import React from "react";
import ReactDOM from "react-dom";

const fName = "Luis";
const lName = "Nunez";
const num = 7;

ReactDOM.render(
  <div>
    <h1> Hello {`${fName} ${lName}`}! </h1>
    <p>Your lucky number is {3 + 4}</p>
  </div>,

  document.getElementById("root")
);
