window.onload = () => {

    const functionCalls = document.getElementById("function-calls");
    const callUserInput = document.getElementById("call-user-input");

    functionCalls.onclick = () => {
        simpleFunction();
        functionParameters("Many functions take parameters.");
        functionReturn();
        const returnValue = functionReturn();
        console.log(returnValue);
    }

    callUserInput.onclick = () => {
        const userInputParagraph = document.getElementById("show-user-input");
        const userInput = document.getElementById("user-input");
        userInputParagraph.textContent = userInput.value;
    }
}

function simpleFunction() {
    const displayText = "functions should consist of statements designed to perform a single task";
    const simpleFunctionParagraph = document.getElementById("simple-function");
    console.log(displayText);
    simpleFunctionParagraph.textContent = displayText;
}       /*will print a phrase */

function functionParameters(value) {
    const functionParametersParagraph = document.getElementById("function-parameters");
    console.log(value);
    functionParametersParagraph.textContent = value;
}       /*takes a single parameter and prints it out */

function functionReturn () {
    return "Many functions return values.";
}       /*returns a value function*/

function add(a, b) {
    console.log(a + b);
}       /*adding*/

function add() {
    console.log(2 + 3);
}       /*adding using strict parameters */

add(6, 3);
add();