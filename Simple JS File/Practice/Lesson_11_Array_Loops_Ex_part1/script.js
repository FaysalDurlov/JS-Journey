const array = [1,2,3,4,5];
array[array.length-1] = 99;
console.log(`Main Array After Adding 99 = ${array}`);

function getLastValue(array){
    return array[array.length-1];
}
function arraySwapFstLst(array){
    let temp = array[0];
    array[0] = array[array.length-1];
    array[array.length-1] = temp;
    return array;
}
function ForEvencountTo(value = 0){
    for (let i=0;i<=value;i++){
        if(i%2 ==0){
            console.log(i);
        }
    }
}
function ForReverseCount(value =0){
    for (let i=value;i>=0;i--){
        console.log(i);
    }
}
function whileEvenCountTo(value = 0){
    let i = 0;
    while (i<=value){
        if(i%2==0){
            console.log(i);
        }
        i++;
    }
}
function whileReverseCountTo(value = 0){
    let i = value;
    while (i>=0){
        console.log(i);
        i--;
    }
}
function valueincrease(array,value = 1){
    for(let i=0;i<array.length;i++){
        array[i] = array[i]+value;
    }
    return array;
}
function LeftaddArray(array1,array2){
    let returnArray = []
    let max = array1.length;
    let min = array2.length;
    if (max<min){
        max = max+min;
        min = max-min;
        max = max-min;
        let temp = array1;
        array1 = array2;
        array2 = temp;
    }
    for(let i=0;i<min;i++){
        returnArray.push(array1[i]+array2[i])
    }
    for(let i=min;i<max;i++){
        returnArray.push(array1[i]);
    }
    return returnArray;
}
function rightaddArray(array1,array2){
    let returnArray = []
    let max = array1.length;
    let min = array2.length;
    if (max<min){
        max = max+min;
        min = max-min;
        max = max-min;
        let temp = array1;
        array1 = array2;
        array2 = temp;
    }
    point_B = 0
    for (let i = 0;i<max;i++){
        if(i>=max-min){
            returnArray.push(array1[i]+array2[point_B]);
            point_B+=1;
        }else{
            returnArray.push(array1[i]);
        }
    }
    return returnArray;
}
function maxMin(array){
    let max = 0;
    let min = 0;
    if (array.length ===0){
        max =null;
        min = null;
    }else{
        max = array[0];
        min = array[0];
        for(let i=1;i<array.length;i++){
            if(max<array[i]){
                max = array[i];
            }
            if(min>array[i]){
                min =array[i];
            }
        }
    }
    console.log(max);
    console.log(min);
}
function countWords(array){
    let returnObject = {};
    for (let i=0;i<array.length;i++){
        let word = array[i];
        if(returnObject[word] === undefined){
            returnObject[word] = 1;
        }else{
            returnObject[word] += 1;
        }
    }
    console.log(returnObject);
}

let lastValue = getLastValue(array);
console.log(`Last Value of the Array = ${lastValue}`);
let swapedArray = arraySwapFstLst(array);
console.log(`After Swaping array we got = ${swapedArray}`);
console.log('For Loops');
ForEvencountTo(10);
ForReverseCount(5);
console.log('While Loop');
whileEvenCountTo(10);
whileReverseCountTo(5);
console.log(array);
let increasedArray = valueincrease(array);
console.log(increasedArray);
increasedArray = valueincrease(array,2);
console.log(increasedArray);

let array_1 = [1,2,3,4,5,6,7,8,10];
let array_2 = [10,20,30,40];
let result = LeftaddArray(array_1,array_2);
console.log(result);

let result_2 = rightaddArray(array_1,array_2);
console.log(result_2);
console.log(array);
maxMin(array);

let words = ["Orange","apple","grape","apple","grape","Banana"];
countWords(words);