let name = 'Quelvin';

const substituaX = (nome) => {
    const frase = 'Tryber x aqui!';
    let arrayWord = frase.split(' ');
    
    for (let index in arrayWord) {
        if (arrayWord[index] === 'x') {
            arrayWord[index] = nome;
        }
    }

    return arrayWord.join(' ')
}

const minhasSkills = (func) => {
    const skills = ['JavaScript', 'HTML', 'CSS'];
    let resultado = `${func}

Minhas três principais habilidades são:
`;
    for (let index in skills) {
        resultado = `${resultado}
- ${skills[index]}`;
    }

    return resultado;
}

console.log(minhasSkills(substituaX(name)));