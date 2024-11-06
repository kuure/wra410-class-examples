const container = document.querySelector(".container")	
const weatherDay = "thursday"
const url = "https://api.weather.gov/gridpoints/GRR/82,39/forecast"

console.log(weatherDay)

fetchRemoteData()
	.then(results => handleRemoteData(results) ) 
	.catch(error => console.log(error))


function handleRemoteData(jsonData) {

	console.log(jsonData)

	const newHTML = jsonData.properties.periods
		.filter(period => period.isDaytime === true)
		.filter(period => period.name.toLowerCase().includes(weatherDay))
		.map(period => {
			return (`
				<div class="weather">
					<h1>${period.name} Weather</h1>
					<h2>${period.shortForecast}</h2>
					<p>${period.detailedForecast}</p>
				</div>
			`)
		})
		container.innerHTML = newHTML

}




async function fetchRemoteData() {
  const response = await fetch(url)
	if(!response.ok) {
    throw new Error(`HTTP error status: ${response.status}`)
	}
  return await response.json()
}


