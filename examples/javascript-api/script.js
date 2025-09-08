// the url for any API that returns JSON data
const url = "https://jsonplaceholder.typicode.com/users"

const container = document.querySelector(".container")

// call the function at the bottom to set everything in motion
// it will fetch the data from the URL, then call the buildPage()
// function above with the results in JSON format
fetchRemoteData(url)



// this function deals with your data, you can customize
// it to do whatever you need to do
function buildPage(jsonData) {

	// for now, just log the result
	console.log(jsonData)

	// what else do you want to do with it...?

	const newHTML = jsonData.map( person => {
		return(`
			<h1>${person.name}</h1>
			<h2>${person.phone}</h2>
		`)
	}).join("")

	container.innerHTML = newHTML

}





/* 

fetchRemoteData() - 

this function is passed a URL as an argument, and uses the JavaScript
fetch() tool to get the remote data in the background

if the respons from the server is not ok, it prints an error message

otherwise, it takes the results, turns them into JSON, and passes them to
the function named "buildPage()"

*/

async function fetchRemoteData(location) {
	const response = await fetch(location)
	if (!response.ok) {
		throw new Error(`An error has occured: ${response.status}`)
	}
	const jsonResponse = await response.json()
	buildPage(jsonResponse)	
}

