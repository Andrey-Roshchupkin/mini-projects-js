const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const textInput = document.getElementById("textInput");
let text = "We Love Programming!";
let idx = 1;
let speed = 500 / speedEl.value;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);
  idx++;
  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

speedEl.addEventListener("input", (e) => (speed = 500 / e.target.value));

textInput.addEventListener("input", (e) => (text = e.target.value));
