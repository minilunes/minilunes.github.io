function divider(title) {
    console.log("=======================");
    console.log(title);
    console.log("=======================");
};

const person = {
    firstName: 'wesley',
    lastName: 'luna',
    getName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

const calculator = {
    operand01: '6',
    operand02: '4',
};

calculator.Operand01 = person.firstName.length;
calculator.Operand02 = person.lastName.length;

var Calculator = {
    Operand01: 6,
    Operand02: 4,
    addOperands: function() {'use strict';
        return this.Operand01 + this.Operand02;
    },
    subOperands: function() {'use strict';
        return this.Operand01 - this.Operand02;
    },
    multOperands: function() {'use strict';
        return this.Operand01 * this.Operand02;
    }
};

divider('Person');
console.log(person.firstName);
console.log(person.lastName);
console.log(person.getName());

divider('Calculator');
console.log('operand01 =', calculator.operand01);
console.log('operand02 =', calculator.operand02);

console.log('Add: ', Calculator.addOperands());
console.log('Subtract: ', Calculator.subOperands());
console.log('Multiply: ', Calculator.multOperands());