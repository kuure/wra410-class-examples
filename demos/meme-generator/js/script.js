// what is important?

// - input with id 'noInput'
// - input with id 'yesInput'
// - p with class 'noText'
// - p with class 'yesText'

const noBox = document.querySelector("#noInput");
const noText = document.querySelector(".noText");

const yesBox = document.querySelector("#yesInput");
const yesText = document.querySelector(".yesText");


// how will it work?

// get the current value from yes input whenever 
// anything is typed (the 'input' event), then 
// make that value the p tag's innerHTML
yesBox.addEventListener("input",(e) => {
	console.log(e)
	console.log(yesBox.value);
	yesText.innerHTML  = yesBox.value;
})


// - same but with the no values
noBox.addEventListener("input",() => {
	console.log(noBox.value);
	noText.innerHTML  = noBox.value;
})
