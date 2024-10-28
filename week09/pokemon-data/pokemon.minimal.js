const outputContainer = document.querySelector("#container")

buildPage(pokemonArray)

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
