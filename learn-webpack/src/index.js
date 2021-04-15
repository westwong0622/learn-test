async function component() {
  const element = document.createElement("div");
  const { default: _ } = await import("lodash");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  return element;
}

component().then((comp) => {
  document.body.appendChild(comp);
});
