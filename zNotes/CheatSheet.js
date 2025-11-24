let variable = 1 < 0.5 ? 'heads' : 'tails';
//                        TRUE      False
// if else shorthand

/*============================= Math methods ==============================================================================================================================================================*/

let matRound = (Math.round(6.005)/100).toFixed(2) // will return 6.01


/*============================= Objects ==============================================================================================================================================================*/

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

object = {   // this is also a non json object
    name: 'shirt', //property
    price: 799,
    method: function func(){     //methods 2 ways of writing both works same
        console.log('method_1');
    },
    method2(){                    // short-hand method
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



/*========================= Local Storage ==============================================================================================================================================================*/

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



/*============================= DOM (Document Model Object) ============================================================================================================================================*/

document.querySelector('.className')
// with this we can get any html tag we want in Js like button,div,p etc. 
//but if same tag 2 or more time we need class. same goes for ID
document.querySelector('.className')
// with these we can't manupulate the conent but we can just get them (like read only) 
// same goes for .innerText
document.querySelector('.className').innerHTML
// with this we can manupulate the content of "htmlTag"
document.body.innerHTML
// this innerHTML gives the html tag that is under body. if I put div then it returns html inside div
document.body.innerText
// retruns the text inside of the tag. why use this innerhtml return spaces but innerTxt doesn't
document.querySelector('input').value 
// returns a input. We can't use innerHTML bcz input does't have closing tag

document.querySelector('.className').remove(); 
// this will remove that htmltag that has this class name




/*
<select class="selectorClassName">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
</select>

*/
document.querySelector(`.selectorClassName_${productId}`).value // if we have a Selector and we have a some value so we can get that value like this



document.querySelectorAll('.className');  // returns the list of all the elements that has .className atttribute
// this will select all the htmltags that has this same class name. unlike just querySelector that will select the only last html that has this class name

console.log(document.querySelectorAll('.className'));  // this will return a array like object named Nodelist   key = index  ;  value = html class names


window.document 
window.document.title
window.console.log('Hello')
window.alert
// we always type document without window object why? js automaic add this in behind
// under window we have document, console, elements, alert applicaton(localStorage) like everything it like Mother of all object
//  under thid window we have document under document we have html etc like this



/*========================== Html class Modify With JS ================================================================================================================================================*/


// can use in css after any action/event design 
htmlTag.classList.add('className')
// with this we can add a new class in that htmlTag atribute

htmlTag.classList.remove('className')
// with this we can remove a class from the htmlTag atribute
// Here no need dot for class name like document Query

htmlTag.classList.contains('className')
// retruns bool value if that html tag contains a the mentioned class name or not


htmlTag.dataset  // if there is any  data attribute has been used in html  like   data-name1-name2-name3 = "value" 
// this will return a object with property of { name1Name2Name3: : "value" }  later we can use this to access that value using
html.dataset.Name1Name2Name3;


const productId = button.dataset.productId;
const {productId} = button.dataset;         // this this the shorthand of this ^^
// Both Are same Line
// Remember Dataset is an Object is this we have the property of productId in this case



/*============================= Array =================================================================================================================================================================*/

array.length //gives the lenght of the array. array has the property of length cz
            // is a obejct
array.isArray([1,2,3]) // return true bcz [1,2,3] is a valid array for other its false
array.push(100) //appends 100
array.splice(0,2) // it will remove item from index 0. and it will happen 2 times
// we can add item and replace item and remove item using this splice()
array2 = array.slice() // this copies the array to array2. 
//Now if edit array2 it won't effect the original array.

array.forEach(function(value,index){ // here the first paramter will return element in array and 2nd parameter will retrun index of the element
    console.log(index,value)
})                                //works like loop it will print each element of the array

arrayTodoWork = ['make Food','Wash Dishes','Watch Football','Do coding']
arrayTodoWork.forEach(function(first_i_elements,second_i_index){
    if(first_i_elements==='Wash Dishes'){
        return; //====================================================== this do same like continue in  Loops
    }
    console.log(`Index = ${first_i_elements} | Element = ${second_i_index}`);
});


/*============================= Loops ==================================================================================================================================================================*/

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



/*============================= Funtions ================================================================================================================================================================*/

// remember funtion is a value. so anything we can use with value like int,float,array, bool
// we can use fnc similer way
NONjsonObject.fun()
// a funtion from object. Object Name NONjsonObject.
// this is a method of a  NoNjsonObject 


//option_1
const FncVariable = function doSomething1(){
    console.log('1');      // has dependency (Explained below)
}

const FncVariable2 = function (){
    console.log('1');      // has dependency 
}                          // is is a anonymous Function
FncVariable2();
FncVariable();
// these all can be use but after declaration they don't support hoisting

doSomething1(); /// cant use it like this



//Default funtion
function doSomething2(){
    console.log('1');      // has no dependency 
}


// dependency??? it means funtion needs to be declared first then can be used.
// like option 1 we can't use like  doSomething()  or    FncVariable()  before the Funtion has been created/declared
// in option 3 we don't need anything we can use funtion as we want
// this kind of non dependency is called    Hoisting so option 1 don't have hoisting but option 3 has


function run(parameter){
    parameter();
}
run(function(){
    console.log('Here we have passed a function into another funtion');
}); 
// here the funtion that we can giving as an argument is called  "CALLBACK"
// remember fnc is a vlaue

setTimeout(doSomething2,3000);  //Takes 2 parameters  first parameter is the work we want to do
                                // 2nd parameter is in milisecond after we want to do the work that is on first parameter
// this will happen just one single time and will stop after that



let set_IntervalId = setInterval(callbackFunction, delayInMilliseconds)  // here the setInterval works like setTimeout but interval works repeatedly.
clearInterval(set_IntervalId)  // to stop that repeatition we can get the id that setInterval returns ans use it to stop

/* Asynchronous Code :  means the computer won't wait for setTimeout to finish. But it will do the other codes/works then when 3 sec is over (in this case)
                        Thi setTimeout() will be executed (both setInterval,setTimeout is Asynchronous Code example)
    
    Synchronous Code :  means computer will execute code line by line. It will wait for a line to finish then will go to next
*/



let copyArrayOfFilterMethod = [1,-3,5].filter((value,index)=>{
    return true;   // filter method will keep a track of previous return. after the array ends it will return a copy of Array
});                 // if previous return is true it will go for a iteration and add the item to copy array
                    // if false it will skip the next iteration and doesn't add the item to copy array. similer like continue when false
// for this code the output will be [1,-3,5]
console.log(copyArrayOfFilterMethod);
// example practice-12-part2


let copyArrayOfMapMethod= [1,2,3].map((value,index)=>{
    return 10;                // this will keep a track of the last returned item and save it to copy array.
});                           // after all iteration it will return the copy of the array.
console.log(copyArrayOfMapMethod);
// example practice-12-part2


/*============================= Arrow Funtions ================================================================================================================================================================*/

const arrowFunction = (parameter1,parameter2)=>{
    console.log('Hello');
};
arrowFunction(2,3);


// One parameter Function
const oneParamFNC = parameter1 =>{
    console.log(parameter1);
}
oneParamFNC(2);


//One Line Funtion
const oneLineFNC = (a,b)=> a*b ;  // this will auto return the a*b value  its one line funtion
console.log(oneLineFNC(2,3));

// when to use?  try to use when we are passing a funtion to another so use arrow fnc as callback
// Arrow Funtion Don't support Hoisting


let FoodArrayFor12_n = ['egg','apple','egg','egg','ham'];
let removeEgg = (foodArray)=>{    // this is like  funtion removeEgg(paramiter == FoodArrayFor12_n){}
    let CopyArrayForFilterOutput12_n = foodArray.filter((value)=>{
        if(value==='egg'){
            return false;
        }else{
            return true
        }
    });
    return CopyArrayForFilterOutput12_n;
};
console.log(removeEgg(FoodArrayFor12_n));



const ObjectDemo = {
    method_1: function(){
        console.log('Method 1');
    },
    method_2(){
        console.log('Method 2');
    },
    method_3: ()=>{
        console.log('Method 3');
    }
}
ObjectDemo.method_1();
ObjectDemo.method_2();
ObjectDemo.method_3();



/*============================= Event Listener ================================================================================================================================================================*/

const doThis = ()=>{
    console.log('Doing This');
}
function doThat(){
    console.log('Doing That');
}

document.querySelector('.ButtonClassName').addEventListener('click',doThis);
// we can add event listener like this or we can use variable like bellow


const buttonElement = document.querySelector('.ButtonClassName')
// we ware using  ======= onclick   ==>>>>   on  + "click"  

buttonElement.addEventListener('click',doThis);   // so after every ON  we can use that 
// in here its onclick.
// same for onkeydown  so we will use keydown as an argument in event listener

buttonElement.removeEventListener('click',doThis);  // this will remove the event listener.
// Notice doThis is variable funtion. so we need the exact funtion.

/* why we dont use 
    buttonElement.addEventListener('click',doThat());

    because doThat() function doesn't return any thing so it will undifined and eventListener use undifined
    so its a error
*/
buttonElement.addEventListener('click',()=>{
    doThat();                                   // we can use doThat like this 
});
document.body.addEventListener('keydown',(event)=>{ // here we can get the event object also
    console.log(event.key)   // this will retrun which button has been pressed
});                          // check html Notes
// For Dynamics. Let say Todo Delete Button we have to set html first then we can set addeventlistener



const inputField = document.querySelector(`.js_input_new_quantity_${cartItemId}`);
  inputField.addEventListener('keydown',(event)=>{
    if(event.key === 'Enter'){
      saveOperation();
    }
});
// this is for to get a event from Input and press "Enter" to sumbmit the input with keydown event



/*============================= Class Create ================================================================================================================================================================*/


function Car(comapany, model,year,color){
    this.comapany = comapany,
    this.model = model,
    this.year = year,
    this.color = color
}
let car1 = new Car('Toyota','Supra-450',2018,'Black');
console.log(car1.comapany);
console.log(car1);


/*============================= Module  ================================================================================================================================================================*/

/* 3 steps  

 1. add type="module" attribute   so this file can import from other files
        == And this will be called Entry Point
 
        this type will be in html script element of that file from here will be acessing from another file.
       { in short in which js file we will type import that file }

 2. Export   
 3. Import   import {cart} from '../data/cart.js';
*/


//=========== Named Export ==========

//Import   
import {variableFromOtherFolder} from '../data/cart.js'; // import must be on top of the file to work
// here [ ../ ] means one step back from current Folder
// [ ../../ ] means 2 step back from the current Folder

/*    And let say we have a file on same folder we have to use a single dot
          like    ./file_1/file_2
*/

import {variableFromOtherFolder as A_variableName} from '../data/cart.js';
//This As will rename the varibale name to another while importing

import {variable_1 , variable_2, NameOfFunction} from '../data/cart.js'; 
// this way we can get 2 varibale or even a funtion

import * as aVariableName from '../data/cart.js';
// this way we can get all the elements from the cart.js file as a object.
// this * will group all the elements in aVariableName as a object then we can acess it

aVariableName.property_1;
aVariableName.FNC();  // then we can use codes from othe file like this

//Export   
export variableFromOtherFolder; // this line will be in source folder;

// this way the program will only work in live server



//=========== Default Export ==========

export default aThing; //Export a thing from a js file

import aThing from 'a_file_or_a_link_esm' // import without any brackets (This is called Default Import)

// Warning This default Export Can be Used Just one single time for a js file only.
// can't use export default multiple time in the same js file.

/* Here aThing may be a fnc or varibale any other data type. but as default must be used once. 
    so When we import we use any name to import aThing. for example
    we can write:

    import heloWorld from 'a_file_or_a_link_esm;'

    this will automaticly import aThing and its name will be changed to heloWorld.
    then we can use heloWold same aThing cz its just changed its name thats it
*/




// Tip --->  if we want to default export multiple things we can create a object that will have many things. Then we will export that




/*============================= ExternalLibrary  ================================================================================================================================================================*/

// DayJs  famous for date type uses
// we can add library same as we add js file in html file. using <script src = "library_Chrome_Link" ></script>

import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';
hello()  // in the external library its code is console.log("helo") so it will print hello

/*  chekc DayJS chrome file. see how the js code is has been compressed. so that it can load fast.
    this is called minification 
*/

// remeber dayjs_ESM_Version_has a default Export
const today = dayjs();
const deliveryDate = today.add(7,'days'); // add 7 days with todays day 
console.log(deliveryDate.format('dddd, MMMM D'));   // Sunday, June 9

/*
    There are ESM version and normal External Liberery ESM means there is a exported Funtion Already
    and Normal External Librery Means no External
    here DayJS has Exported version
*/



/*============================= Testing FrameWork  (Jasmine)  ================================================================================================================================================================*/

// in jasmine Spec means test

describe("This Is a Suit Which is Used to Give a title/ Discribe My Test. Ex. (Money format testing.) ",()=>{
    it("Under the describe: these are subSection. Or My Test Case for a funtion which Can be Mutiple. Ex. (Moeney formate is 20.95)",()=>{
        expect(formatCurrency(2095)).toEqual('20.95');
    });
    it("For input 0",()=>{
        expect(formatCurrency(0)).toEqual('0.00');
    });
    it("For Input 2000.5",()=>{
        expect(formatCurrency(2000.5)).toEqual('20.01');
    })
});


describe('test Suite: FormatCurrency',()=>{ // this creates a Test suite (More like Heading of a paragraph)

    // Here each it means each test. so  information/context are not shared by 2 it methods.

    it('Converts Cents into Dollars', ()=>{  // these "it" means indivisual tests
        expect(formatCurrency(2095)).toEqual('20.95');  // here the expect funtion resturns an Object. then we are checking is it equal to our desired ans? 
    });                                                 // more like if else 
    it('Woks with 0',()=>{
        expect(formatCurrency(0)).toEqual('0.00');    // expect the fnc to give 0.00
    });
    it('rounds up to nearest cent',()=>{
        expect(formatCurrency(2000.5)).toEqual('20.01')   // expect the fnc to give 20.01
    });
});


/*   the output will be like this formate
       test Suite: FormatCurrency
         .Converts Cents into Dollars
         .Works with 0
         .rounds up to nearest cent

*/
// we can have nested Describe in jasmine
describe('First Test Suite',()=>{
    describe('Second Test Suite Under the First',()=>{
        // tests
    });
});

//=========== HOOK (Jasmine)  ==========

//since all it method works independently. so if there is a common work that I have to do I can use a Hook
beforeEach(()=>{
  // the common work codes
})
// here this funtion will expects a another funtion/ work that is common and I want to do these works before each test so my repitation code reduced

// there are many hooks like

beforeEach(()=>{})  // runs code before each tests
afterEach(()=>{})   // runs code after each tests
beforeAll(()=>{})   // runs code before all  tests
afterAll(()=>{})    // runs code after all tests





//=========== MOCK (Jasmine)  ==========
// ****** Mock can be used only one test.
// to test again we must mock again


//------ SpyOn can Fake a Value
// Mock Means replease method with fake version
spyOn(localStorage, 'getItem') // Here we are faking  "getItem" method which is a method of Object "localStorage" 
                                // so we are mocking localStorage getItem method
// spyOn returns a Object
spyOn(localStorage,"getItem").and.callFake(()=>{  // Here "spyOn(---).and" also retruns a object. here and has a method callFake
    return JSON.stringify([]);                    // Inside callFake we can fake a funtion call and return anything we want
})                                                // Like here we are retruning  a empty array [] in a string format

        // warning Order of code matter. If we get localStorage first then spy on localStorage it won't mock
        // But if we mock first then get value then It Will be mocked and our work will be Done

//---- SpyOn Records every time a method is Used

/* so let say we want to find if a method from a object is has been used ot not. 
    OR may be it can be used Multiple time I want to know the exact Number of times
    it has been called
*/

spyOn(localStorage,"setItem");  // Mocking SetItem method

expect(localStorage.setItem).toHaveBeenCalledTimes(5);
// so we expect localStorage.setItem has been called let say 5 times.
// Warning: this toHaveBeenCalledTiems method can only be used if I mocked "that method (setItem in here) " previously. SO Mock first then use toHaveBeenCalledTimes()



expect(document.querySelector('.someHTMLClassName').innerText).toContain('SomeText that I can to check is it here or not')
// imagine I have some text in html but I want to check if one specific text contains or not. here I
// get the all the text using InnerText then checking using toContain method


// Tip ---->  we can use this and find what values setItem received.


//Let’s say your app uses:
localStorage.getItem("cart");
localStorage.getItem("userSettings");
localStorage.getItem("authToken");

//With your current spy:
spyOn(localStorage, "getItem").and.callFake(() => {
    return "SAME VALUE FOR ALL KEYS";
  });

// All three will return "SAME VALUE FOR ALL KEYS" — which is likely not what you want.



