const sos_images = [
  {
    src: 'images/games/sos.png',
    alt: 'SOS1',
  },
  {
    src: 'images/games/sos2.png',
    alt: 'sos2',
  },
  {
    src: 'images/games/sos3.png',
    alt: 'sos3',
  },

  // Add more image objects here
];

const sosGameThumbnails = document.getElementById('sos-game-thumbnails');
const sosGameSingle = document.getElementById('sos-single-image').querySelector('img');

sos_images.forEach((image) => {
  const thumbnailContainer = document.createElement('div');
  thumbnailContainer.classList.add('thumbnail-container');

  const thumbnail = document.createElement('img');
  thumbnail.src = image.src;
  thumbnail.alt = image.alt;
  thumbnail.classList.add('thumbnail');

  thumbnailContainer.addEventListener('click', () => {
    sosGameSingle.src = image.src;
    sosGameSingle.alt = image.alt;
  });

  thumbnailContainer.appendChild(thumbnail);
  sosGameThumbnails.appendChild(thumbnailContainer);
});
