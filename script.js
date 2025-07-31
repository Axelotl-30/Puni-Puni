const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const layers = entry.target.querySelectorAll('.layer');
      
      const tl = gsap.timeline();

      layers.forEach((layer, index) => {
        tl.to(layer, {
          duration: 0.65,
          opacity: 1,
          scale: 1,
          rotate: 0,
          ease: "bounce.out"
        }, index * 0.2); // décalage dans le temps pour cascade
      });

      observer.unobserve(entry.target); // on stoppe après la première animation
    }
  });
}, {
  threshold: 0.3
});

document.querySelectorAll('.popup').forEach(el => observer.observe(el));

window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
});


const Lcharacters = ["assets/popups/Slide_Komami.png","assets/popups/Slide_Mika.png","assets/popups/Slide_Nyarthur.png","assets/popups/Slide_Ryuta.png","assets/popups/Slide_WyvernKing.png"];
let characterIndex = 0;

function switch_character(side){
  if (side === "left") {
    characterIndex = (characterIndex - 1 + Lcharacters.length) % Lcharacters.length;
  }else if (side === "right") {
    characterIndex = (characterIndex + 1) % Lcharacters.length;
  }else {return;} // Invalid side

  const character = document.querySelector('.character');
  character.style.backgroundImage = `url('${Lcharacters[characterIndex]}')`;
  character.style.opacity = 0; // Reset opacity for fade-in effect
  character.style.backgroundSize = '25vw auto'; // Reset scale for bounce effect

  const width = window.innerWidth;
  const height = window.innerHeight;
  if (width < height) {
    gsap.to(character, {
      duration: 0.65,
      opacity: 1,
      backgroundSize: '80vw auto',
      rotate: 0,
      ease: "bounce.out"
    });
  } else {
    gsap.to(character, {
      duration: 0.65,
      opacity: 1,
      backgroundSize: '60vw auto',
      rotate: 0,
      ease: "bounce.out"
    });
  }
  
}