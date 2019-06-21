// let and const
let variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; //won't work

// block scope
function reset() {
    let variable = null;
    console.log(variable);
}
reset();
console.log(variable);
