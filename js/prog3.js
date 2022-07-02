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
// добавлення кнопок знизу слайдера
// makeButtonsEl();
const caruselButtonsEl = document.querySelector(".carusel__buttons");
caruselButtonsEl.addEventListener("click", onButtonClick);

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
  changeButtonPosition();
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
  changeButtonPosition();
}
function onButtonClick(event) {
  // console.log(event.target.dataset.button);
  // console.log(event.target.textContent);
  position = -(event.target.textContent - 2) * (width + gap);
  transformListEl();
  changeButtonPosition();
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
function changeButtonPosition() {
  let set = -position / (width + gap) + 2;
  if (set === 11) {
    // console.log(set, "set");
    set = 1;
  }
  if (set === 0) {
    set = 10;
  }
  addClassToActivePosition(set);
}
function addClassToActivePosition(index) {
  const activeClassButton = caruselButtonsEl.querySelector(
    ".carusel__button-active"
  );
  if (activeClassButton) {
    activeClassButton.classList.remove("carusel__button-active");
  }
  caruselButtonsEl.children[index - 1].classList.add("carusel__button-active");
}
// створюю розмітку слайдера і добавляє номер на елемент. 10 елементів
function makeListMarkupEl() {
  let i = 1;
  for (let li of document.querySelectorAll(".carusel__item")) {
    li.insertAdjacentHTML(
      "beforeend",
      `<span class="carusel__title">${i}</span>`
    );
    i++;
  }
}
// makeButtonsEl (){

// }

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
