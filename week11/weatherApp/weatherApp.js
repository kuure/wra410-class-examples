// where we are putting the output
const container = document.querySelector(".container")	

// where we get the data from 
const url = "https://api.weather.gov/gridpoints/GRR/82,39"

// get the data, if it works then pass it to the function named
// "handleRemoteData(), otherwise print an error
fetchRemoteData()
	.then(results => handleRemoteData(results) ) 
	.catch(error => console.log(error))


// this is where our code goes
function handleRemoteData(jsonData) {

console.log(jsonData)





}



// don't even worry about this code
// you can pretend it doesn't exist
async function fetchRemoteData() {
  const response = await fetch(url)
	if(!response.ok) {
    throw new Error(`HTTP error status: ${response.status}`)
	}
  return await response.json()
}


