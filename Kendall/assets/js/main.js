const mobileMenu = document.querySelector('#mobile-menu');
const navbarMenu = document.querySelector('.navbar-menu');

// Toggle mobile menu
mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-active');
    navbarMenu.classList.toggle('active');
});

// Highlight active link based on the current page
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname.split('/').pop() || 'index.html'; // Default to 'index.html'
    const links = document.querySelectorAll('.navbar-links');

    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === path || (path === '' && href === '../index.html')) {
            link.classList.add('active');
        }
    });
});

// document.addEventListener('DOMContentLoaded', () => {
//     const fadeEffect = document.querySelector('.fade-effect');

//     const updateFadeEffect = () => {
//         const scrollTop = window.pageYOffset;
//         const windowHeight = window.innerHeight;
//         const documentHeight = document.body.scrollHeight;

//         // Calculate fade effect based on scroll position
//         const fadeHeight = windowHeight * 0.1; // Adjust this value for the height of the fade effect
//         const fadeStart = Math.max(scrollTop - fadeHeight, 0);
//         const fadeEnd = Math.min(scrollTop + windowHeight + fadeHeight, documentHeight);

//         fadeEffect.style.background = `
//             linear-gradient(to bottom, 
//             rgba(2, 33, 54, ${Math.min(scrollTop / fadeStart, 1)}) 0%, 
//             rgba(2, 33, 54, ${Math.min((scrollTop + windowHeight) / fadeEnd, 1)}) 100%)`;
//     };

//     window.addEventListener('scroll', updateFadeEffect);
//     window.addEventListener('resize', updateFadeEffect); // Update on resize to handle viewport changes
// });
