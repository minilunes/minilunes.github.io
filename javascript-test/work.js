const person = {
    firstName: 'wesley',
    lastName: 'luna',
    getName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

const calculator = {
    Operand01: '6',
    Operand02: '4',
};

calculator.operand01 = person.firstName.length;
calculator.operand02 = person.lastName.length;

var Calculator = {
    operand01: 6,
    operand01: 4,
    addOperands: function() {
        return this.operand01 + this.operand02;
    }
}

console.log(person.firstName);
console.log(person.lastName);
console.log(person.getName());
console.log(calculator.operand01);
console.log(calculator.operand02);
console.log(Calculator.addOperands());
