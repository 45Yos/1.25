const rangeNumber = document.getElementById('rangeNumber');
const range = document.getElementById('range');
const textArea = document.createElement('textarea');


rangeNumber.innerText = range.value;
range.addEventListener('input', () => {
    rangeNumber.innerText = range.value;
});

let rangeNumberClicked = false;
rangeNumber.addEventListener('click', () => {
    if (!rangeNumberClicked) {
        rangeNumberClicked = true;

        const input = document.createElement('input');
        input.type = 'text';
        input.style.width = '40px';
        input.style.height = '30px';
        input.style.fontSize = '1.4rem';
        input.style.fontWeight = '300';
        input.value = range.value;


        rangeNumber.innerHTML = '';
        rangeNumber.appendChild(input);

        input.focus();


        input.addEventListener('blur', () => {
            rangeNumber.innerText = input.value;
            range.value = input.value;


            rangeNumberClicked = false;
        });
    }
});


let finalPassword = '';
const generatePassword = () => {
    textArea.innerText = '';
    const length = range.value;
    const upperCase = document.getElementById('upperCase').checked;
    const lowerCase = document.getElementById('lowerCase').checked;
    const numbers = document.getElementById('numbers').checked;
    const keyboardSigns = document.getElementById('keyboardSigns').checked;
    const specialSigns = document.getElementById('specialSigns').checked;


    const upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const numbersLetters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const keyboardSignsLetters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '-', '[', ']', '{', '}', '|', '\\', ';', ':', '"', "'", '<', '>', ',', '.', '?', '/'];

    const specialSignsLetters = ['©', '®', '™', '§', '¶', '•', '°', '…', '†', '‡', '¥', '∞', '♥', '♦', '♣', '♠', '☀', '☁', '✿', '✈', '☠', '✧', '✩'];

    console.log(specialSignsLetters);




    const finalPasswordLetters = [];





    if (upperCase) {
        finalPasswordLetters.push(...upperCaseLetters);
    }
    if (lowerCase) {
        finalPasswordLetters.push(...lowerCaseLetters);
    }
    if (numbers) {
        finalPasswordLetters.push(...numbersLetters);
    }
    if (keyboardSigns) {
        finalPasswordLetters.push(...keyboardSignsLetters);
    }
    if (specialSigns) {
        finalPasswordLetters.push(...specialSignsLetters);
    }


    const oldValue = finalPassword;

    if (finalPasswordLetters.length > 0) {
        finalPassword = '';


        for (let i = 0; i < length; i++) {

            finalPassword += finalPasswordLetters[Math.floor(Math.random() * finalPasswordLetters.length)];
        }

        console.log(finalPassword);



        textArea.id = 'finalPassword';
        textArea.innerText = finalPassword;

        const contentBox = document.getElementsByClassName('content-box')[0];

        contentBox.appendChild(textArea);
    } else {
        finalPassword = oldValue;
        textArea.innerText = finalPassword;
    }
}





const generateButton = document.getElementById('generateButton');
generateButton.addEventListener('click', () => {
    textArea.innerHTML = '';
    generatePassword();
});





