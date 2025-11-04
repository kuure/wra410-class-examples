// the hourly forecast API 
const url = "https://api.weather.gov/gridpoints/GRR/82,39/forecast/hourly"

// the html container
const container = document.querySelector(".container");


// immediately call the function that runs all the other functions
weatherApp();





// the main weatherApp() function
async function weatherApp() {
	// get the data
	const data = await getData();
	// process the data
	const result = processData(data);
	// put it into the HTML
	container.innerHTML = result;
}




// this gets the data, you can ignore this
async function getData() {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`An error has occured: ${response.status}`)
	}
	const json = await response.json();
	return json; 
}




// this processes the data, you need to customize this
function processData(dataArray) {

	// today is always the first element in the 'periods' array
	// we can assign this to a variable to simplify referring to it
	const today = dataArray.properties.periods[0];

	// just get the 'temperature' property from the 'today' variable
	const temp = today.temperature;

	// create a variable that does not have a value assigned yet
	// we need to give this a value later so we use 'let'
	let style;


	// if the temp is above 80 
	if(temp >= 80) {
		style ="hot";
	}
	
	// if the temp is less than 80 AND equal or greater than 65
	else if(temp < 80 && temp >= 65) {
		style ="warm";
	}

	// if the temp is less than 65 AND equal or greater than 40
	else if(temp < 65 && temp >= 40) {
		style ="chilly";
	}
	
  // if the temp is less than 40
	else if(temp < 40) {
		style = "cold"
	}

	// now 'style' should be one of four words that you can use in CSS
	// this applies to styles to each div - the 'weather' one that all
	// share, plus the 'style' one that customizes the background color
	const output = `
	<div class="weather ${style}">
		${temp}
	</div>
	`;

	// return the formatted string of text
	return(output)

}
