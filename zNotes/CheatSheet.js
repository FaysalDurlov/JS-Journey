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
object.method()   // output: method_1
object.method2()  // output : method_2

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
// remove the object that contains this key from local storage. (removes only one single key: value)

localStorage.clear() // removes all the value in localStorage



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
window.location.href = "some/file/path"  // by this the page url will be changed and the user will be auto directed to a new link but in same TAB

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
array.unshift(100) // insert 100 in the first index
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

clearTimeout(timeoutId);
timeoutId = setTimeout(()=>{
    document.querySelector(`.js_added_massage_${productId}`).classList.remove('opacityClass');
},2000);
// setTimeout returns an Id if I use clearTimeout(timeoutId) it will stop it



let set_IntervalId = setInterval(callbackFunction, delayInMilliseconds)  // here the setInterval works like setTimeout but interval works repeatedly.
clearInterval(set_IntervalId)  // to stop that repeatition we can get the id that setInterval returns and use it to stop

/* Asynchronous Code :  means the computer won't wait for setTimeout to finish. But it will do the other codes/works then when 3 sec is over (in this case)
                        This setTimeout() will be executed (both setInterval,setTimeout is Asynchronous Code example)
    
    Synchronous Code :  means computer will execute code line by line. It will wait for a line to finish then will go to next
*/



let copyArrayOfFilterMethod = [1,-3,5].filter((value,index)=>{
    return true;   // filter method will keep a track of previous return. after the array ends it will return a copy of Array
});                 // if previous return is true it will go for a iteration and add the item to copy array
                    // if false it will skip the next iteration and doesn't add the item to copy array. similer like continue when false
                    
// for this code the output will be [1,-3,5]
console.log(copyArrayOfFilterMethod);
// example practice-12-part2


let copyArrayOfMapMethod = [1,2,3].map((value,index)=>{
    return 10;                // this will keep a track of the last returned item and save it to copy array.
});                           // after all iteration it will return the copy of the array.
console.log(copyArrayOfMapMethod);

// example practice-12-part2


// ++++++  map method need a funtion to do some work 

let array = [1,2,3,4,5].map((numebers)=>{    // here we created a arrow funtion inside map method and given that directly and its have no name but map an use it and can apply on all the element
    return numebers*10;
})
console.log(array); // output:  [ 10, 20, 30, 40, 50 ]


let array_2 = [1,2,3,4,5].map(MultiplyBy_10);
function MultiplyBy_10(numbers){    // here we created a separet function named(MultiplyBy_10) and given that funtion name to map method to use it and can apply on all the element
    return numbers*10;
}
console.log(array_2); // output:  [ 10, 20, 30, 40, 50 ]





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


//=========== Named Export ================================================================================

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
aVariableName.FNC();  // then we can use codes from other file like this

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



import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

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





//=========== HOOK (Jasmine)  ===========================================================================================================================================================================

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


beforeAll((done)=>{
    LoadProducts(()=>{
      done()
    })
  })

// Here beforeAll() is a hook here done parmeter. after the beforeAll funtion executed untill the done() in called js will wait and won't go to the tests of below codes
// for example I will wait for 5 sec then call done(). so thats means the callback funtion in beforeAll() will finish in 5 sec after these 5 sec next code will be executed
// done() is like the key of a lock. unless I called done() the lock won't open and I can't go to the next step


// we can use it in "it"
it((done)=>{
    console.log("done");
})


//=========== MOCK (Jasmine)  ===========================================================================================================================================================================



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


//======================================================================================== OOP  ==========================================================================================

class ClassName{  // this the class name

    field_1;   // these are the Pulbic propety or field name of a class
    field_2;

    #privateField;  // this is a private property of the class.
    // if there is a property that I only need inside of the class to use then we use it as a private propety in the class to remove access from outside.

    constructor(constructerParamiter_1, constructerParamiter_2, constructerParamiter_3){   // class constructor
        this.field_1 =  constructerParamiter_1
        this.field_2 = constructerParamiter_2
        this.#privateField = constructerParamiter_3
    }
    method_1(){
        console.log("method_1")
    }
    method_2(){
        console.log("method_2")
    }
}

const ClassInstanceName = new ClassName(1,2,3)
// these are the class instance of the class

