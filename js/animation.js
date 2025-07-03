document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk mengecek elemen yang terlihat di viewport
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.skill-item, .project-card, .timeline-item, .info-item, .stat-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('visible');
            }
        });
    };
    
    animateOnScroll();
    
    // Jalankan saat scroll
    window.addEventListener('scroll', animateOnScroll);
    
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroDescription = document.querySelector('.hero-description');
    const heroCta = document.querySelector('.hero-cta');
    const heroImage = document.querySelector('.hero-image img');
    
    if (heroTitle) heroTitle.style.animation = 'fadeInUp 1s ease forwards';
    if (heroSubtitle) heroSubtitle.style.animation = 'fadeInUp 1s ease 0.3s forwards';
    if (heroDescription) heroDescription.style.animation = 'fadeInUp 1s ease 0.6s forwards';
    if (heroCta) heroCta.style.animation = 'fadeInUp 1s ease 0.9s forwards';
    if (heroImage) heroImage.style.animation = 'fadeIn 1s ease 1.2s forwards';
});

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);