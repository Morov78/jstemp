const width = 130;
const gap = 10;
const count = 3;
const step = 1;
let position = 0;
let setPosition = 0;
let isTransitionOnListEl = false;
const listEl = document.querySelector(".carusel__list");
const arrowPrevEl = document.querySelector(".prev");
const arrowNextEl = document.querySelector(".next");
makeListMarkupEl();
addNewElemOnListEl();
const itemsListEl = document.querySelectorAll(".carusel__item");
arrowPrevEl.addEventListener("click", _.throttle(arrowPrevHandle, 300));
arrowNextEl.addEventListener("click", _.throttle(arrowNextHandle, 300));
window.addEventListener("keydown", _.throttle(keyHandle, 300));

function keyHandle(event) {
  if (event.code === "ArrowLeft") {
    arrowPrevHandle();
  }
  if (event.code === "ArrowRight") {
    arrowNextHandle();
  }
}
function arrowPrevHandle() {
  position += (width + gap) * step;
  if (position === 2 * (width + gap)) {
    isTransitionOnListEl = true;
    setPosition = position - (itemsListEl.length - 4) * (width + gap);
  }
  // console.log(position);
  transformListEl();
  //   listEl.style.transform = `translate(${position}px)`;
}
function arrowNextHandle() {
  // сдвиг вправо
  position -= (width + gap) * step;
  if (position === -(itemsListEl.length - 5) * (width + gap)) {
    setPosition = 140;
    isTransitionOnListEl = true;
  }
  // console.log(position);
  transformListEl();
}

function transformWithoutTransition() {
  // listEl.style.transform = `translate(${position}px)`;
  listEl.classList.add("notransition");
  position = setPosition;
  listEl.style.transform = `translate(${position}px)`;
  isTransitionOnListEl = false;
  // console.log("newPosition", position);
}
function transformListEl() {
  if (
    isTransitionOnListEl === false &&
    listEl.classList.contains("notransition")
  ) {
    listEl.classList.remove("notransition");
  }
  listEl.style.transform = `translate(${position}px)`;
  if (isTransitionOnListEl) {
    setTimeout(transformWithoutTransition, 250);
  }
}

// створюю розмітку слайдера і добавляє номер на елемент. 10 елементів
function makeListMarkupEl() {
  let i = 1;
  for (let li of document.querySelectorAll(".carusel__item")) {
    li.style.position = "relative";
    li.insertAdjacentHTML(
      "beforeend",
      `<span style="position:absolute;left:5px;top:5px">${i}</span>`
    );
    i++;
  }
}
// дублюю по 2 останніх елементи списку перед першим і два перших після останнього
function addNewElemOnListEl() {
  const lastElem = listEl.lastElementChild;
  const firstElem = listEl.firstElementChild;
  listEl.insertAdjacentHTML(
    "afterbegin",
    lastElem.previousElementSibling.outerHTML + lastElem.outerHTML
  );
  listEl.insertAdjacentHTML(
    "beforeend",
    firstElem.outerHTML + firstElem.nextElementSibling.outerHTML
  );
  // зміщення слайдера
  listEl.style.marginLeft = `-${2 * width + gap}px`;
}
