// the url for any API that returns JSON data
const url = "https://baddayeveryday.com/api/json/pokedemo/";

// the html container
const container = document.querySelector(".container");

// immediately call the function that runs all the other functions
doTheWholeThing();

async function doTheWholeThing() {

	// first, get the remote data
	const data = await getData();
	// when we have it, print to the console
	console.log(data);

	// then pass the data to a function that does *something* to it
	const result = processData(data);
	
	// finally, print the processed data to the console 
	// and insert the results into the container element
	console.log(result);
	container.innerHTML = result;
}


// the function that fetches the remote data
async function getData() {
	const response = await fetch(url);
	// check for any errors
	if (!response.ok) {
		throw new Error(`An error has occured: ${response.status}`)
	}
	const json = await response.json();
	return json; // returns the JSON data
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
