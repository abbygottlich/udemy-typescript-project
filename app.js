"use strict";
// string
var myName = "Max";
// myName = 28;
// number
var myAge = 27;
// myAge = "hello";
// boolean
var hasHobbies = false;
// hasHobbies = 1;
// assign types
// let myRealAge: number;
// myRealAge = 25;
// myRealAge = "hi";
// array
var hobbies = ["cooking", "sports"];
hobbies = [100];
// tuples
var address = ["Superstreet", 99];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Blue;
// console.log(myColor);
// any
var car = "BMW";
// console.log(car);
car = { brand: "BMW", series: 3 };
// console.log(car);
// functions
function returnMyName() {
    return myName;
}
// console.log(returnMyName());
// void
function sayHello() {
    // console.log("Hello!");
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 10));
// function types
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
// console.log(myMultiply(5, 2));
// objects
var userData = {
    name: "Max",
    age: 27
};
// userData = {
//     a: "hello",
//     b: 3
// }
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealAge = 27;
myRealAge = "27";
// check types
var finalValue = 30;
if (typeof finalValue == "number") {
    console.log("finalValue is a number");
}
// never type
function neverReturns() {
    throw new Error('An error!');
}
// nullable types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
