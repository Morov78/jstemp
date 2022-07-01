const step = 2; //крок
const borderEl = document.querySelector(".wrap");
const widthBorderEl = Math.round(borderEl.clientWidth / step) * step;
borderEl.style.width = widthBorderEl + "px";
const heightBorderEl = Math.round(borderEl.clientHeight / step) * step;
borderEl.style.height = heightBorderEl + "px";

console.log("Width=", widthBorderEl, "Height=", heightBorderEl);

const buttonEl = document.querySelector(".button");

function changePosition() {
  buttonEl.style.left = String(xPosition) + "px";
  buttonEl.style.bottom = String(yPosition) + "px";
}

function checkPosition(x, y) {
  console.log("scale = ", scale, "  stepScale = ", stepScale);
  return (
    x <= widthBorderEl - 25 && x >= 0 && y <= heightBorderEl - 15 && y >= 0
  );
}

function handlePosition(event) {
  let newPositionX = xPosition;
  let newPositionY = yPosition;
  if (event.key === "Shift") {
    scale = 2;
  }
  switch (event.code) {
    case "ArrowRight":
      newPositionX = xPosition + step * (scale + Math.floor(stepScale / 20));
      if (scale !== 1) {
        stepScale += 1;
      }
      break;
    case "ArrowLeft":
      newPositionX = xPosition - step * (scale + Math.floor(stepScale / 20));
      if (scale !== 1) {
        stepScale += 1;
      }
      break;
    case "ArrowUp":
      newPositionY = yPosition + step * (scale + Math.floor(stepScale / 20));
      if (scale !== 1) {
        stepScale += 1;
      }
      break;
    case "ArrowDown":
      newPositionY = yPosition - step * (scale + Math.floor(stepScale / 20));
      if (scale !== 1) {
        stepScale += 1;
      }
      break;
    default:
      return;
  }
  if (checkPosition(newPositionX, newPositionY)) {
    xPosition = newPositionX;
    yPosition = newPositionY;
  } else {
    console.log("false");
    scale = 1;
    stepScale = 0;
  }
  changePosition();
}
function checkShift(event) {
  if (event.key === "Shift") {
    scale = 1;
    stepScale = 0;
  }
}
let xPosition = Math.round(widthBorderEl / 2 / step) * step;
let yPosition = 0;
let scale = 1;
let stepScale = 0;
changePosition();
document.addEventListener("keydown", handlePosition);
document.addEventListener("keyup", checkShift);
