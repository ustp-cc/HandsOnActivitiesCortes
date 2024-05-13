function scrollToElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        const offset = 100;
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: offsetTop - offset,
            behavior: 'smooth'
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = this.getAttribute('href');
            scrollToElement(target);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    function scrollToSkills() {
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            const offset = 50;
            window.scrollTo({
                top: skillsSection.offsetTop - offset,
                behavior: 'smooth'
            });
        }
    }

    const skillsLink = document.querySelector('nav a[href="#skills"]');
    if (skillsLink) {
        skillsLink.addEventListener('click', function(event) {
            event.preventDefault();
            scrollToSkills();
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    function scrollToProjects() {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            const offset = 150;
            window.scrollTo({
                top: projectsSection.offsetTop - offset,
                behavior: 'smooth'
            });
        }
    }

    const projectsLink = document.querySelector('nav a[href="#projects"]');
    if (projectsLink) {
        projectsLink.addEventListener('click', function(event) {
            event.preventDefault();
            scrollToProjects();
        });
    }
});
