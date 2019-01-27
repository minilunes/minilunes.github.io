var showButton = document.querySelector("#show");
var clearButton = document.querySelector("#clear");

showButton.addEventListener("click", showColorHandler, false);
clearButton.addEventListener("click", clearColorHandler, false);

function showColorHandler(e) {
	var r = parseInt(inputred.value);
	var g = parseInt(inputgreen.value);
	var b = parseInt(inputblue.value);

	colorBar.style.backgroundColor  = "rgb(" + r + "," + g + "," + b + ")";			
}


function clearColorHandler(e) {
	clear();
}

function clear() {
    colorBar.style.backgroundColor= "White";
}