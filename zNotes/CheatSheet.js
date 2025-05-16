let variable = 1 < 0.5 ? 'heads' : 'tails';
//                        TRUE      False
// if else shorthand


const NONjsonObject = {
    name: 'Toyota',
    color: 'Red',
    fun: function method1(){              //Using JavaScript Object Syntax
        console.log('this is object');
    },
    rating: {
        stars: 5,
        count: 87
    }
}
const jsonObject = {
    "name": "Toyota",    //using JSON Syntax
    "color": "Red",      //no methods can be here in Json and it can be read by other languages like (c,c++,Java, etc)
    "rating": {          //Use Json so that my data can be read in 2 different languages or may be more
        "stars": 5,      // use json to store data in file or database so later other languages can read it from there
        "count": 87      //
    }
}

object = {
    name: 'shirt', //property
    price: 799,
    method: function func(){     //methods 2 ways of writing both works same
        console.log('method_1');
    },
    method2(){
        console.log('method2')
    }
}

//Read from Object
ObjectName.notExitssProperty ////this will show undefine.
NewPropertyName in ObjectName  /// this will show false if NewPropertyName is not in the object
ObjectName.keyName
ObjectName['keyName'] // if its exits it will retrun the value or else it will show Undefined
ObjectName[keyName]   // in this way we can get the key value of a property from a object

const { name, price } = object;
/*shortcut of   --> const name = object.name
                    const price = object.price
this is called destructuring
takes name and price property from object and puts the value in name variable
*/


//Write or Modify in Obejct
ObjectName.NewPropertyName = 'and its Value';
// if NewPropertyName is not in the object then this line will add it with the value
delete object.propertyName;
// this will remove the property from the  object.

protertyName_1 = 23;
propertyName_2 = 24;
let object = {protertyName_1, // shortHand of  propertyName_1:  propertyName_1
    propertyName_2};          // only if variable and key names are same.






JSON.stringify(NONjsonObject);
// this just converted the non json object to json object string format

JSON.parse(converted_non_Json_object);
// this can convert the non Json object-string to json object not string

localStorage.setItem('key_name', 'valueInString');
// set value in Local storage using a key

localStorage.getItem('key_name');
//read value from that key from the local storage

localStorage.removeItem('key_name');
// remove the object from under that key from local storage



document.querySelector('htmlTag')
// with this we can get any html tag we want in Js like button,div,p etc. 
//but if same tag 2 or more time we need class. same goes for ID
document.querySelector('.className')
// with these we can't manupulate the conent but we can just get them (like read only) 
// same goes for .innerText


document.querySelector('htmlTag').innerHTML
// with this we can manupulate the content of "htmlTag"


document.body.innerHTML
// this innerHTML gives the html tag that is under body. if I put div then it returns html inside div
document.body.innerText
// retruns the text inside of the tag. why use this innerhtml return spaces but innerTxt doesn't

document.querySelector('input').value 
// returns a input. We can't use innerHTML bcz input does't have closing tag


// can use in css after any action/event design 
htmlTag.classList.add('className')
// with this we can add a new class in that htmlTag atribute

htmlTag.classList.remove('className')
// with this we can remove a class from the htmlTag atribute
// Here no need dot for class name like document Query

htmlTag.classList.contains('className')
// retruns bool value if that html tag contains a the mentioned class name or not

//Array
array.length //gives the lenght of the array. array has the property of length cz
            // is a obejct
array.isArray([1,2,3]) // return true bcz [1,2,3] is a valid array for other its false
array.push(100) //appends 100
array.splice(0,2) // it will remove item from index 0. and it will happen 2 times
// we can add item and replace item and remove item using this splice()
array2 = array.splice() // this copies the array to array2. 
//Now if edit array2 it won't effect the original array.


//LOOPs
let i = 1
while(i<=5){  // if we create a variable in loop it will be created Locally

    continue; // this skipes 1 iteration. it won't check the rest of the loop but will restart it.
    // so remember to increament i

    i++        // no acsess from outside
}
for (let i=1; i<=5;i++ ){
    break; // breaks a loop
    //code
}