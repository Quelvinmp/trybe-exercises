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

const resetConfigButton = document.getElementById('reset-config');

const createBtnBgc = (options) => {
    for (let index = 0; index < options.length; index += 1) {
        const btnBgc = document.createElement('button');
        btnBgc.innerHTML = options[index];
        btnBgc.id = `bgc-${index}`;
        btnBgc.classList.add('patternBtn');
        btnBgc.addEventListener('click', () => {
            mainHtml.style.backgroundColor = options[index];
            localStorage.setItem('backgroundColor', options[index]);
        })
        backgroundColor.appendChild(btnBgc);
    }
};

const createBtnFontC = (options) => {
    for (let index = 0; index < options.length; index += 1) {
        const btnFontC = document.createElement('button');
        btnFontC.innerHTML = options[index];
        btnFontC.id = `fontc-${index}`;
        btnFontC.classList.add('patternBtn');
        btnFontC.addEventListener('click', () => {
            mainHtml.style.color = options[index];
            localStorage.setItem('color', options[index])
        });
        fontColor.appendChild(btnFontC);
    }
};

const createBtnFontS = (options) => {
    for (let index = 0; index < options.length; index += 1) {
        const btnFontS = document.createElement('button');
        btnFontS.innerHTML = options[index];
        btnFontS.id = `fonts-${index}`;
        btnFontS.classList.add('patternBtn');
        btnFontS.addEventListener('click', () => {
            mainHtml.style.fontSize = options[index];
            localStorage.setItem('fontSize', options[index]);
        })
        fontSize.appendChild(btnFontS);
    }
};

const createBtnSpaceLines = (options) => {
    for (let index = 0; index < options.length; index += 1) {
        const btnSpaceL = document.createElement('button');
        btnSpaceL.innerHTML = options[index];
        btnSpaceL.id = `spacel-${index}`;
        btnSpaceL.classList.add('patternBtn');
        btnSpaceL.addEventListener('click', () => {
            mainHtml.style.lineHeight = options[index];
            localStorage.setItem('lineHeight', options[index]);
        })
        spaceBetweenLines.appendChild(btnSpaceL);
    }
};

const createBtnFontTypes = (options) => {
    for (let index = 0; index < options.length; index += 1) {
        const btnFontT = document.createElement('button');
        btnFontT.innerHTML = options[index];
        btnFontT.id = `fontt-${index}`;
        btnFontT.classList.add('patternBtn');
        btnFontT.addEventListener('click', () => {
            mainHtml.style.fontFamily = options[index];
            localStorage.setItem('fontFamily', options[index]);
        })
        fontType.appendChild(btnFontT);
    }
};

const getLocalStorage = () => {
    mainHtml.style.backgroundColor = localStorage.getItem('backgroundColor');
    mainHtml.style.color = localStorage.getItem('color');
    mainHtml.style.fontSize = localStorage.getItem('fontSize');
    mainHtml.style.lineHeight = localStorage.getItem('lineHeight');
    mainHtml.style.fontFamily = localStorage.getItem('fontFamily');
}

const resetConfig = () => {
    const btnReset = document.createElement('button');
    btnReset.innerText = 'Reset';
    btnReset.classList.add('patternBtn');
    btnReset.addEventListener('click', () => {
        mainHtml.style.backgroundColor = 'white';
        mainHtml.style.color = 'black';
        mainHtml.style.fontSize = '12pt';
        mainHtml.style.lineHeight = 'normal';
        mainHtml.style.fontFamily = 'times new roman';
        localStorage.clear();
    })
    resetConfigButton.appendChild(btnReset);
}



window.onload = () => {
    createBtnBgc(colorsBgc);
    createBtnFontC(colorsFont);
    createBtnFontS(optionsSize);
    createBtnSpaceLines(optionsSpace);
    createBtnFontTypes(optionsTypes);
    if (localStorage.length > 0) {
        getLocalStorage();
    }
    resetConfig()
}
