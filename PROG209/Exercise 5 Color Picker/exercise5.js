var showButton = document.querySelector("#show");
var clearButton = document.querySelector("#clear");

showButton.addEventListener("click", showColorHandler, false);
clearButton.addEventListener("click", clearColorHandler, false);

function showColorHandler(e) {
	var r = parseInt(0);
	var g = parseInt(50);
	var b = parseInt(0);

	colorBar.style.backgroundColor  = "rgb(" + r + "," + g + "," + b + ")";			
};


function clearColorHandler(e) {
	clear();
};

function clear() {
    colorBar.style.backgroundColor= "White";
};

// function validate(r) {
//     if ( r >=256 || r < 1) {
//     else {
//             alert ("You must enter a number from 1-255");
//     }
// }
// }
// // function validate(g) {
// //     if ( r >=256 || r < 1) {
// //     alert ("You must enter a number from 1-255")
// //     }
// // }
// // function validate(b) {
// //     if ( r >255 || r < 1) {
// //     alert ("You must enter a number from 1-255")
// //     }
// // }