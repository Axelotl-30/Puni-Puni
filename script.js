window.addEventListener("scroll", () => {
  const el = document.querySelector(".element");
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  const progress = 1 - Math.min(Math.max(rect.top / windowHeight, 0), 1);

  const scale = 1 + progress * 0.5; // grossit jusqu'à 1.5
  const rotate = progress * 180;    // tourne jusqu’à 180°

  el.style.transform = `scale(${scale}) rotate(${rotate}deg)`;
});
