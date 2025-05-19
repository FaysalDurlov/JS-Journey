const buttonElement = document.querySelector('.ButtonClassName');
const eventFunction = ()=>{
    console.log('Click')
}
buttonElement.addEventListener('click',eventFunction);
buttonElement.removeEventListener('click',eventFunction);
buttonElement.addEventListener('click',()=>{
    console.log('click2');
});