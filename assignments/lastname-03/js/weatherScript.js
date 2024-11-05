// find the element with the class of 'container'
const container = document.querySelector(".container")	

// the API where your data comes from
// you have to set this up
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

	// style something based on the weather - 
	// a different color scheme based on the weather,
	// dark / light mode for sunrise and sunset times, etc.
	
	// anything where the user interface looks is determined by the
	// values in your data




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


