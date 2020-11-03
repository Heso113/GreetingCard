//Variables from document
const backgroundColor = document.getElementById('backgroundColor');
const font = document.getElementById('font');
const fontColor = document.getElementById('fontColor');
const fontSize = document.getElementById('fontSize');
const message = document.getElementById('message');

const msgOutput = document.getElementById('messageOutput');
const card = document.getElementById('card');

//Buttons
const msgButton = document.getElementById('msgButton');
const bgcButton = document.getElementById('bgcButton');
const fontButton = document.getElementById('fontButton');
const fontSizeButton = document.getElementById('fontSizeButton');
const fontColorButton = document.getElementById('fontColorButton');

msgButton.addEventListener('click', setMessage);
bgcButton.addEventListener('click', setBackgroundColor);
fontButton.addEventListener('click', setFont);
fontSizeButton.addEventListener('click', setFontSize);
fontColorButton.addEventListener('click', setFontColor);


//button function
function setMessage() {
    const msg = message.value;
    msgOutput.innerText = msg;
}

function setBackgroundColor() {
    card.style.backgroundColor = backgroundColor.value;
}

function setFont() {
    msgOutput.style.fontFamily = font.value + ",arial";
}

function setFontSize() {
    let size = fontSize.value;
    msgOutput.style.fontSize = size + "px";
}

function setFontColor() {
    msgOutput.style.color = fontColor.value;
}