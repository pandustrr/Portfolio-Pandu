// Load components
document.addEventListener('DOMContentLoaded', function() {
    // Load navbar
    fetch('components/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
            setupNavbar();
        });
    
    // Load hero section
    fetch('components/hero.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('hero-container').innerHTML = data;
        });
    
    // Load about section
    fetch('components/about.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('about-container').innerHTML = data;
        });
    
    // Load skills section
    fetch('components/skills.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('skills-container').innerHTML = data;
        });
    
    // Load education section
    fetch('components/education.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('education-container').innerHTML = data;
        });
    
    // Load projects section
    fetch('components/projects.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('projects-container').innerHTML = data;
        });
    
    // Load contact section
    fetch('components/contact.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('contact-container').innerHTML = data;
            setupContactForm();
        });
});

// Navbar functionality
function setupNavbar() {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarLinks = document.querySelector('.navbar-links');
    
    if (navbarToggle && navbarLinks) {
        navbarToggle.addEventListener('click', function() {
            navbarLinks.style.display = navbarLinks.style.display === 'flex' ? 'none' : 'flex';
        });
        
        // Close navbar when clicking on a link (for mobile)
        document.querySelectorAll('.navbar-links a').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navbarLinks.style.display = 'none';
                }
            });
        });
        
        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navbarLinks.style.display = 'flex';
            } else {
                navbarLinks.style.display = 'none';
            }
        });
    }
}

// Contact form functionality
function setupContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelectorAll('input[type="text"]')[1].value;
            const message = this.querySelector('textarea').value;
            
            // Here you would typically send the form data to a server
            console.log('Form submitted:', { name, email, subject, message });
            
            // Show success message
            alert('Pesan Anda telah terkirim! Terima kasih telah menghubungi saya.');
            
            // Reset form
            this.reset();
        });
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});