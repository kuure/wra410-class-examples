// the hourly forecast API 

// east lansing, MI
const url = "https://api.weather.gov/gridpoints/GRR/82,39/forecast/hourly";

// tucson, AZ
//const url = "https://api.weather.gov/gridpoints/TWC/82,53/forecast/hourly"


// the html container
const container = document.querySelector(".weather");


// immediately call the function that runs all the other functions
weatherApp();




// the main weatherApp() function
async function weatherApp() {
	console.log("In the main weatherApp() function");
	// get the data
	const data = await getData(url);
	// process the data
	const result = processData(data);
	// put it into the HTML
	container.innerHTML = result;
}


// this function takes the JSON data and formats it
function processData(dataArray) {
	
	console.log("In the processData() function");

	// we want the first element of the "periods" array in the "properties" category
	// this contains weather values for the current hour
	const today = dataArray.properties.periods[0];
	
	// set up a variable to be given a value later
	let style = "";

	// if the "temperature" value is less than or equal to 32
	if(today.temperature <= 32) {
		style = "cold";
	}
	// greater than 32, less than or equal to 70
	else if(today.temperature > 32 && today.temperature <= 70) {
		style = "warm";
	}
	// any other situation
	else {
		style = "hot";
	}

	// create the actual HTML we want to display, with placeholders
	// for the "style" value, the temp value and temp units
	const output = `
	<div class="${style}">
		Temp is ${today.temperature}${today.temperatureUnit}
	</div>
	`;

	// hand that block of html back to whatever called this function
	return(output)

}



// this gets the data, you can ignore this
async function getData(dataUrl) {
	const response = await fetch(dataUrl);
	if (!response.ok) {
		throw new Error(`An error has occured: ${response.status}`)
	}
	const json = await response.json();
	console.log("in the getData() function");
	return json; 
}

