const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel > div');
let index = 0;

document.getElementById('prevBtn').addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  carousel.style.transform = `translateX(-${index * 100}%)`;
});

document.getElementById('nextBtn').addEventListener('click', () => {
  index = (index + 1) % slides.length;
  carousel.style.transform = `translateX(-${index * 100}%)`;
});


