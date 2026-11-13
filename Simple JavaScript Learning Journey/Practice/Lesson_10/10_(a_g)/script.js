function text(){
    let ClassName = document.querySelector('.js_button').classList.contains('TextButton');
    console.log(ClassName);
}
function toggle(buttonClass,other1,other2){
    let button = document.querySelector('.'+buttonClass)
    let button2 = document.querySelector('.'+other1);
    let button3 = document.querySelector('.'+other2);
    if (button.classList.contains('isToggled')){
        button.classList.remove('isToggled');
    }else{
        button2.classList.remove('isToggled');
        button3.classList.remove('isToggled');
        button.classList.add('isToggled');
    }
}