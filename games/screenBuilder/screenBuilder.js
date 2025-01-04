
//Import Css
const css = document.createElement('link');
css.rel = 'stylesheet';
css.href = './screenBuilder.css';
window.onload = () => document.head.appendChild(css);


//Head Div
const headDiv = document.createElement('div');
headDiv.id = 'headDiv';

//Append Head Div
document.body.appendChild(headDiv);


//Right Div
const rightDiv = document.createElement('div');
rightDiv.id = 'rightDiv';



//Left Div
const leftDiv = document.createElement('div');
leftDiv.id = 'leftDiv';




//Append Right And Left Div
headDiv.appendChild(rightDiv);
headDiv.appendChild(leftDiv);




//h1 Of Right Div
const h1 = document.createElement('h1');
h1.innerText = 'בונה מסכים';

//Append h1 To Right Div
rightDiv.appendChild(h1);



//p Explanation Of Program
const pExplain = document.createElement('p');
pExplain.innerText = 'זוהי תוכנה אשר תוכלו לייצר בה אלמנט על ידי \n!הקלדת הנתונים בלבד, בהצלחה'
pExplain.style.textAlign = 'right';
pExplain.style.color = 'white';
pExplain.style.marginRight = '10%';
pExplain.style.fontFamily = 'Arimo, sans-serif';

//Append p Explanation To Right Div
rightDiv.appendChild(pExplain);



//Inputs Div
const inputsDiv = document.createElement('div');
inputsDiv.id = 'inputsDiv';
inputsDiv.style.width = '80%';
inputsDiv.style.margin = '0 auto';
inputsDiv.style.textAlign = 'right';
inputsDiv.style.marginTop = '5%';



//Append Inputs Div
rightDiv.appendChild(inputsDiv);




//Input Of Element Type
const elementType = document.createElement('select');
elementType.id = 'elementType';
elementType.style.width = '102%';
elementType.style.height = '30px';
elementType.style.marginBottom = '10px';
elementType.style.textAlign = 'center';




//Options Of elementType
const typeOption0 = document.createElement('option');
typeOption0.value = 'none';
typeOption0.innerText = 'בחר אלמנט';
const typeOption1 = document.createElement('option');
typeOption1.value = 'div';
typeOption1.innerText = 'div';
const typeOption2 = document.createElement('option');
typeOption2.value = 'span';
typeOption2.innerText = 'span';
const typeOption3 = document.createElement('option');
typeOption3.value = 'p';
typeOption3.innerText = 'p';
const typeOption4 = document.createElement('option');
typeOption4.value = 'h1';
typeOption4.innerText = 'h1';
const typeOption5 = document.createElement('option');
typeOption5.value = 'h2';
typeOption5.innerText = 'h2';
const typeOption6 = document.createElement('option');
typeOption6.value = 'h3';
typeOption6.innerText = 'h3';
const typeOption7 = document.createElement('option');
typeOption7.value = 'h4';
typeOption7.innerText = 'h4';
const typeOption8 = document.createElement('option');
typeOption8.value = 'h5';
typeOption8.innerText = 'h5';



//Append Options Of elementType
elementType.appendChild(typeOption0);
elementType.appendChild(typeOption1);
elementType.appendChild(typeOption2);
elementType.appendChild(typeOption3);
elementType.appendChild(typeOption4);
elementType.appendChild(typeOption5);
elementType.appendChild(typeOption6);
elementType.appendChild(typeOption7);
elementType.appendChild(typeOption8);








//Label Of Element Type
const elementTypeLabel = document.createElement('label');
elementTypeLabel.for = 'elementType';
elementTypeLabel.innerText = 'סוג האלמנט';
elementTypeLabel.className = 'labels';




//Append Input And Label Of Element Type
inputsDiv.appendChild(elementTypeLabel);
const br1 = document.createElement('br');
inputsDiv.appendChild(br1);
inputsDiv.appendChild(elementType);
const br8 = document.createElement('br');
inputsDiv.appendChild(br8);




//Input Of Element Width
const elementWidth = document.createElement('input');
elementWidth.id = 'elementWidth';
elementWidth.type = 'text';
elementWidth.className = 'inputs';


//Label Of Element Width
const elementWidthLabel = document.createElement('label');
elementWidthLabel.for = 'elementWidth';
elementWidthLabel.innerText = 'רוחב האלמנט';
elementWidthLabel.className = 'labels';


//Append Input And Label Of Element Width
inputsDiv.appendChild(elementWidthLabel);
const br2 = document.createElement('br');
inputsDiv.appendChild(br2);
inputsDiv.appendChild(elementWidth);


//Input Of Element Height
const elementHeight = document.createElement('input');
elementHeight.id = 'elementHeight';
elementHeight.type = 'text';
elementHeight.className = 'inputs';


//Label Of Element Height
const elementHeightLabel = document.createElement('label');
elementHeightLabel.for = 'elementHeight';
elementHeightLabel.innerText = 'גובה האלמנט';
elementHeightLabel.className = 'labels';


//Append Input And Label Of Element Height
inputsDiv.appendChild(elementHeightLabel);
const br3 = document.createElement('br');
inputsDiv.appendChild(br3);
inputsDiv.appendChild(elementHeight);


