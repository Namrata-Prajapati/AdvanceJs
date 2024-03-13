// all the output will be visible to console of browser after inspection
console.log("Hello this is my script tags");

// single line comment
/* multi 
line 
comments*/

// if else gives boolean value in bits
// operators
// arithematic, logical, assignment comparision
// arithmatic:- +,-,*,/, %
// assignment  :- =,  +=., -=, *=, /= 
// logical:- || any of them are true, && all are true, !, 
// comparison operator:- === compare the values along with datatype, == compares the values only
 
// HOISTING is declaration of all the vars at the top
// creating objects in Js
const items ={
    food: 1000,
    drinks: 2000 
};

var cart =0;
function addToCart(){ //without parameters
    cart+= items.food;
}
console.log("without parameters:- ");
addToCart();
console.log("cart: ", cart);

cart =0; 
function addToCarPr(item){ //with parameters
    cart+= item;
}
console.log("with parameters :- drinks and food")
addToCarPr(items.drinks);
addToCarPr(items.food);
console.log("cart: ", cart);

cart =0;
console.log("return type function")
function addCartReturn(item){
    return cart+item;
}

cart = addCartReturn(items.food);
console.log("cart: ", cart);

console.log("Arrow functions latest in ES6");
var addCart = (item) =>{
    cart+= item;
};
console.log("with parameters :- drinks and food")
addCart(items.drinks);
addCart(items.food);
console.log("cart: ", cart);

console.log("See the difference between normal & arrow function");
// NORMAL
myFunction();
function myFunction(){
    console.log("NORMAL:- I can be declared after calling!!");
}

//ARROW FUNCTION
const myArrFunction = () =>{
    console.log("ARROW:- Hoisting doesn't work here basically arrow function will be called after defining it!!");
}
myArrFunction();

//THIS keyword
console.log("this:- this function will print the parent information of a page");

function getThis(){
    console.log(this);
}

const arrowGetThis = () => {
    console.log(this);
}

getThis();
arrowGetThis();

const OurObject = {
    name: "this keyword",
    getThis : function(){console.log(this);},
    arrowGetThis: () =>{console.log(this);}
}

OurObject.getThis(); // it gives object as parent this
OurObject.arrowGetThis(); // it gives window as parent object

console.log("Recursive function:- ");
var num =1;
function printNum(){
    console.log(num);
    num++;
    if(num <= 10){
        printNum();
    }
    else{
        return 
    }
}

printNum();