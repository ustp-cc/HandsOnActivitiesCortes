document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = this.getAttribute('href');
            scrollToElement(target, getOffset(target));
        });
    });
});

function scrollToElement(selector, offset) {
    const element = document.querySelector(selector);
    if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: offsetTop - offset,
            behavior: 'smooth'
        });
    }
}

function getOffset(selector) {
    switch (selector) {
        case '#skills':
            return 50;
        case '#projects':
            return 150;
        default:
            return 100;
    }
}
