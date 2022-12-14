const mainHtml = document.getElementById('main-content');
const bodyHtml = document.body;

const backgroundColor = document.getElementById('bg-container');
const colorsBgc = ['White', 'Black', 'Green', 'Blue', 'Yellow'];

const fontColor = document.getElementById('fontcolor-container');
const colorsFont = ['Black', 'Red', 'White'];

const fontSize = document.getElementById('fontsize-container');
const optionsSize = ['8pt', '10pt', '12pt', '14pt', '20pt'];

const spaceBetweenLines = document.getElementById('spacebtwl-container');
const optionsSpace = ['1', 'Normal', '1.5', '2.0', '3.0'];

const fontType = document.getElementById('fonttype-container');
const optionsTypes = ['Arial', 'Times New Roman'];

// console.log(backgroundColor);
const createBtnBgc = (options) => {
    for (let index = 0; index < options.length; index += 1) {
        const btnBgc = document.createElement('button');
        btnBgc.innerHTML = options[index];
        btnBgc.id = `bgc-${index}`;
        btnBgc.classList.add('paternBtn');
        btnBgc.addEventListener('click', () => {
            bodyHtml.style.backgroundColor = options[index];
        })
        backgroundColor.appendChild(btnBgc);
    }
}

const createBtnFontC = (options) => {
    for (let index = 0; index < options.length; index += 1) {
        const btnFontC = document.createElement('button');
        btnFontC.innerHTML = options[index];
        btnFontC.id = `fontc-${index}`;
        btnFontC.classList.add('paternBtn');
        btnFontC.addEventListener('click', () => {
            mainHtml.style.color = options[index];
        })
        fontColor.appendChild(btnFontC);
    }
}

const createBtnFontS = (options) => {
    for (let index = 0; index < options.length; index += 1) {
        const btnFontS = document.createElement('button');
        btnFontS.innerHTML = options[index];
        btnFontS.id = `fonts-${index}`;
        btnFontS.classList.add('paternBtn');
        btnFontS.addEventListener('click', () => {
            mainHtml.style.fontSize = options[index];
        })
        fontSize.appendChild(btnFontS);
    }
}

const createBtnSpaceLines = (options) => {
    for (let index = 0; index < options.length; index += 1) {
        const btnSpaceL = document.createElement('button');
        btnSpaceL.innerHTML = options[index];
        btnSpaceL.id = `spacel-${index}`;
        btnSpaceL.classList.add('paternBtn');
        btnSpaceL.addEventListener('click', () => {
            mainHtml.style.lineHeight = options[index];
        })
        spaceBetweenLines.appendChild(btnSpaceL);
    }
}

const createBtnFontTypes = (options) => {
    for (let index = 0; index < options.length; index += 1) {
        const btnFontT = document.createElement('button');
        btnFontT.innerHTML = options[index];
        btnFontT.id = `fontt-${index}`;
        btnFontT.classList.add('paternBtn');
        btnFontT.addEventListener('click', () => {
            mainHtml.style.fontFamily = options[index];
        })
        fontType.appendChild(btnFontT);
    }
}






window.onload = () => {
    createBtnBgc(colorsBgc);
    createBtnFontC(colorsFont);
    createBtnFontS(optionsSize);
    createBtnSpaceLines(optionsSpace);
    createBtnFontTypes(optionsTypes);
}
