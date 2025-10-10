document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.hero-slider');
    const slides = document.querySelectorAll('.hero-section');
    let currentSlide = 0;

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        const offset = -currentSlide * (100 / slides.length);
        slider.style.transform = `translateX(${offset}%)`;
    }

    setInterval(nextSlide, 10000); // Change slide every 5 seconds
});