console.log(ClassInstanceName instanceof ClassName);  // checking if ClassInstanceName is a intance of the ClassName or not.  (Return TRUE)
console.log(ClassInstanceName instanceof ClassName_1);  // checking if ClassInstanceName is a intance of the ClassName_1 or not.  (Return FALSE)



class Parent{
    feild_1;
    field_2;
    constructor(para_1,para_2){
        this.field_1 = para_1;
        this.field_2 = para_2;
    }
    methodOfParent(){
        console.log("Method Of parent")         // this is the syntax of Inheretence
    }
}


class Child extends Parent{   // here since there is no contructor fot he child by deafult it will inherete the constructor of its super class
    child_field_1;
    methodOfChild(){
        console.log("Method Of child")
    }
}

//=============================================================    PolyMorphisom and Inheretence ===================================================================

class Product{
    id;
    image;
    name;
    rating;
    priceCent;
    constructor(productDetails){
      this.id = productDetails.id
      this.image = productDetails.image
      this.name = productDetails.name
      this.rating = productDetails.rating
      this.priceCent = productDetails.priceCent
    }
    getStarUrl(){
      return `images/ratings/rating-${this.rating.stars*10}.png`;
    }
    getPrice(){
      return `$${formatCurrency(this.priceCent)}`
    }
    extraInfoHTML(){
        return "Return From Parent Class";
    }
    extraInfoHTML_2(){
        return "A Method Of parent Class";
    }
  }
  
class Clothing extends Product{
    sizeChartLink;
    constructor(productDetails){
        
        // we can do something like this. so here the new constructor will be called but it means we have to repeat codes that bad habit

        // this.id = productDetails.id
        // this.image = productDetails.image
        // this.name = productDetails.name
        // this.rating = productDetails.rating
        // this.priceCent = productDetails.priceCent

        // insted we can call super class constructor method for here the super class is Product (super Class = Parent Class)
        super(productDetails); // here this means this child class constructor calls it super class constructor to create the filed then inhereted those field from parent to child

        /*
        Here the super() created the fields of the parent class. so the fields are ready with datas now we can inherete those
        to use in the child class
        */

        this.sizeChartLink = productDetails.sizeChartLink;

        // after inhereting all the filed now we created a special that is just for the child class. (No repeat codes)
    }

