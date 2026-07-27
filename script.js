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
