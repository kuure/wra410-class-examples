// query selector for the main container
const container = document.querySelector(".container");


// sample event handler - it listens for the 'click' event, then
// console logs some text followed by the JavaScript event itself
container.addEventListener("click", (event) => {
	console.log("You clicked the somewhere inside the '.container' div...")
	console.log(event)
});

// add your own stuff below...
