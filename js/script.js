/*
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
*/








const numbersDisplay = document.getElementById('numbers-display');
    const timerDisplay = document.getElementById('timer');
    const guessSection = document.getElementById('guess-section');
    const guessInput = document.getElementById('guess-input');
    const submitGuess = document.getElementById('submit-guess');
    const resultDisplay = document.getElementById('result');

    let numbers = [];
    let timeLeft = 3;
    let guesses = [];
    let timerInterval;

    function generateNumbers() {
        numbers = Array.from({length: 5}, () => Math.floor(Math.random() * 100));
        numbersDisplay.textContent = numbers.join(' ');
    }

    function startTimer() {
        timerInterval = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = `Tempo rimasto: ${timeLeft} secondi`;
            if (timeLeft === 0) {
                clearInterval(timerInterval);
                startGuessing();
            }
        }, 1000);
    }

    function startGuessing() {
        numbersDisplay.style.display = 'none';
        timerDisplay.style.display = 'none';
        guessSection.style.display = 'block';
        guessInput.focus();
    }

    function checkGuess() {
        const guess = parseInt(guessInput.value);
        if (!isNaN(guess)) {
            guesses.push(guess);
            guessInput.value = '';
            if (guesses.length === 5) {
                showResult();
            } else {
                guessInput.placeholder = `Inserisci il numero ${guesses.length + 1}`;
            }
        }
    }

    function showResult() {
        guessSection.style.display = 'none';
        const correctGuesses = guesses.filter(guess => numbers.includes(guess));
        resultDisplay.textContent = `Hai indovinato ${correctGuesses.length} numeri su 5. 
                                        Numeri indovinati: ${correctGuesses.join(', ')}`;
    }

    generateNumbers();
    startTimer();

    submitGuess.addEventListener('click', checkGuess);