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

    // Form validation
    const forms = document.querySelectorAll('.needs-validation');

    forms.forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();
                // Here you would typically send the form data to a server
                // For static site, we'll just show a success message
                
                // Collect form data
            // let userName = document.getElementById("name").value;
            // let userEmail = document.getElementById("email").value;
            // let userMessage = document.getElementById("message").value;
            let userName = "ram";
            let userEmail = "ram@gmail.com";
            let userMessage = "testing message";
            console.log("Hare Krishna1..................");

            (function() {
                emailjs.init("LusbmnaLnKyiliEb5");  // Replace with your EmailJS Public Key
            })();
            console.log("Hare Krishna2..................");


            emailjs.send("service_igd3iqk", "template_2dehbxd", {
                to_email: "ramnarayan.sahu@truminds.com",
                from_name: userName,
                from_email: userEmail,
                message: userMessage,
            }).then(function(response) {
                alert("Email sent successfully!");
                document.getElementById("emailForm").reset();
            }, function(error) {
                alert("Error sending email: " + JSON.stringify(error));
            });

            // Encode for URL
            // const mailtoLink = `mailto:ramsatya13970@gmail.com?subject=New Contact Form Submission from ${encodeURIComponent(userName)}&body=${encodeURIComponent("Name: " + userName + "\nEmail: " + userEmail + "\n\nMessage:\n" + userMessage)}`;

            // // Open default mail client
            // window.location.href = mailtoLink;

                alert('Form submitted successfully! We will contact you soon.');
                form.reset();
            }

            form.classList.add('was-validated');
        });
    });

    // Initialize Bootstrap tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Initialize carousels
    var heroCarousel = document.querySelector('#heroCarousel');
    if (heroCarousel) {
        new bootstrap.Carousel(heroCarousel, {
            interval: 5000,
            wrap: true
        });
    }

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

// Helper function for smooth scrolling (This part remains unchanged)
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