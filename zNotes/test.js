let array = [1,2,3,4,5].map((numebers)=>{    // here we created a arrow funtion inside map method and given that directly and its have no name but map an use it and can apply on all the element
    return numebers*10;
})
console.log(array); // output:  [ 10, 20, 30, 40, 50 ]


let array_2 = [1,2,3,4,5].map(MultiplyBy_10);
function MultiplyBy_10(numbers){    // here we created a separet function named(MultiplyBy_10) and given that funtion name to map method to use it and can apply on all the element
    return numbers*10;
}
console.log(array_2); // output:  [ 10, 20, 30, 40, 50 ]