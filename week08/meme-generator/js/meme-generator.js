// query selectors

// both inputs, selected by their IDs
const noInput = document.querySelector("#noInput");
const yesInput = document.querySelector("#yesInput");

// both outputs, selected by class name 
const noText = document.querySelector(".noText");
const yesText = document.querySelector(".yesText");

// event listener for the noInput element, 
// listening for the 'input' event to fire
noInput.addEventListener("input", () => {
	// when it happens, set the value of the noText
	// element to be equal to the value in the <input>
	// AND turn it to UPPERCASE
	noText.innerHTML = noInput.value.toUpperCase()
});

// same as above, no and yes reversed
yesInput.addEventListener("input", (event) => {
	yesText.innerHTML = yesInput.value.toUpperCase()
});

