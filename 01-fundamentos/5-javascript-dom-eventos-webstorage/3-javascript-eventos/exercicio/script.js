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
const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
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
let decemberFridays = [4, 11, 18, 25];
changeTextFriday(decemberFridays)

const dayMouseOver = () => {
    const days = document.querySelector('#days');

    days.addEventListener('mouseover', (event) => {
        event.target.style.fontSize = '30px';
        event.target.style.fontWeight = '600';
    });
}

const dayMouseOut = () => {
    const days = document.querySelector('#days');

    days.addEventListener('mouseout', (event) => {
        event.target.style.fontSize = '20px';
        event.target.style.fontWeight = '200';
    });
}

dayMouseOver()
dayMouseOut()

const addTask = (task) => {
    const createTask = document.createElement('span');
    createTask.innerHTML = task;
    const divMyTasks = document.querySelector('.my-tasks');
    divMyTasks.appendChild(createTask);
}
addTask('Dias de Projeto Trybe')

const addColorToTask = (color) => {
    const createDiv = document.createElement('div');
    createDiv.className = 'task';
    createDiv.style.backgroundColor = color;
    const divMyTasks = document.querySelector('.my-tasks');
    divMyTasks.appendChild(createDiv);
}
addColorToTask('green')

const setTaskClass = () => {
    let selectedTask = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');
    myTasks.addEventListener('click', (event) => {
        if (selectedTask.length === 0) {
            event.target.className = 'task selected';
        } else {
            event.target.className = 'task';
        }
    });
}
setTaskClass();

const setDayColor = () => {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;

    days.addEventListener('click', (event) => {
        let eventTargetColor = event.target.style.color;
        if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
            let color = selectedTask[0].style.backgroundColor;
            event.target.style.color = color;
        } else if (eventTargetColor === taskColor) {
            event.target.style.color = 'rgb(119,119,119)';
        }
    });
}
setDayColor();

const addText = () => {
    const taskInput = document.getElementById('task-input');
    const btnAdd = document.getElementById('btn-add');
    const taskList = document.querySelector('.task-list');

    btnAdd.addEventListener('click', () => {
        if (taskInput.value === '') {
            window.alert('Erro');
        } else {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = taskInput.value;
            taskList.appendChild(taskItem);
            taskInput.value = ''
        }
    });

    taskInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter' && taskInput.value !== '') {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = taskInput.value;
            taskList.appendChild(taskItem);
            taskInput.value = ''
        }
    });
}
addText()
