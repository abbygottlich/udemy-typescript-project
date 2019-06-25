var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 27;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("Old guy");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Max", "max");
console.log(person.name, person.username);
person.printAge();
// person.setType("Cool guy"); //won't work with private method
