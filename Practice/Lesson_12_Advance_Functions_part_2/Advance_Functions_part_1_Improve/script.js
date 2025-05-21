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
// function ButtonAction(){
//     if(button.classList.contains('afterStartButton')){
//         button.classList.remove('afterStartButton');
//         button.innerHTML='Start'
//     }else{
//         button.classList.add('afterStartButton');
//         button.innerHTML = 'Finished!';
//     }
// } 
// this FNC aleady in interval as arrow FNC




let button = document.querySelector('.StartButton');

button.addEventListener('click',pressButton);
function pressButton(){
    button.innerHTML = 'Loading...';
    setTimeout(()=>
        {
            if(button.classList.contains('afterStartButton')){
                button.classList.remove('afterStartButton');
                button.innerHTML='Start'
            }else{
                button.classList.add('afterStartButton');
                button.innerHTML = 'Finished!';
            }
        }
    ,1000);
}
//=======================================================these both event Listener doing the same thing====================
// button.addEventListener('click',()=>{
//     button.innerHTML = 'Loading...';
//     setTimeout(()=>
//         {
//             if(button.classList.contains('afterStartButton')){
//                 button.classList.remove('afterStartButton');
//                 button.innerHTML='Start'
//             }else{
//                 button.classList.add('afterStartButton');
//                 button.innerHTML = 'Finished!';
//             }
//         }
//     ,1000);
// });




//12E_F   =======================================================================================================
let timeoutID;
document.querySelector('.AddToCartButton').addEventListener('click',(event)=>{
    clearTimeout(timeoutID)
    let outputP = document.querySelector('.AddToCartOutput');
    outputP.innerHTML = 'Added'
    timeoutID = setTimeout(function(){
        outputP.innerHTML = '';
    },2000);
});

//=======================================================these both event Listener doing the same thing====================

// document.querySelector('.AddToCartButton').addEventListener('click',addToCart);
// let timeoutID;
// function addToCart(){
//     clearTimeout(timeoutID)
//     let outputP = document.querySelector('.AddToCartOutput');
//     outputP.innerHTML = 'Added'
//     timeoutID = setTimeout(function(){
//         outputP.innerHTML = '';
//     },2000);
// };





//12G_H_I     =====================================================================================================
let messagesNumber = 0;

document.querySelector('.AddMessageButton').addEventListener('click',()=>{
    messagesNumber+=1;
});
document.querySelector('.RemoveMessageButton').addEventListener('click',()=>{
    if(messagesNumber>0){
        messagesNumber-=1;
    }
});

setInterval(()=>{
    if(document.title ==='App' && messagesNumber>0){
        document.title = `(${messagesNumber}) New messages`;
    }else{
        document.title = 'App';
    }
},1000);