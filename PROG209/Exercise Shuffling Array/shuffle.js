window.onload = () => {
    const userInput = document.getElementById('list-data');    
	const listButton = document.getElementById('add-to-list');
	const shuffleButton = document.getElementById('shuffleList');

     listButton.onclick = () => {
        const myList = document.getElementById('my-list');
		elfCode.appendToList(myList, userInput.value);
	 }
		
	shuffleButton.onclick = () => {
		const shuffledList = document.getElementById('shuffleList');
	while (myList.length > 0) {
	let rnd = Math.floor( Math.random ( ) * myList.length);
	shuffledList.push ( myList[ rnd ] );
	myList.splice( rnd, 1 );
		elfCode.appendToList(shuffledList);
		}
    }

const elfCode = {
    appendToList: (list, value) => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(value));
        list.appendChild(li);
    }
}
}