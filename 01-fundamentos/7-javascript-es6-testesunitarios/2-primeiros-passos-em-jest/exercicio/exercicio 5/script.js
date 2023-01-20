const hydrate = (string) => {
    let numsStr = string.replace(/[^0-9]/g, '');
    let qntd = 0;
    for (let letter in numsStr) {
        qntd += parseInt(numsStr[letter]);
    }
    if (qntd === 1) {
        return `${qntd} copo de água`
    }
    return `${qntd} copos de água`
}

// console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = hydrate;