let words = ['hello','word','search','godd']
let foods = ['egg','apple','egg','egg','ham']
function FindIndex(word='search',array=words){
    let flag = true;
    for(let i=0;i<=array.length;i++){
        if(array[i]===word){
            console.log(i);
            flag = false;
            break;
        }
    }
    if(flag){
        console.log(-1);
    }
} 
function removeEgg(itemToRemove,foodsList){
    let returnArray = []
    for(let i=0;i<foodsList.length;i++){
        if(foodsList[i]===itemToRemove){
            continue;
        }
        returnArray.push(foodsList[i]);
    }
    console.log(returnArray);
}
function removeEgg2(itemToRemove,foodsList){
    let count = 2;
    let returnArray = []
    for(let i=0;i<foodsList.length;i++){
        if(foodsList[i]===itemToRemove && count!=0){
            count-=1;
            continue;
        }
        returnArray.push(foodsList[i]);
    }
    console.log(returnArray);
}
function removeEggLast2(itemToRemove,foodsList){
    let count = 2;
    let returnArray = []
    for(let i=foodsList.length-1;i>=0;i--){
        if(foodsList[i]===itemToRemove && count!=0){
            count-=1;
            continue;
        }
        returnArray.push(foodsList[i]);
    }
    console.log(returnArray.reverse());
}
function FizzBuzz(){
    for(let i=1;i<=20;i++){
        if(i%3===0 && i%5===0){
            console.log('FizzBuzz');
        }else if(i%3===0){
            console.log('Fizz');
        }else if(i%5===0){
            console.log('Buzz');
        }
    }
}






FindIndex();
removeEgg('egg',foods);
removeEgg2('egg',foods);
removeEggLast2('egg',foods);
FizzBuzz();