// Select all carousels
const carousels = document.querySelectorAll('.carousel');

carousels.forEach((carousel) => {
  const carouselImages = carousel.querySelector('.carousel-images');
  const images = carousel.querySelectorAll('.carousel img');
  const prevButton = carousel.querySelector('.prev');
  const nextButton = carousel.querySelector('.next');

  let currentIndex = 0;

  // Show the image at the current index for this carousel
  function showImage(index) {
    const imageWidth = carouselImages.clientWidth; // Use the carousel's width
    carouselImages.style.transform = `translateX(${-index * imageWidth}px)`;
  }

  // Show next image
  nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0; // Loop back to the first image
    }
    showImage(currentIndex);
  });

  // Show previous image
  prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1; // Loop to the last image
    }
    showImage(currentIndex);
  });

  // Adjust carousel on window resize
  window.addEventListener('resize', () => showImage(currentIndex));
});
