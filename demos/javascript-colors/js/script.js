const body = document.querySelector("body");
const rslider = document.querySelector("#rslider");
const gslider = document.querySelector("#gslider");
const bslider = document.querySelector("#bslider");
const button = document.querySelector("button");

rslider.addEventListener("input", (event) => {
	console.log(event.target.value);
});

gslider.addEventListener("input", (event) => {
	console.log(event.target.value);
});

bslider.addEventListener("input", (event) => {
	console.log(event.target.value);
});

button.addEventListener("click", () => {
	randomRGB();
});

function setRGB() {
	console.log("setRGB Function");
}

function randomRGB() {
	console.log("randomRGB Function");
}
