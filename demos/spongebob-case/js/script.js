// variables to handle the two things we need to interact with
const input = document.querySelector('.inputBox');
const output = document.querySelector('.outputBox');

// create an empty string with 'let' so its value can change
let outputString = "";


// code that listens for the input event on the text box
input.addEventListener('input', (event) => {
	
	// the "event" tells us all sorts of info about what the user did
	console.log(event);

	// the 'data' property is the most recent change
	const letter = event.data;

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

