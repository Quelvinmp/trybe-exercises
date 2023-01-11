const btnSubmit = document.getElementById('submit');
const btnDelete = document.getElementById('delete');
const agreeImage = document.getElementById('agree-image');

btnSubmit.addEventListener('click', (event) => {
    if (agreeImage.checked === false) {
        event.preventDefault();
    }
    else {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip')
    }
});

btnDelete.addEventListener('click', () => {
    document.getElementById('input-name').innerHTML = '';
    document.getElementById('input-email').innerHTML = '';
    document.getElementById('why').innerHTML = '';
    document.getElementById('input-date').value = null;
    document.getElementById('opportunities').checked = false;
    agreeImage.checked = false;
});