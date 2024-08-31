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
