window.addEventListener('load', () => {
  window.scrollTo({
    top: window.innerHeight*0.25,
    behavior: "smooth" // défilement doux
  });
  const preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
});

 const btn = document.getElementById("btnTop");

    // Affiche le bouton quand on scrolle vers le bas
    window.onscroll = function() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    };

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // défilement doux
  });
}