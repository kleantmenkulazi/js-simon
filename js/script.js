const minimum = 1;
const maximum = 10;
const randomNumbers = [];
const numbersContainer = document.getElementById('numbers-container');
const timeToWait = 5;

for (let i = 0; i < 5; i++) {
    const num = getRandomNumbers(minimum,maximum);
    console.log('num', num, typeof num);

    randomNumber.push(num);
    numbersContainer.innerHTML +=
    <span>
        ${num}
    </span>
    ;
}

console.log('randomNumbers', randomNumbers, typeof randomNumbers);

setTimeout(function () {
    console.log('Timer finito');
    numbersContainer.innerHTML =
    <h1>
        Inserisci i numeri in ordine di come li hai visti prima
    </h1>
    ;
    for (let i = 0; i < randomNumbers; i++) {
        console.log('Prompt')
    }
}, timeToWait * 1000);





function getRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}