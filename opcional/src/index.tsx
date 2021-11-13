import { AverageComponent } from "./averageComponent";
import React from "react";
import ReactDOM from "react-dom";
console.log("Look ma! Zero config");
import logo from "./content/logo.png";
const img = document.createElement("img");
img.src = logo;
document.getElementById("imgContainer").appendChild(img);
const myName: string = "My name is Fiorella";

const newDiv = document.createElement("div");
const newContent = document.createTextNode(myName);
newDiv.appendChild(newContent);
document.getElementById("main").appendChild(newDiv);
ReactDOM.render(
  <div>
    <h1>Hello from React DOM</h1>
    <AverageComponent />
  </div>,
  document.getElementById("root")
);
