//12A running a FNC Twice
let Add = function(){
    console.log(2+3);
}
//Option_1  Loop                                 =========================================
console.log('Loop');
for(let i=0;i<2;i++){
    Add();
}

//Option_2  Function                              ========================================
console.log('Function'); 
[1,2].forEach(function(element){
    Add();
});

//Option_3  SetInterval                            ========================================
console.log('Set Interval');
let count = 0;
const IntervalId = setInterval(function(){
    Add();
    count++;
    if(count===2){
        clearInterval(IntervalId);
    }
},1000);


//Option_4  Recursive                               ======================================
console.log('Recursive');
function RecCall(n){
    if(n===0){
        return;
    }
    Add();
    RecCall(n-1);
}
RecCall(2);

//12B    ======================================================================================================
console.log('12B');
function runTwice(fun){
    fun();
    fun();
}
runTwice(Add);
runTwice(function(){console.log('12b')});


//12C_D   ======================================================================================================
let button = document.querySelector('.StartButton');
function ButtonAction(){
    if(button.classList.contains('afterStartButton')){
        button.classList.remove('afterStartButton');
        button.innerHTML='Start'
    }else{
        button.classList.add('afterStartButton');
        button.innerHTML = 'Finished!';
    }
}
function pressButton(){
    button.innerHTML = 'Loading...';
    setTimeout(ButtonAction,1000);
}
//12E_F   =======================================================================================================
let timeoutID;
function addToCart(){
    clearTimeout(timeoutID)
    let outputP = document.querySelector('.AddToCartOutput');
    outputP.innerHTML = 'Added'
    timeoutID = setTimeout(function(){
        outputP.innerHTML = '';
    },2000);
}

//12G_H_I     =====================================================================================================
let messagesNumber = 0;
setInterval(function(){
    if(document.title ==='App' && messagesNumber>0){
        document.title = `(${messagesNumber}) New messages`;
    }else{
        document.title = 'App';
    }
},1000);