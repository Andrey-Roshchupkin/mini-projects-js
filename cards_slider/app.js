const slidesPlugin = (activeSlide = 0) => {
  const slides = document.querySelectorAll(".slide");

  slides[activeSlide].classList.add("active");

  for (const slide of slides) {
    slide.addEventListener("mouseover", () => {
      clearActiveClasses();
      slide.classList.add("active");
    });
  }

  const clearActiveClasses = () => {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  };
};

slidesPlugin(3);
