document.addEventListener('DOMContentLoaded', () => {
    // Typed.js for hero section
    new Typed('#typed', {
        strings: ['Procurement Assistant', 'Content Marketing'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1000,
        loop: true
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Fade-in and progress bar animation on scroll
    const sections = document.querySelectorAll('.section');
    const progressBars = document.querySelectorAll('.progress');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.id === 'skills') {
                    progressBars.forEach(bar => {
                        const width = bar.style.width;
                        bar.style.width = '0';
                        setTimeout(() => {
                            bar.style.width = width;
                        }, 100);
                    });
                }
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Parallax effect for hero background
    window.addEventListener('scroll', () => {
        const heroBg = document.querySelector('.hero-bg');
        const scrollPosition = window.pageYOffset;
        heroBg.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    });
});