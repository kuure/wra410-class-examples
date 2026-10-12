// variables to handle the three things we need to interact with

// the input text box
const input = document.querySelector('.textInput');

// the image container div
const output = document.querySelector('.imageContainer');

// the clear button
const button = document.querySelector('.clearButton');


// create an empty string with 'let' so its value can change
// this is created right away so all the other code has access to it
let outputString = "";


// reset the text box, output string, and image text 
// listen for the 'click' event
button.addEventListener('click', () => {
	// set the text box, the output div, and the current printed
	// text to an empty string
	input.value = "";
	output.innerHTML = "";
	outputString = "";
});


// listen for the input event on the text box
// notice the 'event' in parentheses, this gives
// us access to the event that we are listening for
input.addEventListener('input', (event) => {

	// the event has a property called "data" that represents 
	// the value of whatever was entered to trigger the event
	console.log(event.data);

	// take that value - the most recent letter - and assign
	// it to a variable named "letter"
	const letter = event.data;


	// we want to randomly make the letter either upper or lower case
	// the Math.random() tool in JS gives a numer between 0 and .999
	// there is roughly an equal chance that it will be greater than
	// or less than .5
	if (Math.random() > 0.5) {
		// if greater than .5, append the "letter" to the existing
		// output string after making it uppercase
		outputString += letter.toUpperCase();

	} else {
		// otherwise, make it lower case
		outputString += letter.toLowerCase();
	}

	// take the current value of the output string and put 
	// it into the container
	output.innerHTML = outputString;

});