    extraInfoHTML(){ // method overring
        super.extraInfoHTML()  // this will return the parent "extraInfoHTML()" method
        // here using this we can call the super class method in a child class. if needed. Just by usng Super keyword
        // Note: since we override the "extraInfoHTML()" method. so now If i need to call "extraInfoHTML()" orginaal ver that is in parent class I need to we super.extraInfoHTML()
        // let say there is another method "extraInfoHTML_2()" since its not overriden I can just call extraInfoHTML_2() without any super and I will get the parent version.
        // Only difference is IF orrderriden super must be included otherwise no need the super keyword

        return "return From child Class"
    };
}
const tShirt = new Clothing ({
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: 4.5,
      count: 56
    },
    priceCent: 799,
    keywords: [
      "tshirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  });
console.log(tShirt);
  



// =================================================================================  this ==================================================================================================
function logThis(){
    console.log(this)
}
logThis();             // output :  Undefines
logThis.call("hello")  // output:  hello


function logThis_2(pram1,pram2){
    console.log(this)
}
logThis_2.call("hello","param_1","param_2")   // output:  hello



//========================================================================= Back_end  &  HTTP request ====================================================================================

// HTPP massage can Be send by a Class named   "XMLHttpRequest"

const xhr = new XMLHttpRequest();
xhr.open('First Parameter is the Type Of Request',
    "this second parameter is the URL where I want to send the massage to")

/*
    There are many type of Request the commons one is
    1. GET      -->  get soemthig from server
    2. POST     --> create something (add a new thing)
    3. PUT      --> update something (overwrite)
    4. DELETE   --> Delete something
*/
    // for example this should be :
    xhr.open("GET","https://supersimplebackend.dev")

// To check requests on chrome open Network Tab and Refresh the page. Must refresh after opening network tab!



// this is how we can send a request to the backend
// method GET
const xhr_2 = new XMLHttpRequest();
xhr.addEventListener('load',()=>{ // here Event Listener waits for a "load" event to happen then its executes the funtion that is givent to eventListener
    console.log(xhr_2.response);
})

xhr_2.open("GET","https://supersimplebackend.dev")  // Configure request  (like planning to what to oder in a returant)
xhr_2.send();   // its like placing the order
/* here we write xhr.response it might not work cz js will not wait fo the respose to come it will go the next line to execute. 
    so we added a event listener then we send it. just like previously we add a button eventListener and then we can click it. not the other way
    around
*/


// method Post
function FetchPost18d_XHR() {
    const xhr = new XMLHttpRequest();
  
    xhr.open("POST", "https://supersimplebackend.dev/greeting");
  
    xhr.setRequestHeader("Content-Type", "application/json");
  
    xhr.addEventListener("load", () => {
      const greetFromServer = xhr.responseText;
      console.log(greetFromServer);
    });
  
    xhr.send(JSON.stringify({ name: "Faysal_Durlov" }));
  }
  

/* URL path / API   https://supersimplebackend.dev/home   -> here the URL path is home
                    https://supersimplebackend.dev/hello  -> here the URL Path is hello
                    https://supersimplebackend.dev        -> here the URL Path is /
                    https://supersimplebackend.dev/product/first  -> here the URL Path is product/first

    ===> These URL Paths are the only way we can access to the backend. These are "Backend API"
    ===> Every backend has a documentation where these URL path/ API are given. these are kind of URL Path or API are confidential info for security
    ===> If we need access the backend we need the correct API that supported by that backend or it will show a error 404

    ===> when we use browser search bar this also sends a GET request to the backend and load it on the tab !
*/

/*  Status Code
    starting with 4  -> error caused by backend client side 
    starting with 5  -> error caused by backend side
    starting with 2  -> success
*/




//====================================================================================  fetch ==============================================================================================

// fetch works like xhr.open() method. but here the "GET" argument is already by default we have to just give the URL path / API to fetch from

fetch("https://supersimplebackend.dev/cart") // this will send the request to the backend

/*
    fetch() is a promise type funtion. when we call fetch() it returns a promise.
    as previously we used any promise.then()
    we can also do that with any fetch().then(). because its returns a promise and we can treat it as a promise
*/

fetch("https://supersimplebackend.dev/products").then((response)=>{ // here this response parameter contains the resonse from the backend

    console.log(response);    // here this reponse gives us many information like status code, data, and other stuffs. But we want the products list


    // response.json() -> program is reading the json of the body its needs time. so can't instantly print it!

    return response.json();  // so we use reponse.JSON(). here response.JSON() is an asynchronis code it returns a "promise" so we have to wait for it to complete.
                             // so that our product can be loaded

    // so for a promise to finish in "then" method we used return keyword. so this "then" won't go to the next "then" before finishing it


}).then((productData)=>{
    // response.json() is completed program has readed the json file now we can print it here after "then"
    // here productData parameter contains the response.JSON() returned value
    console.log(productData);
})

// this funtion is similer like previous
function LoadProductsFetch(){
    const Promise = fetch("https://supersimplebackend.dev/products").then((response)=>{
     return response.json(); 
    }).then((productData)=>{
      products = productData.map(
        (productDetails)=>{
          if(productDetails.type === "clothing"){
            return new Clothing(productDetails)
          }
          else if(productDetails.type === "appliances"){
            return new Appliances(productDetails)
          }
          return new Product(productDetails)
        });
      })
     return Promise; // we return the fetch so that we can chain more then() after this
  }
LoadProductsFetch().then(()=>{
    console.log("we return the fetch so that we can chain the methods")
});




// For other Request Type

const responseFromServer = await fetch("https://supersimplebackend.dev/orders",{

    method: "POST",                                 // declaring the request type

    headers: {"Content-Type": "application/json"},  
    // declaring the content type of the main massage that will be in the body of the request. header tells the server the format of the request's body


    body: JSON.stringify({                         // this is the body that contains our main massage. since we are sending json as we declare in header. 
                                                  // thats why we are trasforming it into a json object
        cart: [
            {
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2,
            deliveryOptionId: '1'
            }, 
            {
            productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity: 1,
            deliveryOptionId: '2'
          }
        ]
    })
})

ServerOutput = await responseFromServer.json() // since responseFromServer.json() is a promise so we have to wait until it completes




// Important 
async function PostFetch18g(){
    try{
        const response = await fetch("https://supersimplebackend.dev/greeting",{
            method: "POST",
            headers: {"Conetent-Type": "application/json"}
        })
        if(response.status>=400){
            throw response;
        }
    } catch(error){
        if(error.status === 400){
            const errorResponse = await error.json()
            console.log(errorResponse)
        }else{
            console.log("Network error. Please try again later.")
        }
    }
}
PostFetch18g()

/*
Note:
    fetch() rejects its Promise ONLY 
    if:
        Network failure (no internet)
        DNS failure
        CORS block
        Request never reached the server

    ❌ These throw
    ✅ HTTP 400, 404, 500 do NOT

    ecause:
        👉 The request successfully reached the server
        👉 The server successfully responded

    So from fetch’s perspective:
        “My job is done.”

so here fetch don't shows error so we manually craeted a error
*/





//======================================================================  CALLBACK ===============================================================================================

export function LoadCart(fun){
    let xhr = new XMLHttpRequest()
    xhr.addEventListener("load",()=>{
      console.log(xhr.response);
    })
    xhr.open("GET","https://supersimplebackend.dev/cart");
    xhr.send()
    fun(); // this means we will pass a funtino and we want it to execute after all info loading from server
}



LoadProducts(()=>{
    LoadCart(()=>{   // here we passing a nameless funtion. there are 2 funtion called inside that anonymous funtion to execute after loading the data from server
        renderOrderSummary();
        renderPaymentSummary();
    })
})
/*
here we are in callback hell
we call loadproduct funtion which needs time to complete so we will wait for it to complete and give a another funtion to execute after loading
here we have loadcart which also needs time to complete so we give another funtion to execute after loading the cart. that funtion will be called after the loading
here we have that function as anonymous funtion and inside that we are rendering 

basically loadProducts(waiting) after complete 
            LaodCart(waiting) after complete 
               Do the other things


Note: see each funtion has a anonymouse funtion though that we are passing our chained work. so it can be done sequencely
*/

// or we just use promise like this

new Promise((resolve)=>{
    LoadProducts(()=>{
        resolve()
    });

}).then(()=>{
    return new Promise((resolve)=>{
        LoadCart(()=>{
            resolve();
        })
    })
}).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
})



