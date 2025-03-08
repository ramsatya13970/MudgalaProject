// Main JavaScript file for the website

document.addEventListener('DOMContentLoaded', function() {
    
    // Navbar scroll behavior
    var navbar = document.getElementById('mainNav');
    var navbarCollapse = document.querySelector('.navbar-collapse');
    
    function handleScroll() {
        if (window.pageYOffset > 100) {
            navbar.classList.add('navbar-shrink');
        } else {
            navbar.classList.remove('navbar-shrink');
        }
    }

    window.addEventListener('scroll', handleScroll);
    
    // Close mobile menu on click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        });
    });
    
    // Initialize Bootstrap tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Animation on scroll
    function revealOnScroll() {
        var reveals = document.querySelectorAll('.reveal');
        
        reveals.forEach((reveal) => {
            var windowHeight = window.innerHeight;
            var elementTop = reveal.getBoundingClientRect().top;
            var elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', revealOnScroll);
    
    // Form validation
    const forms = document.querySelectorAll('.needs-validation');
    
    forms.forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            
            form.classList.add('was-validated');
        });
    });
    
    // Initialize carousels with custom options
    var heroCarousel = document.querySelector('#heroCarousel');
    if (heroCarousel) {
        var carousel = new bootstrap.Carousel(heroCarousel, {
            interval: 5000,
            wrap: true
        });
    }
    
    // Add animation classes to elements
    function addAnimationClasses() {
        document.querySelectorAll('.feature-box').forEach((box, index) => {
            box.classList.add('reveal');
            box.style.animationDelay = `${index * 0.2}s`;
        });
        
        document.querySelectorAll('.sage-circle').forEach((circle, index) => {
            circle.classList.add('reveal');
            circle.style.animationDelay = `${index * 0.2}s`;
        });
    }
    
    addAnimationClasses();
});

// Helper function for smooth scrolling
function smoothScrollTo(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}
