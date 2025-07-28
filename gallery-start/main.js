const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = [
  'images/pic1.jpg',
  'images/pic2.jpg',
  'images/pic3.jpg',
  'images/pic4.jpg',
  'images/pic5.jpg'
];

/* Declaring the alternative text for each image file */
const altTexts = {
  'images/pic1.jpg': 'Closeup of human eye',
  'images/pic2.jpg': 'A shot of a terrain',
  'images/pic3.jpg': 'An image of white and purple flowers',
  'images/pic4.jpg': 'An image of an historic wall or cave painting',
  'images/pic5.jpg': 'An enlarged image of a butterfly on a leaf'
};

/* Looping through images */
for (let i = 0; i < imageFilenames.length; i++) {
  const filename = imageFilenames[i];
  const newImage = document.createElement('img');
  newImage.src = filename;
  newImage.alt = altTexts[filename];
  thumbBar.appendChild(newImage);

  // Add click event to update the main displayed image
  newImage.addEventListener('click', () => {
    displayedImage.src = filename;
    displayedImage.alt = altTexts[filename];
  });
}

/* Darken/Lighten button toggle */
btn.addEventListener('click', () => {
  if (btn.textContent === 'Darken') {
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    btn.textContent = 'Lighten';
  } else {
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    btn.textContent = 'Darken';
  }
});
