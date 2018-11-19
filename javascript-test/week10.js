window.onload = () => {
    const objectLiteralAction = document.getElementById('object-literal-action')
    const numbersAction = document.getElementById('numbers-action');

    objectLiteralAction.onclick = () => { 
        const objectLiteralDisplay = document.getElementById('object-literal-display');
        console.log(objectLiteral.getName());
        objectLiteralDisplay.textContent = objectLiteral.getName();
    }

    numbersAction.onclick = () => {
        const numbersDisplay = document.getElementById('numbers-display')
        numbersDisplay.textContent = numbers;
        for (let number of numbers) {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(number));
            numbersDisplay.appendChild(li)
        }
    }
}

const numbers = [2, 1, 3];

const objectLiteral = {
    objectName: 'object literal is my name',
    getName: function() {
        return this.objectName;
    }
}