// the url for any API that returns JSON data
const url = "https://baddayeveryday.com/api/json/pokedemo/"

// the container
const container = document.querySelector(".container")



// call the function at the bottom to set everything in motion
// it will fetch the data from the URL, then call the buildPage()
// function above with the results in JSON format
fetchRemoteData(url)


// the function that formats the data and returns HTML
function buildPage(dataArray,element) {

	const dataHTML = dataArray.map(dataItem => {

	return(`
	<div class="item">
		<div class="text">
			<h1>${dataItem.name}</h1>
			<h2>${dataItem.species}</h2>
			<p>Type: ${dataItem.type.join(", ")}</p>
		</div>

		<figure>
			<img src="${dataItem.image}" alt="${dataItem.name}"/>
		</figure>

	</div>
	`)}).join("");

	element.innerHTML = dataHTML;

}




/* 

fetchRemoteData() - 

this function is passed a URL as an argument, and uses the JavaScript
fetch() tool to get the remote data in the background

if the respons from the server is not ok, it prints an error message

otherwise, it takes the results, turns them into JSON, and passes them to
the function named "buildPage()" along with the element to fill with the new HTML

*/

async function fetchRemoteData(location) {
	const response = await fetch(location)
	if (!response.ok) {
		throw new Error(`An error has occured: ${response.status}`)
	}
	const jsonResponse = await response.json()
	buildPage(jsonResponse,container)	
}

