
let backgroundMusic = new Audio('./Sound/BackGroundMusic.mp3');

if (backgroundMusic) {
    backgroundMusic.play();
    backgroundMusic.volume = 0.2;
    backgroundMusic.loop = true;
}






//Create Main Div
const mainDiv = document.createElement('div');
mainDiv.id = 'mainDiv';



document.body.appendChild(mainDiv);



//Creating Start Game Page
const startGamePage = document.createElement('div');
startGamePage.id = 'startGamePage';
startGamePage.style.width = '80%';
startGamePage.style.height = '80vh';
startGamePage.style.backgroundColor = 'linear-gradient(135deg, #3a1c71, #131648, #ffaf7b)';
startGamePage.style.position = 'absolute';
startGamePage.style.display = 'flex';
startGamePage.style.justifyContent = 'center';
startGamePage.style.alignItems = 'center';
startGamePage.style.flexDirection = 'column';
mainDiv.appendChild(startGamePage);




//Creating Start Game Button Function
const startGame = () => {
    const gameStartSound = new Audio('./Sound/StartGame.mp3').play();
    startGamePage.style.display = 'none';
    mainDiv.appendChild(gameContainer);
    mainDiv.style.border = '0';
    mainDiv.style.boxShadow = 'none';
}




//Creating Game Start Animated Title
const gameTitle = document.createElement('img');
gameTitle.id = 'gameTitle';
gameTitle.src = './images/MemoryTitleGif.gif';



//Creating Creator Credits
const creatorCredits = document.createElement('h2');
creatorCredits.id = 'creatorCredits';
creatorCredits.textContent = 'By Yossi Tsabari';
creatorCredits.style.color = 'white';
creatorCredits.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';








//Creating Start Game Button
const startGameButton = document.createElement('button');
startGameButton.id = 'startGameButton';
startGameButton.textContent = 'Start Game';
startGameButton.addEventListener('click', startGame);


startGamePage.appendChild(startGameButton);
startGamePage.appendChild(gameTitle);
startGamePage.appendChild(creatorCredits);

//Animating Game Title
const animateTitle = () => {

    const style = document.createElement('style');
    style.textContent = `
    @keyframes pulseDance {
        0% {
            transform: scale(1) translateX(0);
        }
        25% {
            transform: scale(1.2) translateX(10px);
        }
        50% {
            transform: scale(1) translateX(-10px);
        }
        75% {
            transform: scale(0.8) translateX(10px);
        }
        100% {
            transform: scale(1) translateX(0);
        }
    }
    `;
    document.head.appendChild(style);



}



const gameContainer = document.createElement('div');
gameContainer.id = 'gameContainer';










const cards = [
    './Cards/1.png', './Cards/2.png', './Cards/3.png', './Cards/4.png', './Cards/5.png', './Cards/6.png', './Cards/7.png', './Cards/8.png',
    './Cards/1.png', './Cards/2.png', './Cards/3.png', './Cards/4.png', './Cards/5.png', './Cards/6.png', './Cards/7.png', './Cards/8.png',

];

let flippedCards = [];
let matchedCards = 0;
let gameBoard = [];

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

const createCard = (value, index) => {
    return {
        id: index,
        value: value,
        flipped: false,
        matched: false,
    };
};

const initializeGame = () => {
    shuffle(cards);
    gameBoard = cards.map((card, index) => createCard(card, index));
    renderBoard();
};

const renderBoard = () => {
    const gameContainer = document.getElementById('gameContainer');
    gameContainer.innerHTML = ''; // נקה את הלוח לפני יצירה מחדש

    gameBoard.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';

        // הוספת אירוע לחיצה
        cardElement.addEventListener('click', () => flipCard(index));
        gameContainer.appendChild(cardElement);



        if (card.flipped || card.matched) {
            cardElement.style.backgroundImage = `url(${card.value})`;
            cardElement.style.backgroundSize = 'cover';
            cardElement.style.backgroundRepeat = 'no-repeat';
        } else {
            cardElement.style.backgroundImage = 'url(./images/BackCard.png)'; // תמונת קלף סגור
            cardElement.style.backgroundSize = 'cover';
            cardElement.style.backgroundRepeat = 'no-repeat';
        }



        // הוספת אירוע לחיצה
        cardElement.addEventListener('click', () => flipCard(index));
        gameContainer.appendChild(cardElement);
    });
};

const flipCard = (index) => {
    const card = gameBoard[index];

    if (card.flipped || card.matched) {
        return; // אם הקלף כבר הפוך או תואם, לא נעשה כלום
    }

    card.flipped = true;
    flippedCards.push(card);

    renderBoard();

    if (flippedCards.length === 2) {
        checkMatch();
    }
};

const checkMatch = () => {
    const [card1, card2] = flippedCards;

    if (card1.value === card2.value) {
        card1.matched = true;
        card2.matched = true;
        matchedCards++;

        if (matchedCards === gameBoard.length / 2) {
            const winMessage = document.createElement('div');
            winMessage.style.backgroundImage = 'url(./images/congrats.gif)';
            winMessage.style.backgroundSize = 'cover';
            winMessage.style.backgroundRepeat = 'no-repeat';
            winMessage.style.backgroundPosition = 'center';
            winMessage.style.width = '80%';
            winMessage.style.height = '80vh';
            winMessage.style.position = 'absolute';
            winMessage.style.top = '50%';
            winMessage.style.left = '50%';
            winMessage.style.transformOrigin = 'center';
            winMessage.style.transform = 'translate(-50%, -50%)';
            winMessage.style.border = '20px solid white';

            document.body.appendChild(winMessage);
        }
    } else {
        setTimeout(() => {
            card1.flipped = false;
            card2.flipped = false;
            renderBoard();
        }, 1000);
    }

    flippedCards = [];
};





mainDiv.appendChild(gameContainer);




// התחלת המשחק
initializeGame();
