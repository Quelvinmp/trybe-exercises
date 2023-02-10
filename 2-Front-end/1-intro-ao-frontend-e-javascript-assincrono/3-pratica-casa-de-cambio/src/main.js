/* eslint-disable import/no-extraneous-dependencies */
import './style.css';
import Swal from 'sweetalert2';

const searchBtn = document.getElementById('search');
const chooseCoin = document.getElementById('choose-coin');
const hText = document.getElementById('dinamic-text');
const coinList = document.getElementById('dinamic-list');

const createDivs = (coin, value) => {
  const coinDiv = document.createElement('div');
  const coinLogo = document.createElement('img');
  coinLogo.src = '../assets/coin.svg';
  const coinP = document.createElement('p');
  const coinValue = document.createElement('p');
  coinP.innerHTML = coin;
  coinValue.innerHTML = value.toFixed(3);
  coinDiv.appendChild(coinLogo);
  coinDiv.appendChild(coinP);
  coinDiv.appendChild(coinValue);
  coinList.appendChild(coinDiv);
};

const clearTable = () => {
  while (coinList.children.length > 0) {
    coinList.removeChild(coinList.firstChild);
  }
};

const coinVerify = (name) => Object.keys(name)
  .some((coin) => coin === chooseCoin.value.toUpperCase());

searchBtn.addEventListener('click', () => {
  if (chooseCoin.value === '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Você precisa passar uma moeda',
    });
  } else {
    fetch(`https://api.exchangerate.host/latest?base=${chooseCoin.value}`)
      .then((response) => response.json())
      .then((data) => {
        const { rates } = data;
        if (coinVerify(rates)) {
          clearTable();
          hText.innerHTML = `Valores referentes a 1 ${chooseCoin.value.toUpperCase()}`;
          Object.entries(rates).forEach((value) => {
            createDivs(value[0], value[1]);
          });
        } else {
          throw new Error('Moeda Não existente!');
        }
      })
      .catch((error) => Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
      }));
  }
});
