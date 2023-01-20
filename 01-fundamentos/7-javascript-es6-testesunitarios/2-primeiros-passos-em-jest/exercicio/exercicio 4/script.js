const techList = (array, name) => {

    if (array.length === 0) {
        return 'Vazio!'
    }

    const sortedArray = array.sort()
    const finalObj = []
    for (let index in sortedArray) {
        const obj = {
            name: name,
            tech: array[index],
        }
        finalObj.push(Object.assign({}, obj));
    }
    return finalObj
}

console.log(techList([], 'Lucas'));

module.exports = techList;