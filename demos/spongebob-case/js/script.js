// variables to handle the three things we need to interact with
const input = document.querySelector('.inputBox');
const output = document.querySelector('.outputBox');
const button = document.querySelector('.clear');

// create an empty string with 'let' so its value can change
let outputString = "";


// reset the text box and image text with a button
button.addEventListener('click',() => {
	input.value = "";
	output.innerHTML= "";
});


// code that listens for the input event on the text box
input.addEventListener('input', (e) => {
	
	// putting a variable name in the parentheses gives you access to
	// all the information about the event
	console.log(e.data);

	// the 'data' property is the most recent change
	const letter = e.data;

	// check if a number between 0 and 0.999 is greater than or 
	// less than 0.5, so essentially a coin toss
	if (Math.random() > 0.5) {
		// if it is, make the letter upper case and add it to the end of the
		// output string
		outputString += letter.toUpperCase();
	} else {
		// otherwise, make it lower case
		outputString += letter.toLowerCase();
	}

	// take the current iteration of the output string and put 
	// it into the container
	output.innerHTML = outputString;

});


