// the URL that returns your JSON
// this example uses placeholder data
const url = "https://jsonplaceholder.typicode.com/users"


// call the function to set everything in motion
fetchRemoteData(url)


// this function deals with your data
function buildPage(apiData) {

	// log the result
	console.log(apiData)

	// what else do you want to do with it...?

}





// this function handles your business for you
// and passes the results to the function above
// you don't need to chane anything here
async function fetchRemoteData(location) {
	const response = await fetch(location)
	if (!response.ok) {
    throw new Error(`An error has occured: ${response.status}`)
	}
	const jsonResponse = await response.json()
	buildPage(jsonResponse)	
}

