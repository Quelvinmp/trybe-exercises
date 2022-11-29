// EXERCÍCIO 1

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// console.log('Bem-vinda, ' + info.personagem);            // Requisito 1

info['recorrente'] = 'Sim';

// console.log(info);           // Requisito 2

// for (let ket in info) {
//     console.log(key);
// }            // Requisito 3

// for (let value in info) {
//     console.log(info[value]);
// }            // Requisito 4

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
}

// for (let key in info, info2) {
//     if (info[key] === info2[key]) {
//         console.log('Ambos ' + key + 's');
//     } else {
//         console.log(info[key] + ' e ' + info2[key]);
//     }
// }            // Requisito 5



// EXERCÍCIO 2

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama \'' + leitor.livrosFavoritos[0]['titulo'] + '\'');