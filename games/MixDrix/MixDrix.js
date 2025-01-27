let Player = '';
let opponent = '';
let playerScore = 0;
let opponentScore = 0;
let leftScorePlayer = 0;
let rightScorePlayer = 0;
let leftScoreOpponent = 0;
let rightScoreOpponent = 0;
let delay = 500;
let resultSound = '';



const warnningScreen = document.createElement('div');
warnningScreen.id = 'warnningScreen';
warnningScreen.innerHTML = ` <h1 id="pleaseNote">Please Note!</h1>
<p style="width: 50%; margin: 0 auto; text-align: center;">
All elements, characters, designs, and concepts used in this game are the intellectual property of the original series. This project is created for demonstration purposes only and is not intended for any commercial use, profit, or personal gain. <br><br>

For any concerns, requests, or inquiries, feel free to contact me at tyossi91@gmail.com. 
</p>`;

document.body.appendChild(warnningScreen);


setTimeout(() => {
    warnningScreen.remove();
}, 6000);






const resultText = document.createElement('p');
resultText.id = 'resultText';


const musicButton = document.createElement('button');
musicButton.id = 'musicButton';

document.body.appendChild(musicButton);

const volumeRange = document.createElement('input');
volumeRange.id = 'volumeRange';
volumeRange.type = 'range';
volumeRange.min = 0;
volumeRange.max = 1;
volumeRange.step = 0.001;
volumeRange.value = 0.8;
volumeRange.addEventListener('input', () => {
    gameMusic.volume = volumeRange.value;
});

musicButton.appendChild(volumeRange);

const playerNumber = Math.floor(Math.random() * 456) + 1;

const startGameScreen = document.createElement('div');
startGameScreen.id = 'startGameScreen';

const startGameDisclaimer = document.createElement('p');
startGameDisclaimer.id = 'startGameDisclaimer';
startGameDisclaimer.innerHTML = `Welcome to the Tic-Tac-Toe game! <br><br>

Please note:<br>

<ol>
 <li> This game is for fun only – play fairly and respectfully towards your opponent.</li>

<li>The game may include sound effects and animations – ensure the volume is appropriate for your environment. </li>

<li> In case of technical issues or unexpected results, please refresh the page and restart the game. </li>
If You Agree, Click The Button Below!`;



document.body.appendChild(startGameScreen);
startGameScreen.appendChild(startGameDisclaimer);


const startButton = document.createElement('button');
startButton.id = 'startButton';
startButton.textContent = 'I Agree!';
startButton.addEventListener('click', () => {
    startGameScreen.remove();
    backgroundMusic.play();
    generateAnimatedText();
});

startGameScreen.appendChild(startButton);


const rightPlayerScore = document.getElementById('insidePlayerScore');
rightPlayerScore.innerHTML = `${rightScorePlayer}`;

const leftScorePlayerDiv = document.getElementById('leftScorePlayer');
leftScorePlayerDiv.innerHTML = `${leftScorePlayer}`;

const insideOpponentScore = document.getElementById('insideOpponentScore');
insideOpponentScore.innerHTML = `${rightScoreOpponent}`;

const leftScoreOpponentDiv = document.getElementById('leftScoreOpponent');
leftScoreOpponentDiv.innerHTML = `${leftScoreOpponent}`;

const playerTitle = document.getElementById('playerTitle');
playerTitle.innerHTML = `Player <span id='numberSpan'>${playerNumber}</span> Score`;





