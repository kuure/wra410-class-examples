/*
 define the element in the HTML where everything is going to going to go
*/
const outputContainer = document.querySelector("#container")


/*
 the URL of the REST API that returns JSON
*/
const url = "https://baddayeveryday.com/api/json/pokedemo/"

// call the fetchRemoteData() function
// the .then() method is invoked once the
// fetching of the data is complete; the
// .catch() method only gets called if there is 
// an error with returning the results
fetchRemoteData()
	// if it succeeds, pass the data to the buildPage() function
	.then(results => buildPage(results) ) 
	// if it fails, print the error to the console
	.catch(error => console.log(error))



/*
 fetchRemoteData()
 this is an function created with the 'async' keyword
 this is helpful with anything that needs to gather remote
 data before doing anything else
*/
async function fetchRemoteData() {
	
	// fetch the data from the API, using the 'await' keyword
	// to stop execution until the remote data has arrived
  const response = await fetch(url)

	// if there's an error, log it
	if(!response.ok) {
    throw new Error(`HTTP error status: ${response.status}`)
	}

	// otherwise, make sure the response exists, then 
	// convert it into JSON and return it
  return await response.json()
}


/*
 buildPage()
 this is called with the Pokemon JSON array from the API
 as an argument. It then uses .map() extract parts and
 wrap them into HTML
*/
function buildPage(pokemonArray) {

	// view the returned pokemon JSON array in the console
	console.log(pokemonArray)

	/*
	 define a new variable named "pokemonHTML"
	
	 the value of that variable is the results of looping 
	 over the array of pokemon objects and using the .map()
	 method to take elements of each object and put them 
	 into an HTML template
	*/
	const pokemonHTML = pokemonArray.map( pokemon => {


	/*
	 for each element, return a template string with 
   literal HTML text combined with the values from 
	 each object


		the code inside the <p> tag is a bit different -
		it uses a structure called a 'ternary' operator
		which is like a shorthand if/else statements. 

		it says "see if the length of the 'type' property is 
		equal to '1'; if yes, use 'Type:', otherwise use 'Types:'"

		next, it calls the .join() method to combine every 
		element in the array into a string, with a comma and
		space inbetween each element

*/
	return(`
	<div class="pokemon">

		<div class="text">
			<h1>${pokemon.name}</h1>
			<h2>${pokemon.species}</h2>
			<p>
				${pokemon.type.length === 1 ? 'Type:' : 'Types:'}
				${pokemon.type.join(", ")}
			</p>
		</div>

		<figure>
			<img src="${pokemon.image}" alt="${pokemon.name}"/>
		</figure>

	</div>
	`)

		// the ) below is closing the one opened for the map() method
		// once all that is done - meaning every element from the'
		// arrray has been processed - then join everything together
		// into a single string with no characters inbetween
	}).join("")

	// put the formatted HTML into the empty container in the document
	outputContainer.innerHTML = pokemonHTML
}
