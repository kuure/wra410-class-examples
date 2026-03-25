// the url for any API that returns JSON data
const url = "https://kuurola.com/api/json/pokedemo/";
const apiKey = 'THIS IS MY API KEY'; 

// the html container
const container = document.querySelector("#container");



// immediately call this, the main function that controls all the other functions
doTheWholeThing()




// this is a special type of function that runs 
// aynsyncronously, allowing you to get stuff over
// a network while allowing for latencies
async function doTheWholeThing() {

	// first, get the remote data
	const data = await getData(url,apiKey);
	
	// when we have it, print to the console
	console.log(data);

	// then pass the data to a function that does *something* to it
	const result = processData(data);
	
	// finally, print the processed data to the console 
	// and insert the results into the container element
	console.log(result);
	container.innerHTML = result;
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
async function getData(url,key) {

	// no API key needed
	const response = await fetch(url);
	
	/* IF YOU NEED AN API KEY:
	const response = await fetch(url, {
		method: 'GET',
		headers: {
			'X-API-Key': 'PUT YOUR KEY HERE',
			'Accept': 'application/json'
		}
	});
	*/


	// check for any errors
	if (!response.ok) {
		throw new Error(`An error has occured: ${response.status}`)
	}
	const json = await response.json();
	return json; // returns the JSON data
}



