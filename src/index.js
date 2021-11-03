import "./style.css";

console.log("Hiyah mate!!!");

console.log("faaaken");

const content = document.querySelector("#content");

const header = document.createElement("div");
header.classList.add("header");

const logo = document.createElement("div");
logo.classList.add("logo");
logo.innerHTML = "DOM <br />SCHABOWEGO";
header.appendChild(logo);

const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerHTML = "Home";
const li2 = document.createElement("li");
li2.innerHTML = "Menu";
const li3 = document.createElement("li");
li3.innerHTML = "About us";
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
header.appendChild(ul);

content.appendChild(header);
