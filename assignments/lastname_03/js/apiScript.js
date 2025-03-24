// step 1: define where your JSON data is coming from
// you will need to change this to one of your choosing
const url = "https://jsonplaceholder.typicode.com/users"


// step 2: call the fetchRemoteData() function with 
// your JSON api url as an argument
fetchRemoteData(url)



// step 4: this is where your code is going to go
// this is where you do whatever it is you need to do 
// with your data and the DOM to make a nice web application
function buildPage(jsonData) {
  console.log(jsonData)
}




// step 3: this function goes out and gets the data 
// from the internet, checks for errors, and if all
// goes well it passes the data to the buildPage() function 
// above
async function fetchRemoteData(location) {
	const response = await fetch(location)
	if (!response.ok) {
		throw new Error(`An error has occured: ${response.status}`)
	}
	const jsonResponse = await response.json()
	buildPage(jsonResponse)	
}
