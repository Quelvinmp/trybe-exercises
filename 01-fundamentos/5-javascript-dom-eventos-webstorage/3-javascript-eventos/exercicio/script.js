const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

const createDaysOfTheMonth = () => {
    const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const ulDays = document.getElementById('days');

    for (const day of decemberDaysList) {
        const dayElement = document.createElement('li');
        dayElement.innerHTML = day;
        dayElement.classList.add('day');
        if (day === 24 || day === 25 || day === 31) {
            dayElement.classList.add('holiday');
        } if (day === 4 || day === 11 || day === 18 || day === 25) {
            dayElement.classList.add('friday');
        }
        ulDays.appendChild(dayElement);
    }
}
createDaysOfTheMonth()

const createButtonHolidays = (buttonName) => {
    const buttonFeriado = document.createElement('button');
    buttonFeriado.innerHTML = buttonName;
    buttonFeriado.id = 'btn-holiday';

    const buttonsContainer = document.querySelector('.buttons-container');
    buttonsContainer.appendChild(buttonFeriado);
}
createButtonHolidays('Feriados');

const changeBgColorHolidays = () => {
    const holidays = document.getElementsByClassName('holiday');
    const buttonFeriados = document.getElementById('btn-holiday');
    const defaultColor = 'unset';
    const newColor = 'rgb(3,209,0)';

    buttonFeriados.addEventListener('click', () => {
        for (const day of holidays) {
            if (day.style.backgroundColor === defaultColor) {
                day.style.backgroundColor = newColor;
            } else {
                day.style.backgroundColor = defaultColor;
            }
        }
    });
}
changeBgColorHolidays()

const createButtonFriday = (buttonName) => {
    const buttonFridays = document.createElement('button');
    buttonFridays.innerHTML = buttonName;
    buttonFridays.id = 'btn-friday';
    const buttonsContainer = document.querySelector('.buttons-container');
    buttonsContainer.appendChild(buttonFridays);
}
createButtonFriday('Sexta-Feira')

const changeTextFriday = (fridaysArray) => {
    const fridays = document.getElementsByClassName('friday');
    const buttonFridays = document.getElementById('btn-friday');
    const newText = 'SEXTOU'

    buttonFridays.addEventListener('click', () => {
        for (const index in fridays) {
            if (fridays[index].innerText === newText) {
                fridays[index].innerText = fridaysArray[index];
            } else {
                fridays[index].innerText = newText;
            }
        }
    });
}
let decemberFridays = [4,11,18,25];
changeTextFriday(decemberFridays)

