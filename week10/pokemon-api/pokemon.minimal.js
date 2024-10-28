const outputContainer = document.querySelector("#container")
const url = "https://baddayeveryday.com/api/json/pokedemo/"

fetchRemoteData()
	.then(results => buildPage(results) ) 
	.catch(error => console.log(error))

async function fetchRemoteData() {
  const response = await fetch(url)
	if(!response.ok) {
    throw new Error(`HTTP error status: ${response.status}`)
	}
  return await response.json()
}


function buildPage(pokemonArray) {
	const pokemonHTML = pokemonArray.map( pokemon => {
		return(`
			<div class="pokemon">
				<div class="text">
					<h1>${pokemon.name}</h1>
					<h2>${pokemon.species}</h2>
					<p>
						${pokemon.type.length === 1 ? 'Type:' : 'Types:'}
						${pokemon.type.join(", ")}
					</p>
				</div>
				<figure>
					<img src="${pokemon.image}" alt="${pokemon.name}"/>
				</figure>
			</div>
		`)
	}).join("")
	outputContainer.innerHTML = pokemonHTML
}
