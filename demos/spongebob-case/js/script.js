// variables to handle the two things we need to interact with
const input = document.querySelector('.inputBox');
const output = document.querySelector('.outputBox');

let outputString = '';

// code that listens for the input event on the text box
input.addEventListener('input', () => {
	// code that grabs the current value of the input box
	const inputText = input.value;
	console.log('Input Text:', inputText);

	// make a new array from the input text string
	const inputTextArray = inputText.split('');
	console.log('Input Text Array', inputTextArray);

	// make a new array called outputText, using
	// .map() to change the output of each letter
	const outputText = inputTextArray.map(letter => {
		if (Math.random() > 0.5) {
			return letter.toUpperCase();
		} else {
			return letter.toLowerCase();
		}
	});

	output.innerHTML = outputText.join('');
});
