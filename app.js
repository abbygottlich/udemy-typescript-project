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
var myRealAge;
myRealAge = 25;
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
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
