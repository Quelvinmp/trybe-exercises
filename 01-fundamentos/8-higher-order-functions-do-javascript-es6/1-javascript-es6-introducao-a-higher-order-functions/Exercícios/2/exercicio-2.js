const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


const corrigeRespostas = () => {
    let count = 0;
    RIGHT_ANSWERS.map((a, b) => {
        console.log(a,STUDENT_ANSWERS[b]);
        if (a === STUDENT_ANSWERS[b]) {
            count += 1;
        } else if (a !== STUDENT_ANSWERS[b] && STUDENT_ANSWERS[b] !== 'N.A') {
            count -= 0.5;
        }
    })
    return count
};

console.log(corrigeRespostas());
