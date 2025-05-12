document.querySelector('.Results').innerHTML = localStorage.getItem('calculation');
let calculation = localStorage.getItem('calculation');
function updateCalculation(value){
    if(document.querySelector('.Results').innerHTML!='0'){
        calculation+=value;
    }else{
    calculation=value;
    }
    document.querySelector('.Results').innerHTML = calculation;
    localStorage.setItem('calculation',calculation);
}
function equal(){
    document.querySelector('.Results').innerHTML =  eval(calculation);
    localStorage.setItem('calculation',calculation);
}
function clear_SUM(){
    calculation = '0';
    localStorage.setItem('calculation',calculation);
    document.querySelector('.Results').innerHTML = localStorage.getItem('calculation')
}