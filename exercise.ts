// created this type BankAccount (similar to a variable) because it is used more than once
type BankAccount = { money: number, deposit: ( val: number ) => void };

let bankAccount: BankAccount = {
    money: 2000,
    // when there is a function within an object, you do not have a key-value pair, you just use the name of the function as the key name
    deposit(value: number): void {
        this.money += value;
        // this function does not return anything, so you can give it type void
    }
};

let myself: { name: string, bankAccount: BankAccount, hobbies: string[] } = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);