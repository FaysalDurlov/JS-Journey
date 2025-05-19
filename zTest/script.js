const arrayObject = {name:[],date:[]};
const arrayName = ['Faysal','Jamil','Rifat','Durlov'];
const arrayDate = ['1','2','3','4'];

for(let i=0;i<arrayName.length;i++){
    arrayObject.name.push(arrayName[i]);
    arrayObject.date.push(arrayDate[i]);
}

let a = JSON.stringify(arrayObject)
console.log(a);
console.log(JSON.parse(a));
console.log(localStorage.getItem('a'));

console.log('Test');
let variabl1 = 0;
let variabl2 = false;
console.log(variabl1===variabl2);

let objectA = {}
let objectB = {name:"hanzo"}
console.log(objectB)
objectA["[object Object"] = {name: "hango"}
console.log(objectA["[object Object"]);