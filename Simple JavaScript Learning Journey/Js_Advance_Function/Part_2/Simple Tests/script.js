const buttonElement = document.querySelector('.ButtonClassName');
const eventFunction = ()=>{
    console.log('Click')
}
buttonElement.addEventListener('click',eventFunction);
buttonElement.removeEventListener('click',eventFunction);
buttonElement.addEventListener('click',()=>{
    console.log('click2');
});

console.log([1,-3,5].filter((value,index)=>{
    // if(value<0){
    //     return false;
    // }else{
    //     return true;
    // }
    // return value>=0 ? true : false;
    return value>=0;
}));
console.log([1,2,3].map((value,index)=>{
    return value*2;
}));