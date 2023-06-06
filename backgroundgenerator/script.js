var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
function randomBackground(){
	color1.value = randomColor();
	color2.value = randomColor ();
	setGradient();
}

//found on stackoverflow
function randomColor(){
	let hexColor = Math.random().toString(16);
	hexColor = "#" + hexColor.slice(2, 8);
	return hexColor;
}



color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomBackground);
