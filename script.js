const section = document.querySelector('.parallax');
const layers = document.querySelectorAll('.layer');

window.addEventListener('scroll', () => {

  const scrollY = window.scrollY;
  const sectionTop = section.offsetTop;

  const progress = Math.min(
    Math.max(scrollY + sectionTop, 0),
    2000
  );

  layers.forEach(layer => {
    const speed = layer.dataset.speed;
    const movement = progress * speed;
    layer.style.transform = `translate(-50%, -${movement}px)`;
  });

});
