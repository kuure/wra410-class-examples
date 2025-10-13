// the element we want to access later
const nav = document.querySelector("nav")


// create an array of objects that encodes our navigation links - 
// each object has "url" and "text" properties to store the 
// things that you want to format into your links
const navLinks = [
	{"url" : "about", "text" : "About Us"},
	{"url" : "contact", "text" : "Contact"},
	{"url" : "home", "text" : "Home"},
	{"url" : "portfolio", "text" : "Portfolio"},
]


// set the innerHTML of the selected element to
// whatever the buildNavLinks() function returns
nav.innerHTML = buildNavLinks(navLinks)


// pass this function the array of objects above
// and it will return an unordered list of links
function buildNavLinks(navArray) {

	// loop through the array and wrap elements from the objects
	// in HTML, then put it into a variable named navHTML
	const navHTML = navArray.map(item => {
		return (`
			<li><a href="#${item.url}">${item.text}</a></li>
		`)
	})

	// wrap the elements in a <ul>, then put the array of links
	// inside of it before returning it to whatever called the function
	return (`
		<ul>
			${navHTML.join("")}
		</ul>
	`)

}

