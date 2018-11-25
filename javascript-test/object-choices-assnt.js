function loader() {
    const simpleObjectButton = document.getElementById('simple-object-action');
    const functionObjectButton = document.getElementById('function-object-action');
    const customClassButton = document.getElementById('custom-class-action');

    simpleObjectButton.onclick = function() {
            const name = simpleObject.sayName();
            const simpleObjectDisplay = document.getElementById('simple-object-display');
            simpleObjectDisplay.textContent = name;

    };
    
    functionObjectButton.onclick = function() {
            const functionObjectDisplay = document.getElementById('function-object-display');
            functionObjectDisplay.textContent = FunctionObject();
    };
    
    customClassButton.onclick = function() {
            const customClassDisplay = document.getElementById('custom-class-display');
            customClassDisplay.textContent = CustomClass.sayName();
    };
}

window.onload = loader;

const simpleObject = {
    sayName: function() {
        return "Simple Object";
    }
};

function FunctionObject() {
    sayName = function() {
        console.log("Private Function")
        return "Private Function";
    }
    return sayName();
}

var dynamicMethod = {
    method: "Dynamic Method",
    myMethod: function() {
        return this.method;
    }
}

class CustomClass {
    sayName() {
        console.log("Custom Class")
        return "Custom Class";
    }
}