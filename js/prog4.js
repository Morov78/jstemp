const numberElements = 240;
const newItemsEl = [];

const domListEl = document.querySelector(".dom-list");
domListEl.addEventListener("mouseover", onSetColor);
domListEl.addEventListener("mouseout", onRemoveColor);

function makeElement() {
  const newItemEl = document.createElement("li");
  newItemEl.classList.add("dom-item");
  // newItemEl.addEventListener("mouseover", onSetColor);
  // newItemEl.addEventListener("mouseout", onRemoveColor);
  return newItemEl;
}

function onSetColor(event) {
  console.log(event.target.nodeName);
  // if (event.currentTarget !== event.target) {
  //   event.target.style.backgroundColor = getRandomHexColor();
  if (event.target.nodeName === "LI") {
    event.target.style.backgroundColor = getRandomHexColor();
  }
}
function onRemoveColor(event) {
  event.target.style.backgroundColor = "";
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

for (let i = 0; i < numberElements; i += 1) {
  newItemsEl.push(makeElement());
}

domListEl.append(...newItemsEl);
