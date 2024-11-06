// -------
// i like to set up all the variables first, at the top 
// -------
 

// find the element with the class of 'container'
const container = document.querySelector(".container")	


// what day of the week are we looking for? 
// this could come from a place like a drop-down menu...
const weatherDay = "saturday"



// where we get the data from 
// this is for east lansing, based on the latitude and longitude
const url = "https://api.weather.gov/gridpoints/GRR/82,39/forecast"


// -------
// then have the code get the data from the URL above
// -------


// get the data, if it works pass it to the function named
// "handleRemoteData(), otherwise print an error
fetchRemoteData()
	.then(results => handleRemoteData(results) ) 
	.catch(error => console.log(error))





// -------
// finally, do something with the data
// -------



// this is where our code goes
// it is handed our remote data as an argument, and
// can use it inside the curly braces by the name 'jsonData'
function handleRemoteData(jsonData) {

	// see what the data looks like
	console.log(jsonData)


	// we want to narrow down our data by digging into it, first
	// into the layer named "properties", then asking for the "periods"
	// layer which is an array of the nest 14 days of weather forecast

	// we can then create a new variable named 'newHTML' that loops through
	// the array and filters out what we don't want
	const newHTML = jsonData.properties.periods
	
		// this only allows ones where the 'isDaytime' property is true
		.filter(period => period.isDaytime === true)
	
		// this turns the name of the day to lower case, and checks if it
		// includes our weatherday variable
		.filter(period => period.name.toLowerCase().includes(weatherDay))

		// this final step takes each element left over - there should only be
		// one - and finally puts it into the newHTML variable, after wrapping
		// HTML around parts of it using the '.map()' tool in JavaScript
		.map(period => {
			return (`
				<div class="weather">
					<h1>${period.name} Weather</h1>
					<h2>${period.shortForecast}</h2>
					<p>${period.detailedForecast}</p>
				</div>
			`)
		})

		// finally, put the newHTML inside of the document
		container.innerHTML = newHTML

}




//-----
// this code is used above but shouldn't be modified
//-----



// don't even worry about this code
// you can pretend it doesn't exist
// but you need it for everything to work
async function fetchRemoteData() {
  const response = await fetch(url)
	if(!response.ok) {
    throw new Error(`HTTP error status: ${response.status}`)
	}
  return await response.json()
}


