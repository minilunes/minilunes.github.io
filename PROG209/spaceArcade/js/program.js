// Arrow key codes
let UP = 38,
	DOWN = 40,
    RIGHT = 39,
	LEFT = 37,
	ALIEN_UP = 87,
	ALIEN_DOWN = 90;

// rocket object
const rocket = {
	img: document.querySelector("#rocket"),
	x: 490,
	y: 390,
	width: 100
};

var ufo = {
	img: document.querySelector("#ufo"),
	x: 190,
	y: 190,
	width: 100
};

let velocity = 4;

var torpedo = document.querySelector("#torpedo"),
    startBtn = document.querySelector("#start"),
	fireBtn = document.querySelector("#fire");
	
// Initialize objects on the screen
render ( );

startBtn.addEventListener("click",startGameHandler,false);
fireBtn.addEventListener("click",fireTorpedoHandler,false)
window.addEventListener("keydown",keydownHandler,false);

"use strict;"
function startGameHandler( ) {
	// Hide the intro screen, show the game screen
	introScreen.style.display = "none";
	gameScreen.style.display = "block";
	rocket.img.style.display = "block";
	ufo.img.style.display = "block";
}

"use strict;"
function fireTorpedoHandler( ) {
	// Fire the photon torpedo!
	// CSS animation occurs whenever torpedo
	// 'left' property changes value
	torpedo.style.visibility = "visible";
	torpedo.style.left = (rocket.x - 200)+ "px";
	document.getElementById('blast').play();
}



"use strict;"
function keydownHandler(event) {
	// handle user keyboard input

	if (event.keyCode == UP) {
		rocket.y -= velocity;
	}
	if (event.keyCode == LEFT) {
		rocket.x -= velocity;
	}
	if (event.keyCode === DOWN) {
		rocket.y += velocity;
	}
	if (event.keyCode == RIGHT) {
		rocket.x += velocity;
	}
	if (event.keyCode == ALIEN_UP) {
		ufo.y -= velocity;
	}
	if (event.keyCode == ALIEN_DOWN) {
		ufo.y += velocity;
	}

	render( );
}

"use strict;"
function render( ) {
	// position objects on the screen
	rocket.img.style.left = rocket.x + "px";
	rocket.img.style.top = rocket.y + "px";
	torpedo.style.left = (rocket.x +10) + "px";
	torpedo.style.top = (rocket.y+8) + "px";
	torpedo.style.visibility = "hidden";
	ufo.img.style.left = ufo.x + "px";
	ufo.img.style.top = ufo.y + "px";
}