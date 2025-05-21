// 12_j
let multiply = (a,b)=>{
    return a*b;
}
console.log(multiply(2,3));
console.log(multiply(7,10));

//12_k
let multiplyOneLine = (a,b)=> a*b;
console.log(multiplyOneLine(2,3));

//12_i
let NumberArrayFor12_i = [0,-1,1,-2,2,-3,3,-10,1,9,-8,-0.5,0.5,-0.00001,0.000001,-0.00001];
const countPositive = (nums)=>{
    let count = 0;
    NumberArrayFor12_i.forEach((value)=>{
        if(value>0){
            count+=1;
        }
    });
    return count;
}
console.log(countPositive(NumberArrayFor12_i));
//12_i_My problems
// method_1_for Each
let CopyArrayForMthod_1 = []
NumberArrayFor12_i.forEach((value)=>{
    if(value>0){
        CopyArrayForMthod_1.push(value)
    }
});
console.log(CopyArrayForMthod_1);
//Method_2 Filter
let CopyArrayForMthod_2=  NumberArrayFor12_i.filter((value)=>{
    if (value>0){
        return true;
    }else{
        false;
    }
});
console.log(CopyArrayForMthod_2);
//Method_3 Map
let CopyArrayForMthod_3 = NumberArrayFor12_i.map((value)=>{
    if(value>0){
        return value;
    }else{
        return 0;
    }
});
console.log(CopyArrayForMthod_3);


//12_M
let NumberArrayFor12_m = [1,2,3,4,5,6,7];
const addNum = (array,num)=>{
    let CopyArrayForMapOutput= array.map((value)=> value+num);
    return CopyArrayForMapOutput;
};
console.log(addNum(NumberArrayFor12_m,2));
console.log(addNum([1,2,3],2));
console.log(addNum([-2,-1,0,99],2));


//12_N_O
let FoodArrayFor12_n = ['egg','apple','egg','egg','ham'];
let removeEgg = (foodArray)=>{
    let CopyArrayForFilterOutput12_n = foodArray.filter((value)=>{
        if(value==='egg'){
            return false;
        }else{
            return true
        }
    });
    return CopyArrayForFilterOutput12_n;
};
let UpdateRemoveEgg = (foodArray)=>{
    let count = 0;
    let CopyArrayForFilterOutput12_O = foodArray.filter((value)=>{
        if(value==='egg'&& count<2){
            count+=1;
            return false;
        }else{
            return true;
        }
    });
    return CopyArrayForFilterOutput12_O;
};
console.log(removeEgg(FoodArrayFor12_n));
console.log(UpdateRemoveEgg(FoodArrayFor12_n));