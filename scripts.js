// 簡單的輪播效果
let currentSlideIndex = 0;

const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
}

function prevSlide() {
  currentSlideIndex =
    (currentSlideIndex - 1 + slides.length) % slides.length;
  showSlide(currentSlideIndex);
}

if (prevBtn && nextBtn && slides.length) {
  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);
  // 默認顯示第一張
  showSlide(currentSlideIndex);
}
