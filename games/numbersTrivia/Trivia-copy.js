let count = 1;
let points = 0;
let questionCount = 0;
let correctAnswer = 0;

const title = document.getElementById('h1Inside');
const question = document.getElementById('question');
const checkAnswerBtn = document.getElementById('checkAnswer');
const newGameBtnContainer = document.getElementById('newGameBtnContainer');

const newQuestion = () => {
    if (questionCount >= 10) {
        question.innerHTML = `סיימת את המשחק! צברת ${points} נקודות`;
        checkAnswerBtn.style.display = 'none';

        newGameBtnContainer.innerHTML = '<button id="newGameBtn">התחל משחק חדש</button>';

        const newGameBtn = document.getElementById('newGameBtn');
        newGameBtn.onclick = () => {
            count = 1;
            points = 0;
            questionCount = 0;
            checkAnswerBtn.style.display = 'block';
            newGameBtnContainer.innerHTML = '';
            newQuestion();
        };

        return;
    }

    title.innerHTML = 'שאלה מספר ' + count;

    let firstNumber = Math.round(Math.random() * 10);
    let secondNumber = Math.ceil(Math.random() * 10);
    let operators = ['+', '-', '*', '/'];
    let randomIndexOp = Math.floor(Math.random() * operators.length);
    const operator = operators[randomIndexOp];

    if (operator === '-' || operator === '/') {
        if (operator === '-') {
            while (firstNumber <= secondNumber) {
                firstNumber = Math.round(Math.random() * 10);
                secondNumber = Math.round(Math.random() * 10);
            }
        }

        if (operator === '/') {
            while (firstNumber % secondNumber !== 0 || firstNumber <= secondNumber) {
                firstNumber = Math.round(Math.random() * 10);
                secondNumber = Math.ceil(Math.random() * 10);
            }
        }
    }


    question.innerHTML = `${firstNumber} ${operator} ${secondNumber} = <input id="input" type:="number">`;

    if (operator === '+') {
        correctAnswer = firstNumber + secondNumber;
    } else if (operator === '-' && firstNumber > secondNumber) {
        correctAnswer = firstNumber - secondNumber;
    } else if (operator === '*') {
        correctAnswer = firstNumber * secondNumber;
    } else if (operator === '/' && firstNumber > secondNumber) {
        correctAnswer = firstNumber / secondNumber;
    }

    const numberInput = document.getElementById('input');
    numberInput.ariaPlaceholder = 'הכנסת תשובה כאן';


}

newQuestion();


checkAnswerBtn.onclick = () => {
    const userAnswer = Number(document.getElementById('input').value);

    if (userAnswer === correctAnswer) {
        points++;
    }

    count++;
    questionCount++;

    newQuestion();
}