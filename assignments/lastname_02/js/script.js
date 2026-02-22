// selector for the element 
const clickButton = document.querySelector(".clickButton");


// listen for the 'click' event, then do two things:
// - print literal text to the console
// - print all the info about the event that triggered this
clickButton.addEventListener("click", (event) => {
	console.log("Click Event On Button");
	console.log(event);
})


