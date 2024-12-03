//---------------------------------------------
//
// Part 1: 
//
// the important things store as variables 
//
//---------------------------------------------

// the url for the weather data
const url = "https://api.weather.gov/gridpoints/MLB/36,102/forecast"

// the element to style 
const body = document.querySelector("body")

// the container where our output goes
const container = document.querySelector(".container")

// the select box that we need to pay attention to 
const selectBox = document.querySelector("select")





//---------------------------------------------
//
// Part 2: 
//
// The event handler that connects the drop
// down menu to the rest of the code
//
//---------------------------------------------


// listen for the "change" event on the select box;
// call the 'handleSelectChange()' function when it does
// and let it know what event caused it to happen
selectBox.addEventListener("change", (event) =>  handleSelectChange(event))




//---------------------------------------------
//
// Part 3: 
//
// the functions that do everything
//
//---------------------------------------------


// this is called whenever the select box is changed
function handleSelectChange(event) {
	
	// Call the 'fetchRemoteData()' function below
	// functions can call other funcions...
	fetchRemoteData()

		// if there are results, call the "buldPage()" function 
		// also pass in the value from the event, which is the
	  // value from the drop-down menu 
		.then(results => buildPage(results,event.target.value))

		// if there are no results, print an error
		.catch(error => console.log(error))
}




// build the page content based on the weather for a specific day
function buildPage(pageData,day) {

	// digging into the pageData to get the array element
	// from the 'periods' that matches with the value from
	// the drop-down menu
	const forecast = pageData.properties.periods[day]
	// print it to the console
	console.log(forecast)


	// pass the forecast to the function that 
	// styles the page based on the weather
	// it just puts all that code in a different place
	// to keep it cleaner here
	stylePage(forecast)


	// make a string that combines text and values
	// from the forecast
	const newHTML = `
		<h1>Weather for ${forecast.name}</h1>
		<p>${forecast.shortForecast}</p>
		<p>Wind: ${forecast.windDirection} ${forecast.windSpeed} </p>
		<p>Temperature: ${forecast.temperature} ${forecast.temperatureUnit} </p>
	`

	// put the new string inside of the container
	container.innerHTML = newHTML;
}



// change the style of the page based on
// the temperature
function stylePage(forecast) {

	// put this into a variable
	const temp = forecast.temperature

	// if it's warm
	if(temp >= 70) {
		body.classList.value = "warm"
	}
	// if it's medium
	else if(temp < 70 && temp >= 60) {
		body.classList.value = "medium"
	}
	// anything else means its cold
	else {
		body.classList.value = "cold"
	}
}




// this is the function that gets the data
// you can safely ignore it
async function fetchRemoteData() {
  const response = await fetch(url)
	if(!response.ok) {
    throw new Error(`HTTP error status: ${response.status}`)
	}
  return await response.json()
}

