function playGame(buttonClass){
    let buttonText = document.querySelector('.'+String(buttonClass));
    document.querySelector('.headTailsOutput').innerHTML = `You Chose: ${buttonText.innerText}`;
}
function submit(){
    document.querySelector('.submitButton_output').innerHTML = `Your name is: ${document.querySelector('.NameInput').value}`;
}
function inputText(){
    document.querySelector('.inputOutput').innerHTML =  document.querySelector('.inputText').value;
    console.log('tyoe');
}