//=============================================================----============  Promise ===============================================================================------==============

// Important Line --> async, fetch(), await, all are connected to promise. all of these returns a promise






new Promise((resolve, reject)=>{    // if no issue we execute resolve() otherwise reject(). these resolve and reject are funtions
    console.log("do Something")   // when we create a instance of promise object its runs the callback funtion no matter what ! 
})

new Promise((resolve, reject)=>{
    doSomethingCallBackFunction(()=>{
        resolve();      // here the resolve works like jasmine done() funtion. untill we call resolve() the program can't go to the next code.
    }) 
})


// Important:  when we call promise object it creates a separate thread of code. like 2 program running parallel.


console.log("Before promise")
new Promise((resolve)=>{
    console.log("started promise")
    LoadProducts(()=>{
        console.log("Finished Loading")
        resolve();
        console.log("Resolve funtion Called")  // even If I called resolve() these will also work
    })
    console.log("End of the Promise")
}).then(()=>{
    console.log("next step in Then !")  
    // .then() runs ONLY when the promise is resolved (or rejected)
    // resolve() does not run .then() — it unlocks it.
    /*
    here the resolve() is like a door when its called the door is open
        then we can open the door and on the other side .then() methods waits
        to be executed

    so we can say resolve() controls when we need to go .then()
    */
})

/* output:
Before promise
started promise

End of the Promise

Load Products
Finished Loading
Resolve funtion Called
next step in Then !
*/


new Promise((resolve)=>{
    resolve("this value can be passed to then")
}).then((param_Then_1)=>{
    console.log(param_Then_1)  // the resolve value will be passed to parameter of the next then
}).then((param_Then_2)=>{
    console.log(param_Then_2)  // this is undifined cz previous of this "then" no resolve has been passed with an argument
})



new Promise((resolve)=>{
    LoadProducts(()=>{
        resolve()
    });

}).then(()=>{
    return new Promise((resolve)=>{          // if all the funtion depends on each other and we need a sequential execution then we will use like this
        LoadCart(()=>{                       
            resolve();
        })
    })
}).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
})

