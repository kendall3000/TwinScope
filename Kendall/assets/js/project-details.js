document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;
    const carouselContainer = document.querySelector('.carousel-container');
    const indicatorContainer = document.querySelector('.indicator-container');

    let currentSlideIndex = 0;

    if (!prevButton || !nextButton || !carouselSlide || !carouselContainer || !indicatorContainer) {
        console.error('Carousel elements not found');
        return;
    }

    // Initialize carousel by displaying the first slide
    function updateCarousel() {
        // Calculate the offset and set the translateX style
        const offset = -currentSlideIndex * 100;
        carouselSlide.style.transform = `translateX(${offset}%)`;

        updateIndicators();
    }

    // Update active indicator
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

    // // Add event listeners for buttons
    // prevButton.addEventListener('click', moveToPreviousSlide);
    // nextButton.addEventListener('click', moveToNextSlide);

    // Add click event listener for the carousel container
    carouselContainer.addEventListener('click', (e) => {
        e.stopPropagation();

        const rect = carouselContainer.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const middleX = rect.width / 2;

        if (clickX < middleX) {
            console.log("Clicked on the left side");
            moveToPreviousSlide();
        } else {
            console.log("Clicked on the right side");
            moveToNextSlide();
        }
    });

    // Auto-slide functionality
    setInterval(() => {
        moveToNextSlide();
    }, 5000); // Change slide every 5 seconds

    // Create indicators
    function createIndicators() {
        for (let i = 0; i < totalItems; i++) {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            if (i === 0) indicator.classList.add('active'); // Set the first indicator as active
            indicatorContainer.appendChild(indicator);
        }
    }

    createIndicators();
    updateCarousel(); // Initial update to set up the carousel
});

