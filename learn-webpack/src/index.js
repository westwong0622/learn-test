const { file, parse } = require("./globals.js");
import "babel-polyfill";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = join(["Hello", "webpack"], " ");

  this.alert("Hmmm, this probably isn't a great idea...");
  console.log(file);
  console.log(parse);

  return element;
}

document.body.appendChild(component());
