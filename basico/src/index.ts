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
