const aos_images = [
  {
    src: 'images/games/AOS.png',
    alt: 'AOS',
  },
  {
    src: 'images/games/AOS2.png',
    alt: 'AOS2',
  },
  {
    src: 'images/games/AOS3.png',
    alt: 'AOS3',
  },

  // Add more image objects here
];

const aosGameThumbnails = document.getElementById('aos-game-thumbnails');
const aosGameSingle = document.getElementById('aos-single-image').querySelector('img');

aos_images.forEach((image) => {
  const thumbnailContainer = document.createElement('div');
  thumbnailContainer.classList.add('thumbnail-container');

  const thumbnail = document.createElement('img');
  thumbnail.src = image.src;
  thumbnail.alt = image.alt;
  thumbnail.classList.add('thumbnail');

  thumbnailContainer.addEventListener('click', () => {
    aosGameSingle.src = image.src;
    aosGameSingle.alt = image.alt;
  });

  thumbnailContainer.appendChild(thumbnail);
  aosGameThumbnails.appendChild(thumbnailContainer);
});
