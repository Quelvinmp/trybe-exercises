/* eslint-disable no-magic-numbers */
import Swal from 'sweetalert2';
import './style.css';

const randomBtn = document.getElementById('random');

randomBtn.addEventListener('click', () => {
  const randomId = Math.floor(Math.random() * 731) + 1;

  fetch(`https://www.superheroapi.com/api.php/5619471344845487/${randomId}`)
    .then((response) => response.json())
    .then((data) => Swal.fire({
      text: `${data.name}`,
      imageUrl: `${data.image.url}`,
      imageHeight: '300px',
      imageAlt: `${data.image.name}`,
    }))
    .catch((error) => Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${error.message}`,
      footer: '<a href="">Why do I have this issue?</a>',
    }));
});
