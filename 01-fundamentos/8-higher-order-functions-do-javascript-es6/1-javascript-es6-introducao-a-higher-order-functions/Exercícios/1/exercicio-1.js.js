const generateEmail = (fullName) => {
  const hired = {
    nomeCompleto: fullName,
    email: '',
  };
  fullName.toLowerCase().split('').forEach((value) => {
    if (value !== ' ') {
      hired.email += value;
    }
  })
  hired.email += '@trybe.com'

  return hired;
}

const newEmployees = () => {
  const employees = {
    id1: generateEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: generateEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: generateEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees());