function getArray(){
    return [1,2];
}

//Destructuring of array
const [x,y,z] = getArray();
// [x,y,z] = [1,2];
console.log(x);
console.log(y);
console.log(z);

var myArray = [1,2,-3,4,-5];
const neWarray = myArray.map(e => (e+1));
console.log(myArray);
console.log(neWarray);

const filteredArray = myArray.filter(e => e>0);
console.log(filteredArray);

function hello(name="Clarissa"){
    if(name){
        console.log("hello "+name);
    }
    else
        console.log("Hello World!");
}
hello();//without giving any parameter it will consider the default value declared 
hello("John");

console.log("Apple\nBanana\nGrapes\nMango");
console.log("----------------");
//Template literals
console.log(
    `Apple
    Banana
    Grapes Mango`
);//It will printed as it is

//SCOPING
function outer(){
    var name1 = "Clarissa";
    let name2= "John";
    function inner(){
        var name1 = "Clarissa again";
        let name2 = "John again";
        console.log(name1);
        console.log(name2);
    }
    inner();//name1= Clarissa again(as it has scope within inner function)
    console.log(name1); //Clarissa 
    console.log(name2);
}
outer();



