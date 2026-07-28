const revealElements = document.querySelectorAll('.fade-in-section');

const revealObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    }
}, {
    threshold: 0.18,
});

revealElements.forEach((element) => revealObserver.observe(element));

const contactForm = document.getElementById('contact-form');
const contactFeedback = document.getElementById('contact-feedback');

if (contactForm && contactFeedback) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        contactFeedback.textContent = 'Feature unavailable right now — please try again later.';
        contactFeedback.classList.add('visible');
        setTimeout(() => contactFeedback.classList.remove('visible'), 4000);
    });
}

