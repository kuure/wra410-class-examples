// define the button
const myButton = document.querySelector("button");

// what do we want to style?
const body = document.querySelector("body");



// add an event listener for the 'click' event
myButton.addEventListener("click", () => {

	console.log("you clicked the button")

	const color1 = randomRGBColor();
	const color2 = randomRGBColor();
	const color3 = randomRGBColor();


	console.log(color1,color2,color3);

	myButton.style.color = color1;
	myButton.style.backgroundColor = color2;
	body.style.backgroundColor = color3;


})


// what the heck does this do,
// and what can you use it for?
function randomRGBColor() {
	let r = Math.floor(Math.random() * 255);
	let g = Math.floor(Math.random() * 255);
	let b = Math.floor(Math.random() * 255);
	return `rgb(${r},${b},${g})`;
}

