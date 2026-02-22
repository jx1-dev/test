// smooth scrolling function
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// animations for elements
function animateElements() {
    const elements = document.querySelectorAll('.animate');
    elements.forEach((element) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(element);
    });
}

// chat interactions
const chatButton = document.querySelector('#chat-button');
const chatWindow = document.querySelector('#chat-window');

chatButton.addEventListener('click', () => {
    chatWindow.classList.toggle('visible');
});

// Initialize functions
document.addEventListener('DOMContentLoaded', () => {
    animateElements();
});