const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel > div');
    let index = 0;

    // Function to move to the next slide
    const nextSlide = () => {
      index = (index + 1) % slides.length;
      carousel.style.transform = `translateX(-${index * 100}%)`;
    };

    // Auto-slide every 4 seconds
    setInterval(nextSlide, 4000);

    
  AOS.init();

