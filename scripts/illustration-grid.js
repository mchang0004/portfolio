const illustration_images = [
  {
    src: 'images/illustration/Knight2.png',
    alt: 'Knight',
    caption: 'Knight',
  },
  {
    src: 'images/illustration/Knight1.png',
    alt: 'Knight',
    caption: 'Knight',
  },
  {
    src: 'images/illustration/Elk_small.png',
    alt: 'Elk',
    caption: 'Elk',
  },
  {
    src: 'images/illustration/Sushi.png',
    alt: 'Sushi',
    caption: 'Sushi',
  },
  {
    src: 'images/illustration/RifleConcept.png',
    alt: 'Rifle Concept',
    caption: 'Rifle Concept',
  },
  {
    src: 'images/illustration/Armored.png',
    alt: 'Armored',
    caption: 'Armored',
  },
  {
    src: 'images/illustration/Backyard-Dreaming.png',
    alt: 'Backyard Dreaming',
    caption: 'Backyard Dreaming',
  },
  {
    src: 'images/illustration/First-tower.png',
    alt: 'First Tower',
    caption: 'First Tower',
  },
  {
    src: 'images/illustration/Fractured-Hills.png',
    alt: 'Fractured Hills',
    caption: 'Fractured Hills',
  },
  {
    src: 'images/illustration/Monument.png',
    alt: 'Monument',
    caption: 'Monument',
  },
  {
    src: 'images/illustration/Starlit-Islands.png',
    alt: 'Starlit Islands',
    caption: 'Starlit Islands',
  },
  {
    src: 'images/illustration/Super-Cold.png',
    alt: 'Super Cold',
    caption: 'Super Cold',
  },
  // Add more image objects here
];

const illustrationGrid = document.getElementById('illustration-grid');

illustration_images.forEach((image) => {
  const anchor = document.createElement('a');
  anchor.href = image.src;
  anchor.setAttribute('data-fancybox', 'illustration-gallery');
  anchor.setAttribute('data-caption', image.caption);

  const img = document.createElement('img');
  img.src = image.src;
  img.alt = image.alt;

  anchor.appendChild(img);
  illustrationGrid.appendChild(anchor);
});
