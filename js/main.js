// Pehle, dono zaroori cheezon ko select karein
const hamburger = document.querySelector('.hamburger-icon');
const mainNav = document.querySelector('.main-nav');

// Ab hamburger icon par click event lagayein
hamburger.addEventListener('click', () => {
    // Jab bhi click ho, main-nav mein 'drawer-active' class ko add/remove karo
    mainNav.classList.toggle('drawer-active');
});