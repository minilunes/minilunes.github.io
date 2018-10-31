window.onload = () => {
    const listButton = document.getElementById('run-for-loop');

    listButton.onclick = () => {
        for (let i = 0; i <= 6; i = i + 2) {
            console.log(i);
        }
} 