// instead we can do this too since both funtion are independent. one dosen't depends on another
Promise.all([
    new Promise((resolve)=>{
        LoadProducts(()=>{
            resolve('Value_1 passed')  // output: ['Value_1 passed', undefined]. since firsty element gives a value. but 2nd one dosen't so it undifined


        });                        // this is a array of promise this means all the promises are running perallel.
                                   // if all the funtions are independent then we can use promise.all
                                   // all the funtions are running independenly but parallel so less time from "sequential execution"
    }),
    new Promise((resolve)=>{
        LoadCart(()=>{
            resolve();
        })
    })
]).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
})


.then((value) => {
    // do something
    // return something
 })

/*
--> If you return a value → next .then() runs immediately
--> If you return a Promise → next .then() waits for it
--> If you return nothing → next .then() runs immediately

** returning a promise means the programs wait for the promise to finish before going to next step

Note: to have sequential promise to haven We have to return in every then method other wise next chained then method won't wait.
    in promise.all since its a array all the promise are independent and its not sequential all the promise executes at the same time parallely
*/


//================================================================== ASYNC ==========================================================
/*
    async functions retruns a promise !
*/

async function loadPage() {
    console.log("load Page")
    return "This retrun acts like a resolve()"  
    // this return is like placing a value inside resolve().

} // this code is the shortcut of the code below

// what js sees? it sees a function lets wait for the promise to resolve or reject




function loadPage(){
    return new Promise((resolve)=>{         // shortcut of previous code
        console.log("load Page")
        resolve("This retrun acts like a resolve()");
    })
}

loadPage().then((parameterPassedFromASYNC)=>{
    console.log(parameterPassedFromASYNC) // output: "This retrun acts like a resolve()"
    console.log("Next step")
})  // since loadPage returns a promise and we can add "then" after each promise.

/* notice :  Imagine if we are not passing any argument in the resolve funtion
              then the parameter in "then" will be undifined
*/


//================================================================ await ============================================================


// imagine LoadProductsFetch() need time to load from backend. 
// how can we do some steps after loading ?

// option: 1 
LoadProductsFetch().then(()=>{
    console.log("loaded the items. now Do the next step")
})

// option: 2
await LoadProductsFetch() // this await keywords. wait for the promise to retrun then goes to next line.
console.log("loaded the items. now Do the next step")
/* benfits:  1: no more .then() chaining
             2: more easier to understand. one line of code at a time.

    Note: we can only use await inside of an async function
            and await can only used with promises. not in a callback not any other obeject. awaits waits for a promise to finish thats it.
*/

async function outerFuntion() {
    console.log("before await")
    function innerFuntion(){
        await laodPage();    // this is not allowed
    }
    // await must be inside of a async funtion
}


async function somethig() {
    let a_variable = await new Promise((resolve)=>{
        console.log("do a thing")
        resolve('resolved value set here')
    })

    console.log(a_variable);
    // output: resolved value set here

    /* normaly what happens when we don't use await?
            a value passed inside resolve() can be use as a prameter inside of ".then()" method.

        But when we use await. we cant use the inside value of a resolve() like previously
            we can save it in a variable and can use it. awaits returns the resolve() value;

    */
}



// normal way using promise:
function loadPage(){
    return new Promise((resolve)=>{
        console.log("load Page");
        // our callback funtions has done its work. now we have to exit.
        // so we call resolve() to come out
        resolve();
    }).then(()=>{
        return LoadProductsFetch(); // this funtion returns a promise 
    }).then(()=>{
        return new Promise((resolve)=>{
            resolve("value_1");
        })
    })
}

// easier way using Async await
async function laodPage(){
    console.log("load Page")
    await LoadProductsFetch();
    return "value_1"
}

// Both are same code




//========================================================== ERROR Handling ===============================================================

function LoadCart(fun){
    let xhr = new XMLHttpRequest()

    xhr.addEventListener("load",()=>{
      console.log(xhr.response);
    });

    xhr.addEventListener("error",(error)=>{
        console.log("Urfortunately error occur")
    });
    // here this event listens for an error !. its like try/catch
    // try loading catch error !


    xhr.open("GET","https://supersimplebackend.dev/cart");
    xhr.send()
    fun(); // this means we will pass a funtino and we want it to execute after all info loading from server
}


// ------------------------------------------------------- Error handle in Pomise  -------------------------------------------------------------------

let status = false
new Promise((resolve,reject)=>{

    if(status){
        resolve("status is True")
    }else{
        reject("status is false")
    }

}).then((value_from_Resolve)=>{   

   // when we use then its parameter are values from the resolve() funtion
    console.log(value_from_Resolve)

}).catch((value_from_reject)=>{     

    // when we use catch its parameter are values from the reject() funtion. its kind of cathing a error and showing it in console
    console.log(value_from_reject)
})

