// Exercise 1 - Maybe use an Arrow Function?
const double = (value: number) => value * 2;
console.log(double(10));
 
// Exercise 2 - If only we could provide some default values...
const greeter = (name = "User") => {
    console.log("Hello, " + name);
};
greeter();
greeter("Anna");
 
// Exercise 3 - Isn't there a shorter way to get all these Values?
const numbersArr = [-3, 33, 38, 5];
console.log(Math.min(...numbersArr));
 
// Exercise 4 - I have to think about Exercise 3 ...
let newArray = [55, 20];
newArray.push(...numbersArr);
console.log(newArray);
 
// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults;
console.log(result1, result2, result3);
 
// Exercise 6 - And a well-constructed object!
var scientist = {firstName: "Will", experience: 12};
const {firstName, experience} = scientist;
console.log(firstName, experience);