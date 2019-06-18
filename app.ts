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
// let myRealAge: number;
// myRealAge = 25;
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
// console.log(car);
car = {brand: "BMW", series: 3};
// console.log(car);

// functions
function returnMyName(): string {
    return myName;
}
// console.log(returnMyName());

// void
function sayHello(): void {
    // console.log("Hello!");
}

// argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
console.log(multiply(2, 10));

// function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
// console.log(myMultiply(5, 2));

// objects
let userData: { name: string, age: number } = {
    name: "Max",
    age: 27
};
// userData = {
//     a: "hello",
//     b: 3
// }

// complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};

// type alias
type Complex = {data: number[], output: (all: boolean) => number[]}

let complex2: Complex = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data
    }
};

// union types
let myRealAge: number | string = 27;
myRealAge = "27";

// check types
let finalValue = 30;
if(typeof finalValue == "number") {
    console.log("finalValue is a number");
}

// never type
function neverReturns() {
    throw new Error ('An error!');
}

// nullable types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;