new Promise((resolve)=>{
    if(status){
        resolve("status is True")
    }
}).then((value_from_Resolve)=>{   
    console.log(value_from_Resolve)

}).catch((value_from_reject)=>{     // This parameter Is the Error that will be catched by this method
    console.log(value_from_reject)
})

// ------------------------------------------------------- Async Await error Handling (try/catch) -------------------------------------------------------------------

async function someFunction(){
    try{
        console.log("Try this part Code")
        await LoadProductsFetch();
    } catch(error){
        console.log("the Try method failed. SO this catch activated")
    }
    console.log("Do Something else")
}


try{
    notAFunction(); // this function is not exits here. so this error will be catched
    console.log("this line is after Error in try block") // this line won't be executed. since there is a error previously
    // since there is a error program will stoped right there and goes to catch. no code will be executed after an error in try block

} catch(error){ // here this error contains the error which I can use normally like a value in a variable
    console.log("There is a Error Here");
}


// manually Throw an Error
try{
    throw "this an error" // this line give throws a error. so after this line in try block nothing executed it goes to catch block
    console.log("do Something")
    console.log("do Something")
    console.log("do Something")
    console.log("do Something")
} catch(error){
    console.log(error) // output:  "this an error"
}


// try catch in promise
try{
    await new Promise((resolve)=>{
        throw "error value 1"  // this trows a error which is catched by the .catch method
        console.log("do something")
    }).catch((error)=>{
        console.log(error)
        console.log(" this is an error got caught inside promise Catch")  // caught here. since this catch is first catch so its get triggered
    })
} catch(error){ // no Error caught here. because all the error already handled. so this catch dosen't get triggered
    console.log(error)
    console.log("there is an Error outside Catch") 
}
/*    output:
    error value 1
    this is an error got caught inside promise Catch
*/


try{
    await new Promise((resolve)=>{
        LoadCart(()=>{
            throw "error value 1";      // this won't work properly !!!!!!!!!
            console.log("do something")
        })
    })
} catch(error){
    console.log(error)
    console.log("there is an Error outside Catch") 
}

/*  
    Explaination
     CallSatck --> 
        throw "error value 1"
        ()=>{.........}
        loadCart()
        (resovle)=> {......}
        new promise()

    since promise is an obejct. when we create an instanse the promise. the constructor runs instantly and its get passed with loadCart() function
     but this loadCart() function is asyncronis code (means it takes some time to complete). but the contrustor dosen't wait it runs and finishs.
        after the loadCart() loaded from backend. it executes "throw" but since promise contructor finshed its job the "throw error" is outside of promise and it doesn't get caught

    ==> Promises cannot magically catch errors from future callbacks.

    so, Throw = synchronous    (dose not work in the future)
        Reject = asynchronous  (dose work in the future)
*/

// so why Reject works?
/*
        Think of a Promise as a box with two buttons:
        Resolve()  |  Reject()
    when We create a promise

    new promise((resolve,reject)=>{
        console.log("something")
    })

    JavaScript gives you:
            resolve → tell Promise: “success”
             reject → tell Promise: “failed”
    
    Await promise (means)
        “Pause here.
        If promise resolves → continue
        If promise rejects → throw the rejection value”

*/  


//=========================================================================== URL parameter/ Search Parameter ======================================================================================

/*
    in URL we can save data like key: value
*/

"https://supersimple.dev" // this is a URL

"https://supersimple.dev?keyName=123"  // this is a URL parameter

// it means 
{
    keyName: "123"
}// this way we can save some data in the URL of a page

// Tips: if we genarate any links then use this parameter we can pass some data to use in next page


// we can save multiple parameter using   "&"
"https://supersimple.dev?keyName_1=123&keyName_2=456" //imagine its a link. there are 2 (key: value) pair


// to get these key values we can use this code
const pageURL = new URL(window.location.href) // this gives the url of the page
console.log(pageURL.searchParams.get("keyName_1")) // output: 123
console.log(pageURL.searchParams.get("keyName_2")) // output: 456


// imagine we search Youtube "javaScript Tutorial" it gets saved in url like this
"https://youtube.com/result?search_query=javaScript+Tutorial" // the space is converted to "+"