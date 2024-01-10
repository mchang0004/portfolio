const illustration_images = [
  {
    src: 'images/illustration/Knight2.png',
    alt: 'Loading',
    caption: 'Knight',
  },
  {
    src: 'images/illustration/Knight1.png',
    alt: 'Loading',
    caption: 'Knight',
  },
  {
    src: 'images/illustration/Elk_small.png',
    alt: 'Loading',
    caption: 'Elk',
  },
  {
    src: 'images/illustration/Sushi.png',
    alt: 'Loading',
    caption: 'Sushi',
  },
  {
    src: 'images/illustration/RifleConcept.png',
    alt: 'Loading',
    caption: 'Rifle Concept',
  },
  {
    src: 'images/illustration/Armored.png',
    alt: 'Loading',
    caption: 'Armored',
  },
  {
    src: 'images/illustration/Backyard-Dreaming.png',
    alt: 'Loading',
    caption: 'Backyard Dreaming',
  },
  {
    src: 'images/illustration/First-tower.png',
    alt: 'Loading',
    caption: 'First Tower',
  },
  {
    src: 'images/illustration/Fractured-Hills.png',
    alt: 'Loading',
    caption: 'Fractured Hills',
  },
  {
    src: 'images/illustration/Monument.png',
    alt: 'Loading',
    caption: 'Monument',
  },
  {
    src: 'images/illustration/Starlit-Islands.png',
    alt: 'Loading',
    caption: 'Starlit Islands',
  },
  {
    src: 'images/illustration/Super-Cold.png',
    alt: 'Loading',
    caption: 'Super Cold',
  },

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
