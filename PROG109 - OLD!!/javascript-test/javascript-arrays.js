window.onload = () => {

const arrays = {
    numbers: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5],
    languages: ['JavaScript', 'HTML', 'CSS', 'Java', 'C#', 'Python', 'C/C++']
};

const numbersAction = document.getElementById('numbers-action');
const languagesAction = document.getElementById('languages-action')
    
numbersAction.onclick = () => {
    const numbersDisplay = document.getElementById('numbers-display');
    for (let number of arrays.numbers) {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(number));
        numbersDisplay.appendChild(li);
    }
}
    
languagesAction.onclick = () => {
    const languagesDisplay = document.getElementById('languages-display')
    for (let language of arrays.languages.sort()) {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(language))
        languagesDisplay.appendChild(li);
    }
}}
