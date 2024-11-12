// first: get the elements we need to know about into variables

// the select menu
const selectMenu= document.querySelector("select")
console.log(selectMenu)

// the document body
const body = document.querySelector("body")
console.log(body)


// second: figure out which one is selected and what that means

// add an event listener to the select menu; this one
// looks for the 'change' event, then calls the function named
// 'handleSelectChange()'
selectMenu.addEventListener("change", () =>  handleSelectChange())


// third: change the DOM to reflect the changes

// this is the function that gets called
function handleSelectChange() {
	
	// what is the current value of the select menu?
	console.log("Select Menu Value: ",selectMenu.value)

	// the classList property is a list of all the classes
	// applied to any DOM element 
	console.log("Current Body Classes: ",body.classList)

	// start by removing everything there - there are ways
	// to add, toggle, or replace values but this is like
	// a CSS reset
	console.log("removing all <body> classes")
	body.classList.value = ""

	// finally, since each value in the drop down menu matches
	// a class name in the CSS file we can just that to the
	// body class list and it will style everything
	console.log(`adding class ${selectMenu.value} to the <body> element`)
	body.classList.add(selectMenu.value)

}

