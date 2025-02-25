// define the button
const myButton = document.querySelector("button");

// add an event listener for the 'click' event
myButton.addEventListener("click", () => {
	const newColor = randomRGBColor()
	console.log(newColor)
})


// add an event listener for the 'mouseout' event
myButton.addEventListener("mouseout", () => {
})


// add an event listener for the 'mouseover' event
myButton.addEventListener("mouseover", () => {
	console.log("your mouse entered the button");
})



// what the heck does this do?
function randomRGBColor() {
	let r = Math.floor(Math.random() * 255);
	let g = Math.floor(Math.random() * 255);
	let b = Math.floor(Math.random() * 255);
	return `rgb(${r},${b},${g})`;
}







