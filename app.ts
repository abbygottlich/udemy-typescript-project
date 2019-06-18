// string
let myName = "Max";
// myName = 28;

// number
let myAge = 27;
// myAge = "hello";

// boolean
let hasHobbies = false;
// hasHobbies = 1;

// assign types
let myRealAge: number;
myRealAge = 25;
// myRealAge = "hi";

// array
let hobbies: any[] = ["cooking", "sports"];
hobbies = [100];

// tuples
let address: [string, number] = ["Superstreet", 99];

// enum
enum Color {
    Gray,
    Green = 100,
    Blue
}
let myColor: Color = Color.Blue;
// console.log(myColor);

// any
let car: any = "BMW";
console.log(car);
car = {brand: "BMW", series: 3};
console.log(car);
