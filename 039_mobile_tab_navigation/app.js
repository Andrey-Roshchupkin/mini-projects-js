const listItems = document.querySelectorAll("nav ul li");
const contents = document.querySelectorAll(".content");

listItems.forEach((item, idx) => {
  item.addEventListener("click", () => {
    hideAllContents();
    hideAllActive();
    item.classList.add("active");
    contents[idx].classList.add("show");
  });
});

function hideAllActive() {
  listItems.forEach((item) => {
    item.classList.remove("active");
  });
}

function hideAllContents() {
  contents.forEach((content) => {
    content.classList.remove("show");
  });
}
