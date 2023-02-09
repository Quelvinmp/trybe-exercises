import './style.css';

const dogBtn = document.getElementById('dog');
const catBtn = document.getElementById('cat');
const surpriseBtn = document.getElementById('surprise');
const randomImg = document.getElementById('random-img');

// let dogImage;

dogBtn.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
      const { message } = data;
      randomImg.src = message;
    });
});

catBtn.addEventListener('click', () => {
  fetch('https://aws.random.cat/meow')
    .then((response) => response.json())
    .then((data) => {
      const { file } = data;
      randomImg.src = file;
    });
});

surpriseBtn.addEventListener('click', () => {
  Promise.any([
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => data.message),
    fetch('https://aws.random.cat/meow')
      .then((response) => response.json())
      .then((data) => data.file),
  ])
    .then((result) => {
      randomImg.src = result;
    });
});
