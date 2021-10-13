const startButton = document.querySelector("#start");

const screens = document.querySelectorAll(".screen");

const timeList = document.querySelector("#time-list");

const timerElement = document.querySelector("#time");

const board = document.querySelector("#board");

const colors = ["#52FAE0", "#73E643", "#FAD945", "#E37334", "#FF30BC"];

let time = 0;
let score = 0;

startButton.addEventListener("click", (event) => {
  event.preventDefault();
  screens[0].classList.add("up");
});

timeList.addEventListener("click", (event) => {
  if (event.target.classList.contains("time-btn")) {
    time = parseInt(event.target.getAttribute("data-time"));
    startGame();
  }
});

board.addEventListener("click", (event) => {
  if (event.target.classList.contains("circle")) {
    score++;
    event.target.remove();
    createRandomCircle();
  }
});

function startGame() {
  screens[1].classList.add("up");
  setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(time);
}

function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let currentTime = --time;
    if (currentTime < 10) {
      currentTime = `0${currentTime}`;
    }
    setTime(currentTime);
  }
}

function setTime(value) {
  timerElement.innerHTML = `00:${value}`;
}

function finishGame() {
  timerElement.parentNode.classList.add("hide");
  board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`;
}

function createRandomCircle() {
  const circle = document.createElement("div");
  const size = getRandomNumber(10, 60);
  const { width, height } = board.getBoundingClientRect();
  const x = getRandomNumber(size, width - size);
  const y = getRandomNumber(size, height - size);
  const color = getRandomColor();

  circle.classList.add("circle");

  circle.style.backgroundColor = color;

  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;

  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;

  board.append(circle);
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
  index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

document.addEventListener("keydown", (event) => {
  if ((event.key = "Space")) {
    winTheGame();
  }
});

function winTheGame() {
  const circle = document.querySelector(".circle");
  circle.click();
}
