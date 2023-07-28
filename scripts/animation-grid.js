
const animation_images = [
  {
    src: 'images/animation/Coolvibes.gif',
    alt: 'Cool Vibes Esports',
    caption: 'Cool Vibes Esports',
  },
  {
    src: 'images/animation/explo.gif',
    alt: 'Explosive Star',
    caption: 'Explosive Star',
  },
  {
    src: 'images/animation/TowerAnimation.gif',
    alt: 'The Tower',
    caption: 'The Tower',
  },
  {
    src: 'images/animation/SwordSpin.gif',
    alt: 'The Tower',
    caption: 'The Tower',
  },
  // Add more image objects here
];

const animationGrid = document.getElementById('animation-grid');

animation_images.forEach((image) => {
  const anchor = document.createElement('a');
  anchor.href = image.src;
  anchor.setAttribute('data-fancybox', 'animation-gallery');
  anchor.setAttribute('data-caption', image.caption);

  const img = document.createElement('img');
  img.src = image.src;
  img.alt = image.alt;

  anchor.appendChild(img);
  animationGrid.appendChild(anchor);
});
