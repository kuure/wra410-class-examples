// define the button
const myButton = document.querySelector("button");

// add an event listener for the 'click' event
myButton.addEventListener("click", () => {
	console.log("you clicked the button")
})


// add an event listener for the 'mouseover' event
myButton.addEventListener("mouseover", () => {
	console.log("your mouse entered the button");
})


// add an event listener for the 'mouseout' event
myButton.addEventListener("mouseout", () => {
	console.log("your mouse exited the button");
})



// what the heck does this do,
// and what can you use it for?
function randomRGBColor() {
	let r = Math.floor(Math.random() * 255);
	let g = Math.floor(Math.random() * 255);
	let b = Math.floor(Math.random() * 255);
	return `rgb(${r},${b},${g})`;
}







