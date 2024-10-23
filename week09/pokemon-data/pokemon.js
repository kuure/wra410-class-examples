/*
 define the element in the HTML where everything is going to going to go
*/
const outputContainer = document.querySelector("#container")

/*
 buildPage()
 this is called with the Pokemon array above as an 
 argument. It then  uses .map() extract parts and 
 wrap them into HTML
*/
buildPage(pokemonArray)

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
