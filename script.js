const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Animate with GSAP
      gsap.to(entry.target, {
        duration: 0.65,
        opacity: 1,
        scale: 1,
        rotate: 0,
        ease: "bounce.out"
      });

      observer.unobserve(entry.target); // stop observing after animation
    }
  });
}, {
  threshold: 0.4
});

document.querySelectorAll('.popup').forEach(el => observer.observe(el));

window.addEventListener('load', () => {
  const preloader = document.getElementsByClassName('preloader');
  preloader.style.display = 'none';
});