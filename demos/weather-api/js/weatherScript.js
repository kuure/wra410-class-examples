// the weather API 
const url = "https://api.weather.gov/gridpoints/GRR/82,39/"
const forecast = "https://api.weather.gov/gridpoints/GRR/82,39/forecast"
const hourly = "https://api.weather.gov/gridpoints/GRR/82,39/forecast/hourly"

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
	const response = await fetch(hourly);
	// check for any errors
	if (!response.ok) {
		throw new Error(`An error has occured: ${response.status}`)
	}
	// if no errors, return the results
	const json = await response.json();
	return json; 
}



// the function that processes the data into HTML
function processData(dataArray) {
	return(dataArray);
}
