var bankAccount = {
    money: 2000,
    // when there is a function within an object, you do not have a key-value pair, you just use the name of the function as the key name
    deposit: function (value) {
        this.money += value;
        // this function does not return anything, so you can give it type void
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
