// first: get the elements we need to know about into variables

const currentSelection = document.querySelector("select")
console.log(currentSelection)

const body = document.querySelector("body")
console.log(body)


// second: figure out which one is selected and what that means
currentSelection.addEventListener("change", (event) => {
	console.log(event.selectedIndex)
});




// third: change the DOM to reflect the changes