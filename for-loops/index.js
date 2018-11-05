window.onload = () => {
    const listButton = document.getElementById('run-for-loop');

    listButton.onclick = () => {
        const myList = document.getElementById('my-list');
        
        for (let i = 0; i < 5; i++) {
           elfCode.appendToList(myList, i);
        }
        
    }
<<<<<<< HEAD

=======
>>>>>>> 999eed146b013e81d8d301cc1d18d83a731224d9
}