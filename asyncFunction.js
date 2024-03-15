//Asynchronus it could be in an await queue

//Synchronous will not wait for others as it's realtime
//PROMISES 
//This is fake user data from json place holder websites which will be using for promises
// https://jsonplaceholder.typicode.com/users
//ASYNC WAIT
console.log(fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((data) =>
console.log(data)));
// json = javascript Object notation

console.log("---------------------------------");
const getData = async () =>{
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await result.json();
    console.log(data);
}
getData();

