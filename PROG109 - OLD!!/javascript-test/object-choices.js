function loader() {
    const getNamesButton = document.getElementById('get-names')
    const functionButton = document.getElementById('getFunctionObject');

    getNamesButton.onclick = function() {
        const name = myObject.getName();
        const getNameDisplay = document.getElementById('getNameDisplay');
        getNameDisplay.textContent = name;

        const FullName = myObject.getFullName();
        const getFullNameDisplay = document.getElementById('getFullNameDisplay');
        getFullNameDisplay.textContent = FullName;
    }

    const functionObject = new FunctionObject();
    console.log(functionObject.getFullName());
}
window.onload = loader;

// Key Value pairs
// Comma separated list of key value pairs.
const myObject = {
    firstName: 'fred',
    lastName: 'smith',
    getName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

function FunctionObject () {
    const firstName = 'sue';
    const lastName = 'jones';

    FunctionObject.prototype.getFullName = () => {
        return firstName + ' ' + lastName;
    }
}

myObject.middleName = 'barfoo';
myObject.getFullName = function() {
    return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
}

console.log(myObject.firstName);
console.log(myObject.lastName);
console.log(myObject.getName());
console.log(myObject.middleName);
console.log(myObject.getFullName());

const functionObject = () => {
    console.log('my function object');

    const getName = () => {
        return 'Function Object';
    }

    console.log(getName());
}