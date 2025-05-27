const slides = document.querySelectorAll(".hero__slides img");
const prevBtn = document.getElementById("prevSlide");
const nextBtn = document.getElementById("nextSlide");
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 5000);

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlideFunc() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

nextBtn.addEventListener("click", () => {
    nextSlide();
    resetInterval();
});

prevBtn.addEventListener("click", () => {
    prevSlideFunc();
    resetInterval();
});

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}
