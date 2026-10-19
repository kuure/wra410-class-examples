// the elements we want access to
const body = document.querySelector("body");
const rslider = document.querySelector("#rslider");
const gslider = document.querySelector("#gslider");
const bslider = document.querySelector("#bslider");
const button = document.querySelector("button");

// listeners for the sliders - each logs the value
// then calls the "setRGB()" function below
rslider.addEventListener("input", (event) => {
	console.log("R Value:", event.target.value);
	setRGB();
});

gslider.addEventListener("input", (event) => {
	console.log("G Value:", event.target.value);
	setRGB();
});

bslider.addEventListener("input", (event) => {
	console.log("B Value", event.target.value);
	setRGB();
});


// listener for the button - calls the "randomRGB()"
// function below
button.addEventListener("click", () => {
	randomRGB();
});




// how do you make this work?
function setRGB() {
	// get the current values from each slider
	const r = rslider.value;
	const g = gslider.value;
	const b = bslider.value;

	// using template strings, create a valid RGB color
	// value using each of the numbers from above

	const newColor = `rgb(${r},${g},${b})`;
	console.log(newColor);
	body.style.backgroundColor = newColor;
	
	
}




// how do you make this work?
function randomRGB() {
	
	// one way

	// const r = Math.floor(Math.random() * 255);
	// const g = Math.floor(Math.random() * 255);
	// const b = Math.floor(Math.random() * 255);

	// a more flexible way 
	const r = randomValue(255);
	const g = randomValue(255);
	const b = randomValue(255);
	

	// set the backgroundColor property
	body.style.backgroundColor = `rgb(${r},${g},${b})`
}


// a separate helper function that returns a number between 0 and "maxNumber"
function randomValue(maxNumber) {
	return(Math.floor(Math.random() * maxNumber));
}
