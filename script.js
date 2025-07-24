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
  const preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
});

const word = document.getElementById('animated-word');
word.innerHTML = word.textContent
  .split('')
  .map((letter, i) => `<span style="animation-delay:${i * 0.1}s">${letter}</span>`)
  .join('');
