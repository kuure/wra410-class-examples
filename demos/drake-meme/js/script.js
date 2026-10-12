// get value(s) from box whenever anything is typed
// take those values and put them inside of the HTML somewhere...


// - input with id 'yesInput'
const yesInput = document.querySelector("#yesInput");
// - input with id 'noInput'
const noInput = document.querySelector("#noInput");

// - p with class 'yesText'
const yesText = document.querySelector(".yesText");
// - p with class 'noText'
const noText = document.querySelector(".noText");


// listen for the 'input' event
yesInput.addEventListener("input", () => {
	// set the yesText innerHTML to whatever is in 'yesInput'
	yesText.innerHTML = yesInput.value
});

noInput.addEventListener("input", () => {
	// set the noText innerHTML to whatever is in 'noInput'
	noText.innerHTML = noInput.value
});