//Input Of Element Text
const elementText = document.createElement('textarea');
elementText.type = 'text';
elementText.style.height = '100px';
elementText.style.width = '100%';
elementText.style.marginBottom = '3%';
elementText.style.textAlign = 'right';
elementText.style.fontSize = '20px';


//Label Of Element Text
const elementTextLabel = document.createElement('label');
elementTextLabel.for = 'elementText';
elementTextLabel.innerText = 'תוכן האלמנט';
elementTextLabel.className = 'labels';


//Append Input And Label Of Element Text
inputsDiv.appendChild(elementTextLabel);
const br4 = document.createElement('br');
inputsDiv.appendChild(br4);
inputsDiv.appendChild(elementText);


//Color Of The Text
const textColor = document.createElement('input');
textColor.type = 'color';
textColor.className = 'inputs';


//Label Of Color Of The Text
const textColorLabel = document.createElement('label');
textColorLabel.for = 'textColor';
textColorLabel.innerText = 'צבע הטקסט';
textColorLabel.className = 'labels';


//Append Input And Label Of Color Of The Text
inputsDiv.appendChild(textColorLabel);
const br5 = document.createElement('br');
inputsDiv.appendChild(br5);
inputsDiv.appendChild(textColor);



//Font Size Of The Text
const fontSize = document.createElement('input');
fontSize.type = 'number';
fontSize.className = 'inputs';
fontSize.min = '1';
fontSize.max = '1000';
fontSize.value = '20px';


//Label Of Font Size Of The Text
const fontSizeLabel = document.createElement('label');
fontSizeLabel.for = 'fontSize';
fontSizeLabel.innerText = 'גודל הכיתוב';
fontSizeLabel.className = 'labels';


//Append Input And Label Of Font Size Of The Text
inputsDiv.appendChild(fontSizeLabel);
const br6 = document.createElement('br');
inputsDiv.appendChild(br6);
inputsDiv.appendChild(fontSize);


//Font Family Of The Text
const fontFamily = document.createElement('select');
fontFamily.style.height = '30px';
fontFamily.style.width = '102%';
fontFamily.style.marginBottom = '5%';
const option1 = document.createElement('option');
option1.value = 'Arial';
option1.innerText = 'Arial';
const option2 = document.createElement('option');
option2.value = 'Times New Roman';
option2.innerText = 'Times New Roman';
const option3 = document.createElement('option');
option3.value = 'Verdana';
option3.innerText = 'Verdana';
const option4 = document.createElement('option');
option4.value = 'Courier New';
option4.innerText = 'Courier New';
const option5 = document.createElement('option');
option5.value = 'Georgia';
option5.innerText = 'Georgia';
const option6 = document.createElement('option');
option6.value = 'Trebuchet MS';
option6.innerText = 'Trebuchet MS';
const option7 = document.createElement('option');
option7.value = 'Comic Sans MS';
option7.innerText = 'Comic Sans MS';
const option8 = document.createElement('option');
option8.value = 'Impact';
option8.innerText = 'Impact';
const option9 = document.createElement('option');
option9.value = 'Lucida Sans Unicode';
option9.innerText = 'Lucida Sans Unicode';
const option10 = document.createElement('option');
option10.value = 'Arimo, sans-serif';
option10.innerText = 'Arimo, sans-serif';


if (fontFamily.value === 'Arimo, sans-serif') {
    option10.selected = true;
} else if (fontFamily.value === 'Arial') {
    option1.selected = true;
} else if (fontFamily.value === 'Times New Roman') {
    option2.selected = true;
} else if (fontFamily.value === 'Verdana') {
    option3.selected = true;
} else if (fontFamily.value === 'Courier New') {
    option4.selected = true;
} else if (fontFamily.value === 'Georgia') {
    option5.selected = true;
} else if (fontFamily.value === 'Trebuchet MS') {
    option6.selected = true;
} else if (fontFamily.value === 'Comic Sans MS') {
    option7.selected = true;
} else if (fontFamily.value === 'Impact') {
    option8.selected = true;
} else if (fontFamily.value === 'Lucida Sans Unicode') {
    option9.selected = true;
}


fontFamily.appendChild(option1);
fontFamily.appendChild(option2);
fontFamily.appendChild(option3);
fontFamily.appendChild(option4);
fontFamily.appendChild(option5);
fontFamily.appendChild(option6);
fontFamily.appendChild(option7);
fontFamily.appendChild(option8);
fontFamily.appendChild(option9);
fontFamily.appendChild(option10);






//Label Of Font Family Of The Text
const fontFamilyLabel = document.createElement('label');
fontFamilyLabel.for = 'fontFamily';
fontFamilyLabel.innerText = 'סגנון גופן';
fontFamilyLabel.className = 'labels';


//Append Input And Label Of Font Family Of The Text
inputsDiv.appendChild(fontFamilyLabel);
const br7 = document.createElement('br');
inputsDiv.appendChild(br7);
inputsDiv.appendChild(fontFamily);
const br9 = document.createElement('br');
inputsDiv.appendChild(br9);


