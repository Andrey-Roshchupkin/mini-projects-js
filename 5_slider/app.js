const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");

const sidebar = document.querySelector(".sidebar");
console.log(sidebar);
const slidesCount = sidebar.querySelectorAll("div").length;
console.log(slidesCount);
const mainSlide = document.querySelector(".main-slide");

const container = document.querySelector(".container");

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

let activeSlideIndex = 0;

upButton.addEventListener("click", () => {
  changeSlide("up");
});

downButton.addEventListener("click", () => {
  changeSlide("down");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    changeSlide("up");
  } else if (event.key === "ArrowDown") {
    changeSlide("down");
  }
});

function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }

  const screenHeight = container.clientHeight;

  mainSlide.style.transform = `translateY(-${
    activeSlideIndex * screenHeight
  }px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * screenHeight}px)`;
}
