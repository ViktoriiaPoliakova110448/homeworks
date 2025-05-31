let count

function checkProbabilityTheory(count) {
    let countParni = 0;
    let countNeparni = 0;

for (let i = 0; i < count; i++) {
    const number = Math.round(Math.random() * (1000 - 100 + 1)) + 100;
    if (number % 2 === 0) {
        countParni++;
    } else{
        countNeparni++;
    }
}

const percentParni = (countParni / count * 100).toFixed(0)
const percentNeparni = (countNeparni / count * 100).toFixed(0)

console.log("Кількість згенерованих чисел: " + count)
console.log("З них парних: " + countParni)
console.log("З них непарних: " + countNeparni)
console.log("Відсоток парних: " + percentParni + "%")
console.log("Відсоток непарних: " + percentNeparni + "%")
}

checkProbabilityTheory(500)