//Quit Button Functionality - End Game
const quitButton = document.getElementById('quitButton');
quitButton.addEventListener('click', () => {

    const sumDiv = document.createElement('div');
    sumDiv.id = 'sumDiv';

    document.body.appendChild(sumDiv);

    const sumTitle = document.createElement('h1');
    sumTitle.id = 'sumTitle';

    sumDiv.appendChild(sumTitle);

    if (opponentScore > playerScore) {
        sumTitle.innerHTML = `Player Number ${playerNumber}, You Lose!`;
        gameMusic.pause();
        const loseSound = new Audio('./Sound/Final lose.wav');
        loseSound.play();
    } else if (opponentScore < playerScore) {
        sumTitle.innerHTML = `Player Number ${playerNumber}, You Win!`;
        gameMusic.pause();
        const winSound = new Audio('./Sound/Final win.wav');
        winSound.play();
    } else {
        sumTitle.innerHTML = `Thats A Draw!`;
        gameMusic.pause();
        const drawSound = new Audio('./Sound/Final draw.mp3');
        drawSound.play();
        drawSound.loop = true;

    }

    const sumPlayerScore = document.createElement('p');
    sumPlayerScore.id = 'sumPlayerScore';
    sumPlayerScore.innerHTML = `The Final Score Of This Game Is: <br> ${playerScore} : ${opponentScore}`;

    sumDiv.appendChild(sumPlayerScore);




    const playAgainButton = document.createElement('button');
    playAgainButton.id = 'playAgainButton';
    playAgainButton.textContent = 'Play Again';
    playAgainButton.onclick = window.location.reload.bind(window.location);

    sumDiv.appendChild(playAgainButton);


});




const backgroundMusic = new Audio('./Sound/BackgroundMusic.mp3');
backgroundMusic.volume = 0.5;
backgroundMusic.loop = true;


const gameMusic = new Audio('./Sound/GameMusic.mp3');
gameMusic.loop = true;






const welcomeScreen = document.createElement('div');
welcomeScreen.id = 'welcomeScreen';


document.body.appendChild(welcomeScreen);

const welcomeTitle = document.createElement('h1');
welcomeTitle.id = 'welcomeTitle';
welcomeTitle.textContent = 'Tic Tac Toe';


welcomeScreen.appendChild(welcomeTitle);




const welcomeText = document.createElement('p');
welcomeText.id = 'welcomeText';
welcomeText.textContent = `Welcome Player Number ${playerNumber}!`;


welcomeScreen.appendChild(welcomeText);


const chooseDiv = document.createElement('div');
chooseDiv.id = 'chooseDiv';


welcomeScreen.appendChild(chooseDiv);






const headTextDiv = document.createElement('div');
headTextDiv.id = 'headTextDiv';

welcomeScreen.appendChild(headTextDiv);

const textDiv1 = document.createElement('div');
textDiv1.id = 'textDiv1';
textDiv1.className = 'textDiv';

headTextDiv.appendChild(textDiv1);

const textDiv2 = document.createElement('div');
textDiv2.id = 'textDiv2';
textDiv2.className = 'textDiv';

headTextDiv.appendChild(textDiv2);

const textDiv3 = document.createElement('div');
textDiv3.id = 'textDiv3';
textDiv3.className = 'textDiv';

headTextDiv.appendChild(textDiv3);

















// Buttons X and O


// '>안녕하세요 >세안하요녕 세요녕';

const koreanText1 = ">안녕세요안";
const englishText1 = 'Please';
const koreanText2 = ">안녕세요 세";
const englishText2 = 'Choose';
const koreanText3 = ">안녕녕세요";
const englishText3 = 'Button';


function generateAnimatedText() {
    textDiv1.innerHTML = '';
    const length1 = koreanText1.length;

    let letters1 = [];
    for (let i = 0; i < length1; i++) {
        let letter1 = document.createElement('span');
        letter1.classList.add('letter');
        letter1.textContent = koreanText1[i];
        letters1.push(letter1);
    }


    letters1.forEach((letter, i) => {
        letter.style.animationDelay = `${i * 0.08}s`;
        textDiv1.appendChild(letter);


        setTimeout(() => {
            letter.textContent = englishText1[i];
        }, (i + 1) * 150);

    });


    textDiv2.innerHTML = '';
    const length2 = koreanText2.length;

    let letters2 = [];
    for (let i = 0; i < length2; i++) {
        let letter2 = document.createElement('span');
        letter2.classList.add('letter');
        letter2.textContent = koreanText2[i];
        letters2.push(letter2);
    }


    letters2.forEach((letter, i) => {
        letter.style.animationDelay = `${i * 0.08}s`;
        textDiv2.appendChild(letter);


        setTimeout(() => {
            letter.textContent = englishText2[i];
        }, (i + 1) * 150);

    });




    textDiv3.innerHTML = '';
    const length3 = koreanText3.length;

    let letters3 = [];
    for (let i = 0; i < length3; i++) {
        let letter3 = document.createElement('span');
        letter3.classList.add('letter');
        letter3.textContent = koreanText3[i];
        letters3.push(letter3);
    }


    letters3.forEach((letter, i) => {
        letter.style.animationDelay = `${i * 0.05}s`;
        textDiv3.appendChild(letter);


        setTimeout(() => {
            letter.textContent = englishText3[i];
        }, (i + 1) * 150);

    });



}




