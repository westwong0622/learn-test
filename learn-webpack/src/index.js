import _ from "lodash";
import "./index.css";
import Icon from "./icon.png";
import Data from "./data/data.xml";
import Notes from "./data/data.csv";

function component() {
  const element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  console.log(Data);
  console.log(Notes);

  return element;
}

document.body.appendChild(component());
