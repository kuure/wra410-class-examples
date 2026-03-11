/* what do we need here? */

// find inputbox, clear button, image container

const textInput = document.querySelector('.textInput');
const imageContainer = document.querySelector('.imageContainer');
const clearButton = document.querySelector('.clearButton');

// the output string, that goes in the div
let outputString = "";



clearButton.addEventListener('click', () => {
    outputString = "";
    textInput.value = "";
    imageContainer.innerHTML = "";
});



// listen for input in box
textInput.addEventListener('input',(e) => {
    console.log(e.data);

    if(Math.random() > 0.5) {
       outputString += e.data.toUpperCase();
    }
    else {
        outputString += e.data.toLowerCase();
    }
    imageContainer.innerHTML = outputString;

});
