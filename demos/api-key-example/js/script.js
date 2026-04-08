// Load variables from .env
require('dotenv').config(); 
const apiKey = process.env.MY_API_KEY;
	//
// Example usage
const url = 'https://kuurola.com/api/json/pokedemo/';

// get the data
const data = fetchDataWithApiKey(url, apiKey);

console.log(data)

async function fetchDataWithApiKey(url, apiKey) {

		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'X-API-Key': apiKey, 
				'Accept': 'application/json' 
			}
		});

		if (!response.ok) {
			throw new Error(`An error has occured: ${response.status}`)
		}

		const json = await response.json();
		return json;
}






