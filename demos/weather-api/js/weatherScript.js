// the hourly forecast API 
const url = "https://api.weather.gov/gridpoints/GRR/82,39/forecast/hourly";

// the html container
const container = document.querySelector(".container");


// immediately call the function that runs all the other functions
weatherApp();





// the main weatherApp() function
async function weatherApp() {
	// get the data
	const data = await getData(url);
	// process the data
	const result = processData(data);
	// put it into the HTML
	container.innerHTML = result;
}



function processData(dataArray) {

	const output = `
	<div>
		Hello There
	</div>
	`;

	return(output)

}



// this gets the data, you can ignore this
async function getData(dataUrl) {
	const response = await fetch(dataUrl);
	if (!response.ok) {
		throw new Error(`An error has occured: ${response.status}`)
	}
	const json = await response.json();
	return json; 
}

