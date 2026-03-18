// define where your JSON data is coming from
// you will need to change this to one of your choosing
const url = "https://kuurola.com/api/json/pokedemo/";

// the html container
const container = document.querySelector(".container");



// immediately call this, the main function that controls all the other functions
mainFunction()




// the main function - this gets the data, processes, and 
// puts it into the document
async function mainFunction() {

	// get the remote data by calling 'getData()'
	// with the URL as an argument... 
	const data = await getData(url);
	
	// when we have it, print to the console
	console.log(data);

	// then pass the data to a function that does *something* to it
	const formattedData = processData(data);
	
	// print the console to see what it looks like...
	console.log(formattedData);
	
	// finally, insert the results into the container element
	container.innerHTML = formattedData;
}




// the function that processes the data into HTML
function processData(dataArray) {

	// use the .map() tool to chop up and format parts
	// of the data 
	const formattedData = dataArray.map( dataItem => {
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
		return(formattedData);
}




// the function that fetches the remote data
async function getData(url) {
	const response = await fetch(url);
	// check for any errors
	if (!response.ok) {
		throw new Error(`An error has occured: ${response.status}`)
	}
	const json = await response.json();
	return json; // returns the JSON data
}