//Embed Label
const embedLabel = document.createElement('label');
embedLabel.for = 'embed';
embedLabel.innerText = 'קוד האלמנט';
embedLabel.className = 'labels';


//Embed Code For User
const embedCode = document.createElement('textarea');
embedCode.style.width = '100%';
embedCode.style.height = '80px';
embedCode.innerHTML = '';
embedCode.readOnly = true;


//Append Embed Code For User
inputsDiv.appendChild(embedLabel);
const br11 = document.createElement('br');
inputsDiv.appendChild(br11);
inputsDiv.appendChild(embedCode);
const br10 = document.createElement('br');
inputsDiv.appendChild(br10);


//Inside Left Div Frame
const frameLeftDiv = document.createElement('div');
frameLeftDiv.style.display = 'flex';
frameLeftDiv.style.justifyContent = 'center';
frameLeftDiv.style.height = '95%';
frameLeftDiv.style.width = '95%';
frameLeftDiv.style.border = '1px solid black';
frameLeftDiv.style.boxShadow = '5px 5px 20px 2px black';
frameLeftDiv.className = 'grid-background';



//Append Left Div Frame
leftDiv.appendChild(frameLeftDiv);





let createdElement = null;

const buttonCreateElement = () => {


    if (elementType.value === 'none') {
        alert('בחר אלמנט');
    } else {

        createdElement = document.createElement(`${elementType.value}`);
        createdElement.style.width = `${elementWidth.value}px`;
        createdElement.style.height = `${elementHeight.value}px`;
        createdElement.innerText = `${elementText.value}`;
        createdElement.style.color = `${textColor.value}`;
        createdElement.style.fontSize = `${fontSize.value}px`;
        createdElement.style.fontFamily = `${fontFamily.value}`;
        createdElement.style.backgroundColor = '#ea820b45';
        createdElement.style.border = '1px solid black';
        createdElement.style.position = 'absolute';
        createdElement.style.marginTop = '10%'




        if (frameLeftDiv.children.length === 0) {
            frameLeftDiv.appendChild(createdElement);
            embedCode.value = `${createdElement.outerHTML}`
        } else {

            const existingWarningAlert = document.getElementById('warningAlert');
            if (existingWarningAlert) {
                frameLeftDiv.removeChild(existingWarningAlert);
            }

            const warningAlert = document.createElement('p');
            warningAlert.id = 'warningAlert';
            warningAlert.innerText = 'יש אלמנט קיים על הדף, נא למחוק קודם את הדף';
            warningAlert.style.color = 'red';
            warningAlert.style.fontSize = '40px';

            frameLeftDiv.appendChild(warningAlert);


        }
    }





}



//Save Function
const saveFunction = () => {
    localStorage.setItem('userElement', frameLeftDiv.innerHTML);
}









//Submit Button
const submitButton = document.createElement('button');
submitButton.innerText = 'צור אלמנט';
submitButton.className = 'submitBtn';
submitButton.id = 'submitBtn'
submitButton.style.width = '45%';
submitButton.style.marginLeft = '5%';
submitButton.onclick = buttonCreateElement;



//Save Button
const saveButton = document.createElement('button');
saveButton.innerText = 'שמור';
saveButton.className = 'submitBtn';
saveButton.style.width = '45%';
saveButton.style.backgroundColor = '#7f003d';
saveButton.onclick = saveFunction;




//Reset Function
const resetFunction = () => {
    const allElements = frameLeftDiv.querySelectorAll('*');
    allElements.forEach(element => {
        element.remove();
    });
}



//Reset Butt
const resetButton = document.createElement('button');
resetButton.innerText = 'מחק הכל';
resetButton.className = 'submitBtn';
resetButton.style.width = '45%';
resetButton.style.backgroundColor = '#de2828';
resetButton.onclick = resetFunction;



//Load Function
const loadFunction = () => {
    const userElement = localStorage.getItem('userElement');
    if (userElement) {
        frameLeftDiv.innerHTML = userElement;
    }
}


//Load Button
const loadButton = document.createElement('button');
loadButton.innerText = 'טען';
loadButton.className = 'submitBtn';
loadButton.style.width = '45%';
loadButton.style.marginRight = '5%';
loadButton.style.backgroundColor = '#060077';
loadButton.style.border = '1px solid white';
loadButton.onclick = loadFunction;



//Refresh Function
const refreshFunction = () => {
    window.location.reload();
}



//Refresh Button
const refreshButton = document.createElement('button');
refreshButton.innerText = 'רענן את הדף';
refreshButton.className = 'submitBtn';
refreshButton.style.width = '95%';
refreshButton.style.height = '38px';
refreshButton.style.fontFamily = 'arimo, sans-serif';
refreshButton.style.backgroundColor = '#ce5311';
refreshButton.style.border = '2px dashed white';
refreshButton.onclick = refreshFunction;



//Append Submit Button
inputsDiv.appendChild(saveButton);
inputsDiv.appendChild(submitButton);
inputsDiv.appendChild(loadButton);
inputsDiv.appendChild(resetButton);
inputsDiv.appendChild(refreshButton);








