let variable = 1 < 0.5 ? 'heads' : 'tails';
//                        TRUE      False
// if else shorthand

const jsonObject = {
    "name": "Toyota",    //using JSON Syntax
    "color": "Red",      //no methods can be here in Json and it can be read by other languages like (c,c++,Java, etc)
    "rating": {          //Use Json so that my data can be read in 2 different languages or may be more
        "stars": 5,      // use json to store data in file or database so later other languages can read it from there
        "count": 87      //
    }
}
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

const { name, price } = object;
/*shortcut of   --> const name = object.name
                    const price = object.price
this is called destructuring
takes name and price property from object and puts the value in name variable
*/

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