const aX = document.createElement('a');
aX.id = 'aX';
aX.href = '#';
aX.addEventListener('click', () => {
    Player = 'X';
    opponent = 'O';
    welcomeScreen.remove();
    backgroundMusic.pause();
    const xSound = new Audio('./Sound/x.mp3');
    xSound.play();
    setTimeout(() => gameMusic.play(), 800);
})

welcomeScreen.appendChild(aX);



const aO = document.createElement('a');
aO.id = 'aO';
aO.href = '#';
aO.addEventListener('click', () => {
    Player = 'O';
    opponent = 'X';
    welcomeScreen.remove();
    backgroundMusic.pause();
    const oSound = new Audio('./Sound/o.mp3');
    oSound.play();
    setTimeout(() => gameMusic.play(), 800);
})

welcomeScreen.appendChild(aO);



const xImage = document.createElement('img');
xImage.src = './images/x.jpg';
xImage.id = 'xImage';
xImage.className = 'buttonImage';


const oImage = document.createElement('img');
oImage.src = './images/o.jpg';
oImage.id = 'oImage';
oImage.className = 'buttonImage';



setTimeout(() => {
    xImage.classList.add('fade-in-up');
    oImage.classList.add('fade-in-up');

    aX.appendChild(xImage);
    aO.appendChild(oImage);

    setTimeout(() => {
        xImage.classList.add('show');
        oImage.classList.add('show');
    }, 100);
}, 1000);











//Main Game

const resetDivs = () => {
    innerDivs.forEach((div) => {
        div.innerHTML = '';
    });
}

const writeSound = new Audio('./Sound/Write.mp3');


//Rules for the opponent
function chooseRandomOpponentMove() {
    writeSound.currentTime = 0;
    writeSound.play();

    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const emptyDivs = Array.from(innerDivs).filter((div) => div.innerHTML === '');

    for (const pattern of winningPatterns) {
        const [a, b, c] = pattern;

        if (innerDivs[a].innerHTML === opponent && innerDivs[b].innerHTML === opponent) {
            if (innerDivs[c].innerHTML === '') {
                innerDivs[c].innerHTML = opponent;
                mainGameDiv.style.pointerEvents = 'auto';
                return;
            }
        } else if (innerDivs[a].innerHTML === opponent && innerDivs[c].innerHTML === opponent) {
            if (innerDivs[b].innerHTML === '') {
                innerDivs[b].innerHTML = opponent;
                mainGameDiv.style.pointerEvents = 'auto';
                return;
            }
        } else if (innerDivs[b].innerHTML === opponent && innerDivs[c].innerHTML === opponent) {
            if (innerDivs[a].innerHTML === '') {
                innerDivs[a].innerHTML = opponent;
                mainGameDiv.style.pointerEvents = 'auto';
                return;
            }
        }


        if (innerDivs[a].innerHTML === Player && innerDivs[b].innerHTML === Player) {
            if (innerDivs[c].innerHTML === '') {
                innerDivs[c].innerHTML = opponent;
                mainGameDiv.style.pointerEvents = 'auto';
                return;
            }
        } else if (innerDivs[a].innerHTML === Player && innerDivs[c].innerHTML === Player) {
            if (innerDivs[b].innerHTML === '') {
                innerDivs[b].innerHTML = opponent;
                mainGameDiv.style.pointerEvents = 'auto';
                return;
            }
        } else if (innerDivs[b].innerHTML === Player && innerDivs[c].innerHTML === Player) {
            if (innerDivs[a].innerHTML === '') {
                innerDivs[a].innerHTML = opponent;
                mainGameDiv.style.pointerEvents = 'auto';
                return;
            }
        }




    }

    if (emptyDivs.length > 0) {
        const randomIndex = Math.floor(Math.random() * emptyDivs.length);
        emptyDivs[randomIndex].innerHTML = opponent;
        mainGameDiv.style.pointerEvents = 'auto';
    }

}













