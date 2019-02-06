"use strict";

const elfCode = {
    appendToList: (list, value) => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(value));
        list.appendChild(li);
    }
}

window.onload = () => {
    const userInput = document.getElementById('list-data');    
    const listButton = document.getElementById('add-to-list');
    const shuffleButton = document.getElementById('shuffle-list');

    listButton.onclick = () => {
        var myList = document.getElementById('my-list');
        elfCode.appendToList(myList, userInput.value);
    }

    shuffleButton.onclick = () => {
        const shuffledList = document.getElementById('shuffled-list');
        elfCode.appendToList(shuffledList);

        const shuffleList = [ ];
            while (myList.length > 0) {
            let rnd = Math.floor( Math.random( ) * myList.length);
            shuffleList.push( myList[ rnd ] );
            myList.splice( rnd, 1 );
}
console.log( "Shuffled array: " + shuffledList ); 
    }
}

