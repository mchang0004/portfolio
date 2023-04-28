const af_images = [
  {
    src: 'images/maps/D1.png',
    alt: 'Drelian',
    caption: 'Drelian',
  },
  {
    src: 'images/maps/G1.png',
    alt: 'Grivath',
    caption: 'Grivath',
  },
  {
    src: 'images/maps/S1.png',
    alt: 'Sorellia',
    caption: 'Sorellia',
  },
  {
    src: 'images/maps/SL1.png',
    alt: 'Steel Light',
    caption: 'Steel Light',
  },
  {
    src: 'images/maps/W1.png',
    alt: 'Wulfrest',
    caption: 'Wulfrest',
  },

  // Add more image objects here
];

const mapsGrid = document.getElementById('maps-grid');

af_images.forEach((image) => {
  const anchor = document.createElement('a');
  anchor.href = image.src;
  anchor.setAttribute('data-fancybox', 'map-gallery');
  anchor.setAttribute('data-caption', image.caption);

  const img = document.createElement('img');
  img.src = image.src;
  img.alt = image.alt;

  anchor.appendChild(img);
  mapsGrid.appendChild(anchor);
});