//The Main Game Display
const mainGameDiv = document.getElementById('mainGame');

const innerDivs = mainGameDiv.querySelectorAll('div');

innerDivs.forEach((div) => {
    div.addEventListener('click', () => {
        if (div.innerHTML === '') {
            div.innerHTML = Player;
            checkWinner();
            if (div.innerHTML !== '') {
                mainGameDiv.style.pointerEvents = 'none';
                setTimeout(() => chooseRandomOpponentMove(), delay);
                setTimeout(() => checkWinner(), 1000);
                delay = 500;
            }
        }
        writeSound.play();
    });
});








//Checking for the winner
const checkWinner = () => {

    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const pattern of winningPatterns) {
        const [a, b, c] = pattern;
        if (
            innerDivs[a].innerHTML === Player &&
            innerDivs[b].innerHTML === Player &&
            innerDivs[c].innerHTML === Player
        ) {
            delay = 2000;

            setTimeout(() => {
                resultSound = new Audio('./Sound/Pass.wav');
                resultSound.play();

            }, 300);

            const winImage = document.createElement('img');
            winImage.id = 'winImage';
            winImage.src = './images/Win.gif';
            document.body.appendChild(winImage);
            resultText.innerHTML = 'You Win!';
            document.body.appendChild(resultText);




            setTimeout(() => {
                winImage.remove();
                resultText.remove();
                resetDivs();
                playerScore++;
                rightScorePlayer++;
                if (rightScorePlayer >= 10) {
                    rightScorePlayer = 0;
                    leftScorePlayer++;
                }

            }, 1000);

            setTimeout(() => {
                rightPlayerScore.innerHTML = `${rightScorePlayer}`;
                leftScorePlayerDiv.innerHTML = `${leftScorePlayer}`;
                const playerScoreSound = new Audio('./Sound/player score.wav');
                playerScoreSound.volume = 0.5;
                playerScoreSound.play();
            }, 1500);


        } else if (

            innerDivs[a].innerHTML === opponent &&
            innerDivs[b].innerHTML === opponent &&
            innerDivs[c].innerHTML === opponent

        ) {

            setTimeout(() => {
                resultSound = new Audio('./Sound/Lose.wav');
                resultSound.play();
            }, 300);

            const loseImage = document.createElement('img');
            loseImage.id = 'loseImage';
            loseImage.src = './images/Lose.gif';
            document.body.appendChild(loseImage);
            resultText.innerHTML = 'You Lose!';
            document.body.appendChild(resultText);
            resetDivs();

            setTimeout(() => {
                loseImage.remove();
                resultText.remove();
                opponentScore++;
                rightScoreOpponent++;
                if (rightScoreOpponent >= 10) {
                    rightScoreOpponent = 0;
                    leftScoreOpponent++;
                }
            }, 1000);

            setTimeout(() => {
                insideOpponentScore.innerHTML = `${rightScoreOpponent}`;
                leftScoreOpponentDiv.innerHTML = `${leftScoreOpponent}`;
                const opponentScoreSound = new Audio('./Sound/opponnent score.wav');
                opponentScoreSound.play();
            }, 1500);


        }
    }

    if (Array.from(innerDivs).every((div) => div.innerHTML !== '')) {
        delay = 2500;
        setTimeout(() => {

            setTimeout(() => {
                resultSound = new Audio('./Sound/Draw.wav');
                resultSound.volume = 0.3;
                resultSound.play();
            }, 300);

            const drawImage = document.createElement('img');
            drawImage.id = 'drawImage';
            drawImage.src = './images/Draw.png';
            document.body.appendChild(drawImage);
            resultText.innerHTML = 'Draw!';
            document.body.appendChild(resultText);
            resetDivs();

            setTimeout(() => {
                resultText.remove();
                drawImage.remove();
                delay = 500;
            }, 2000);
        }, 500);
    }

}









