const pole = {
  row0: [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
  row1: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 2, h: 0, i: 0, j: 0 },
  row2: { a: 0, b: 0, c: 0, d: 1, e: 0, f: 0, g: 2, h: 0, i: 0, j: 0 },
  row3: { a: 4, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0 },
  row4: { a: 4, b: 0, c: 1, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 2 },
  row5: { a: 4, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 2 },
  row6: { a: 4, b: 0, c: 0, d: 0, e: 0, f: 0, g: 1, h: 0, i: 0, j: 0 },
  row7: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0 },
  row8: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 1 },
  row9: { a: 2, b: 0, c: 3, d: 3, e: 3, f: 0, g: 0, h: 0, i: 0, j: 0 },
  row10: { a: 2, b: 0, c: 0, d: 0, e: 0, f: 0, g: 3, h: 3, i: 3, j: 0 },
};
const ships = {
  fourDecks: 1,
  threeDecks: 2,
  twoDecks: 3,
  oneDecks: 4,
};
const rowStr = "abcd";

const listEl = document.querySelector("ul.js-list");
const outputEl = document.querySelector("p.output");
makeSquareMarkup(pole);
const liEl = document.querySelectorAll("ul.grid__row .grid__item");
liEl.forEach((element) => {
  if (element.textContent !== "0") {
    element.classList.add("cell-black");
  }
});
listEl.addEventListener("mouseover", onElementOver);
listEl.addEventListener("mouseout", onElementOut);
listEl.addEventListener("click", onElementClick);
function makeSquareMarkup(pole) {
  let squareMarkup = pole.row0.reduce((acc, elem) => {
    return acc + `<li class="grid__title">${elem.toUpperCase()}</li>`;
  }, "<ul class='grid__row-title'>");
  squareMarkup += "</ul>";
  //   console.log(squareMarkup);
  for (let i = 1; i <= 10; i += 1) {
    const rowNumber = "row" + i;
    squareMarkup += `<ul class='grid__row'> <li class="grid__title">${i}</li>`;

    // console.log(pole[rowNumber]);
    for (let j = 1; j <= 10; j += 1) {
      // const columnName =
      // console.log(pole[rowNumber][pole.row0[j]]);
      squareMarkup += `<li class="grid__item" data-position="${
        pole.row0[j] + i
      }">${pole[rowNumber][pole.row0[j]]}</li>`;
    }
    squareMarkup += "</ul>";
  }

  listEl.insertAdjacentHTML("afterbegin", squareMarkup);
}
function onElementOver(event) {
  event.target.classList.add("onOver");
  // console.log(event.target);
}
function onElementOut(event) {
  event.target.classList.remove("onOver");
  // console.log(event.target);
}
function onElementClick(event) {
  const value = event.target.dataset.position;

  // alert("click on " + value);
  checkElementClick(value);
}

function checkElementClick(value) {
  const cellNumber = pole[`row${value[1]}`][`${value[0]}`];
  console.log(cellNumber);
  if (cellNumber === 0) {
    setOutput("Мимо!!! Спробуйте ще");
  }
  if (cellNumber === 1) {
    setOutput("Корабель знищено!!!");
  }
  if (cellNumber >= 2 && cellNumber <= 4) {
    setOutput("Влучно!!!");
  }
}
function setOutput(string) {
  outputEl.textContent = string;
}
