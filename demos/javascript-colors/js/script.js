// the elements we want access to
const body = document.querySelector("body");
const rslider = document.querySelector("#rslider");
const gslider = document.querySelector("#gslider");
const bslider = document.querySelector("#bslider");
const button = document.querySelector("button");

// listeners for the sliders - each logs the value
// then calls the "setRGB()" function below
rslider.addEventListener("input", (event) => {
	console.log(event.target.value);
	setRGB();
});

gslider.addEventListener("input", (event) => {
	console.log(event.target.value);
	setRGB();
});

bslider.addEventListener("input", (event) => {
	console.log(event.target.value);
	setRGB();
});


// listener for the button - calls the "randomRGB()"
// function below
button.addEventListener("click", () => {
	randomRGB();
});

// how do you make this work?
function setRGB() {
	console.log("setRGB Function");
}

// how do you make this work?
function randomRGB() {
	console.log("randomRGB Function");
}
