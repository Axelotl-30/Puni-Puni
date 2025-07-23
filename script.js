const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, {
  threshold: 0.25 // au moins 10% visible
});

document.querySelectorAll('.popup').forEach(el => observer.observe(el));
