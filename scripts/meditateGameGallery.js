const meditate_images = [
  {
    src: 'images/games/MeditateLogo.png',
    alt: 'Meditate Splash Screen',
  },
  {
    src: 'images/games/MeditateGame1.png',
    alt: 'Meditate Game',
  },
  {
    src: 'images/games/MeditateGame2.png',
    alt: 'Meditate Game',
  },
  {
    src: 'images/games/MeditateGame3.png',
    alt: 'Meditate Game',
  },
  // Add more image objects here
];

const meditateGameThumbnails = document.getElementById('meditate-game-thumbnails');
const meditateGameSingle = document.getElementById('meditate-single-image').querySelector('img');

meditate_images.forEach((image) => {
  const thumbnailContainer = document.createElement('div');
  thumbnailContainer.classList.add('thumbnail-container');

  const thumbnail = document.createElement('img');
  thumbnail.src = image.src;
  thumbnail.alt = image.alt;
  thumbnail.classList.add('thumbnail');

  thumbnailContainer.addEventListener('click', () => {
    meditateGameSingle.src = image.src;
    meditateGameSingle.alt = image.alt;
  });

  thumbnailContainer.appendChild(thumbnail);
  meditateGameThumbnails.appendChild(thumbnailContainer);
});
