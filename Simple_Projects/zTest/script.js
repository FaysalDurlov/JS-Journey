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