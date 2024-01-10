const graphicDesign_images = [
  {
    src: 'images/graphicDesign/PSA.png',
    alt: 'Loading',
  },
  {
    src: 'images/graphicDesign/EGD/TechSigPanel.png',
    alt: 'Loading',
  },
  {
    src: 'images/graphicDesign/EGD/ThumbnailGameArt&Animation.png',
    alt: 'Loading',
  },
  {
    src: 'images/graphicDesign/EGD/valorant-tournament-8-13-game.png',
    alt: 'Loading',
  },
  {
    src: 'images/graphicDesign/EGD/valorant-tournament-8-13-lobby.png',
    alt: 'Loading',
  },
  {
    src: 'images/graphicDesign/EGD/valorant-tournament-8-13-social.png',
    alt: 'Loading',
  },

];

const graphicDesignThumbnails = document.getElementById('graphic-design-thumbnails');
const graphicDesignSingle = document.getElementById('graphic-design-single').querySelector('img');

graphicDesign_images.forEach((image) => {
  const thumbnailContainer = document.createElement('div');
  thumbnailContainer.classList.add('thumbnail-container');

  const thumbnail = document.createElement('img');
  thumbnail.src = image.src;
  thumbnail.alt = image.alt;
  thumbnail.classList.add('thumbnail');

  thumbnailContainer.addEventListener('click', () => {
    graphicDesignSingle.src = image.src;
    graphicDesignSingle.alt = image.alt;
  });

  thumbnailContainer.appendChild(thumbnail);
  graphicDesignThumbnails.appendChild(thumbnailContainer);
});

captionElement.textContent = images[0].caption;
