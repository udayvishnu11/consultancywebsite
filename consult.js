document.addEventListener('DOMContentLoaded', function () {
    const sliderContainer = document.querySelector('.image-slider-container');
    const slides = sliderContainer.children;
    const totalSlides = slides.length;
    const slidesPerGroup = 3;
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % (totalSlides - slidesPerGroup + 1);
        updateSlider();
    }

    function updateSlider() {
        const translateValue = -currentIndex * (100 / slidesPerGroup) + '%';
        sliderContainer.style.transform = 'translateX(' + translateValue + ')';
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds (adjust as needed)
});
