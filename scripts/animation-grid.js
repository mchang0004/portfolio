
const animation_images = [
  {
    src: 'images/animation/Coolvibes.gif',
    alt: 'Loading', //alternative text if it cannot be displayed
    caption: 'Cool Vibes Esports',
  },
  {
    src: 'images/animation/explo.gif',
    alt: 'Loading',
    caption: 'Explosive Star',
  },
  {
    src: 'images/animation/TowerAnimation.gif',
    alt: 'Loading',
    caption: 'The Tower',
  },
  {
    src: 'images/animation/SwordSpin.gif',
    alt: 'Loading',
    caption: 'The Tower',
  },
];

const animationGrid = document.getElementById('animation-grid');

animation_images.forEach((image) => {
  const thumbnail = document.createElement('a');
  thumbnail.href = image.src;
  thumbnail.setAttribute('data-fancybox', 'animation-gallery');
  thumbnail.setAttribute('data-caption', image.caption);

  const img = document.createElement('img');
  img.src = image.src;
  img.alt = image.alt;

  thumbnail.appendChild(img);
  animationGrid.appendChild(thumbnail);
});
