// Active nav link indicator
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Fade in elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe project cards for animation
document.querySelectorAll('.project-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  observer.observe(card);
});

// Smooth interactions for links
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact link hover effects
const contactLinks = document.querySelectorAll('.contact-link');
contactLinks.forEach(link => {
  link.addEventListener('mouseover', function() {
    this.style.transform = 'translateY(-4px)';
  });
  link.addEventListener('mouseout', function() {
    this.style.transform = 'translateY(0)';
  });
});
