import validator from 'validator';
import './style.css';

const inputText = document.getElementById('user-text');
const options = document.getElementsByClassName('options');
const validadeBtn = document.getElementById('validate-btn');
const pTextResult = document.getElementById('text-result');

validadeBtn.addEventListener('click', () => {
  for (let index = 0; index < options.length; index += 1) {
    let validationResult;
    if (options[index].selected === true) {
      switch (options[index].value) {
      case 'email':
        validationResult = validator.isEmail(inputText.value);
        pTextResult.innerHTML = `A validação retornou ${validationResult}`;
        break;
      case 'cep':
        validationResult = validator.isPostalCode(inputText.value, 'BR');
        pTextResult.innerHTML = `A validação retornou ${validationResult}`;
        break;
      case 'password':
        validationResult = validator.isStrongPassword(inputText.value);
        pTextResult.innerHTML = `A validação retornou ${validationResult}`;
        break;
      case 'cpf':
        validationResult = validator.isTaxID(inputText.value, 'pt-BR');
        pTextResult.innerHTML = `A validação retornou ${validationResult}`;
        break;
      default:
        validationResult = validator.isMobilePhone(inputText.value, ['pt-BR']);
        pTextResult.innerHTML = `A validação retornou ${validationResult}`;
      }
    }
  }
});
