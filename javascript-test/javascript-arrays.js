window.onload = () => {
    const numbersAction = document.getElementById('numbers-action');
    const languagesAction = document.getElementById('languages-action')
    
    numbersAction.onclick = () => {
        const numbersDisplay = document.getElementById('numbers-display');
            numbersDisplay.textContent = numbers;
    }
    
    languagesAction.onclick = () => {
        const languagesDisplay = document.getElementById('languages-display')
            languagesDisplay.textContent = languages;
    }
    
};

const numbers = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5];
const languages = ['JavaScript', 'HTML', 'CSS', 'Java', 'C#', 'Python', 'C/C++'];

for (let number of numbers) {
    console.log(numbers);
}
for (let language of languages) {
    console.log(languages);
}