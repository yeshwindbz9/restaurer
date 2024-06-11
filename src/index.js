import createHome from "./home";
import createAbout from "./about";
import { createMenu } from "./helper";
import "./style.css";

const contentDiv = document.querySelector("#content");
contentDiv.appendChild(createHome());

const clearContent = () => {
  const contentDiv = document.querySelector("#content");
  contentDiv.removeChild(contentDiv.firstChild);
};

const replaceContent = (contentElement) => {
  clearContent();
  const contentDiv = document.querySelector("#content");
  contentDiv.appendChild(contentElement);
};

document
  .querySelector("#home")
  .addEventListener("click", () => replaceContent(createHome()));
document
  .querySelector("#menu")
  .addEventListener("click", () => replaceContent(createMenu()));
document
  .querySelector("#about")
  .addEventListener("click", () => replaceContent(createAbout()));
