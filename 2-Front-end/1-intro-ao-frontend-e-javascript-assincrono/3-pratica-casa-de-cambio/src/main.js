/* eslint-disable import/no-extraneous-dependencies */
import './style.css';
import Swal from 'sweetalert2';

const searchBtn = document.getElementById('search');
const chooseCoin = document.getElementById('choose-coin');
const hText = document.getElementById('dinamic-text');
const coinList = document.getElementById('dinamic-list');
const inputConversion = document.getElementById('conversion');
const inputValue = document.getElementById('value');
const swapBtns = document.getElementsByClassName('swapBtn');

Array.from(swapBtns).forEach((swapBtn) => {
  swapBtn.addEventListener('click', () => {
    const actuallyValueConversion = inputConversion.value;
    const actuallyValueChosenCoin = chooseCoin.value;
    chooseCoin.value = actuallyValueConversion;
    inputConversion.value = actuallyValueChosenCoin;
  });
});

const readAPIcoin = () => fetch(`https://api.exchangerate.host/latest?base=${chooseCoin.value}`)
  .then((response) => response.json());

const createDivs = (infos) => {
  const [coin, value] = infos;
  const coinDiv = document.createElement('div');
  const coinLogo = document.createElement('img');
  coinLogo.src = '../assets/coin.svg';
  const coinP = document.createElement('p');
  const coinValue = document.createElement('p');
  coinP.innerHTML = coin;
  if ((chooseCoin.value.toUpperCase() === 'BTC' || inputConversion.value.toUpperCase() === 'BTC' || coin === 'BTC') && value < 1) {
    coinValue.innerHTML = (value * inputValue.value).toFixed(8);
  } else {
    coinValue.innerHTML = (value * inputValue.value).toFixed(3);
  }
  coinDiv.appendChild(coinLogo);
  coinDiv.appendChild(coinP);
  coinDiv.appendChild(coinValue);
  coinList.appendChild(coinDiv);
};

const clearTable = () => {
  hText.innerHTML = '';
  while (coinList.children.length > 0) {
    coinList.removeChild(coinList.firstChild);
  }
};

const coinVerify = (name1) => {
  const validation1 = Object.keys(name1)
    .some((coin) => coin === chooseCoin.value.toUpperCase());
  if (inputConversion.value) {
    const validation2 = Object.keys(name1)
      .some((coin) => coin === inputConversion.value.toUpperCase());
    if (validation1 && validation2) {
      return true;
    } return false;
  }
  if (validation1) {
    return true;
  }
  return false;
};

const compareCurrencies = (object) => {
  clearTable();
  const conversion = Object.entries(object)
    .find((rate) => rate[0] === inputConversion.value.toUpperCase());
  hText.innerHTML = `Valores referentes a ${inputValue.value} ${chooseCoin.value.toUpperCase()} (1 und = ${conversion[1]} ${conversion[0]})`;
  createDivs(conversion);
};

searchBtn.addEventListener('click', () => {
  if (!chooseCoin.value) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Você precisa passar uma moeda de conversão!',
      background: 'rgb(47, 47, 47)',
      color: 'white',
    });
    return;
  }
  readAPIcoin()
    .then((data) => {
      const { rates } = data;
      if (inputConversion.value && coinVerify(rates)) {
        compareCurrencies(rates);
        return;
      }
      if (coinVerify(rates)) {
        clearTable();
        hText.innerHTML = `Valores referentes a ${inputValue.value} ${chooseCoin.value.toUpperCase()}`;
        Object.entries(rates).forEach((value) => {
          createDivs(value);
        });
      } else {
        throw new Error('Moeda Não existente!');
      }
    })
    .catch(() => Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Moeda Não existente!',
      background: 'rgb(47, 47, 47)',
      color: 'white',
    }));
});

window.onload = () => {
  readAPIcoin()
    .then((data) => {
      const { rates } = data;
      compareCurrencies(rates);
    });
};
