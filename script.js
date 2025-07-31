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


const Lcharacters = ["Komami.png","Mika.png","Nyarthur.png","Ryuta.png","WyvernKing.png"];
let characterIndex = 0;

function switch_character(side){
  if (side === "left") {
    characterIndex = (characterIndex - 1 + Lcharacters.length) % Lcharacters.length;
  }else if (side === "right") {
    characterIndex = (characterIndex + 1) % Lcharacters.length;
  }else {return;} // Invalid side

  const character = document.querySelector('.character');
  character.style.backgroundImage = `url('assets/popups/Slide_${Lcharacters[characterIndex]}')`;
  const puni = document.querySelector('.cpuni');
  puni.style.backgroundImage = `url('assets/popups/Puni_${Lcharacters[characterIndex]}')`;

  character.style.opacity = 0; // Reset opacity for fade-in effect
  puni.style.opacity = 0;
  
  const width = window.innerWidth;
  const height = window.innerHeight;

  if (width < height) {
    character.style.backgroundSize = '25vw auto'; // Reset scale for bounce effect
    gsap.to(character, {
      duration: 0.65,
      opacity: 1,
      backgroundSize: '50vw auto',
      ease: "bounce.out"
    });

    puni.style.backgroundSize = '50vw auto';
    gsap.to(puni, {
      duration: 0.65,
      opacity: 1,
      backgroundSize: '100vw auto',
      ease: "bounce.out"
    });

  } else {
    character.style.backgroundSize = '15vw auto'; // Reset scale for bounce effect
    gsap.to(character, {
      duration: 0.65,
      opacity: 1,
      backgroundSize: '30vw auto',
      ease: "bounce.out"
    });

    puni.style.backgroundSize = '30vw auto';
    gsap.to(puni, {
      duration: 0.65,
      opacity: 1,
      backgroundSize: '60vw auto',
      ease: "bounce.out"
    });
  }
  
}