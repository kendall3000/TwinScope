

document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const indicatorContainer = document.querySelector('.indicator-container');
    const totalItems = carouselItems.length;
    const interval = 5000; // Auto-slide interval in milliseconds

    let currentSlideIndex = 0;
    let autoSlideInterval;

    // Check if required elements are present
    if (!prevButton || !nextButton || !carouselSlide || !indicatorContainer) {
        console.error('Carousel elements not found');
        return;
    }

    // Function to update carousel position
    function updateCarousel() {
        const offset = -currentSlideIndex * 100;
        carouselSlide.style.transform = `translateX(${offset}%)`;
        updateIndicators();
    }

    // Function to update the active indicator
    function updateIndicators() {
        const indicators = indicatorContainer.querySelectorAll('.indicator');
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === currentSlideIndex);
        });
    }

    // Move to the next slide
    function moveToNextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % totalItems;
        updateCarousel();
    }

    // Move to the previous slide
    function moveToPreviousSlide() {
        currentSlideIndex = (currentSlideIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    }

    // Create indicators
    function createIndicators() {
        indicatorContainer.innerHTML = ''; // Clear existing indicators to avoid duplicates
        for (let i = 0; i < totalItems; i++) {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            if (i === 0) indicator.classList.add('active'); // Set the first indicator as active
            indicator.addEventListener('click', () => moveToSlide(i));
            indicatorContainer.appendChild(indicator);
        }
    }

    // Move to a specific slide
    function moveToSlide(index) {
        currentSlideIndex = index;
        updateCarousel();
    }

    // Auto-slide functionality
    function startAutoSlide() {
        autoSlideInterval = setInterval(moveToNextSlide, interval);
    }

    // Stop auto-slide on hover
    carouselSlide.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    carouselSlide.addEventListener('mouseleave', startAutoSlide);

    // Add event listeners for buttons
    prevButton.addEventListener('click', moveToPreviousSlide);
    nextButton.addEventListener('click', moveToNextSlide);

    // Initialize indicators and start carousel
    createIndicators();
    updateCarousel();
    startAutoSlide();
});
