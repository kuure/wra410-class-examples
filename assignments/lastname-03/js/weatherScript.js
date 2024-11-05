// find the element with the class of 'container'
const container = document.querySelector(".container")	

// the API where your data comes from
// you have to set this up, getting the 
// values from a drop-down menu
const url = ""


// get the data, if it works pass it to the function named
// "handleRemoteData(), otherwise print an error
fetchRemoteData()
	.then(results => handleRemoteData(results) ) 
	.catch(error => console.log(error))


// this is where your code goes
function weatherApp(weatherData) {

	// see what the data looks like
	console.log(weatherData)

	// the rest is up to you, you need to print the place name
	// and at least TWO properties about the weather of your choosing
	// using the national weather service API



}








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


