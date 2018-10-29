const num = 43466334;
const numberString = '3';
const rain = false;

console.log(num, numberString, rain);
console.log(typeof num, typeof numberString, typeof rain);
console.log(num + numberString);
console.log(typeof num);

if (rain === true) {
    console.log('Go to the gym.');
} else {
    console.log('Go for a walk');
}




console.log('MODULUS TEST FOR EVEN:', num % 2);
console.log('MODULUS TEST FOR EVEN:', (num % 2) === 0);

var app = {

    isEven: function(input) {
        if (input % 2 === 0) {
            console.log('Your input of ' + input + ' is even');
        } else {
            console.log('Your input of ' + input + ' is odd');
        }
    }
};

app.isEven(2);
app.isEven(3);
app.isEven(4);
app.isEven(5);