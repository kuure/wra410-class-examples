/*
	 This is the data that we want to format into HTML to display on a page

	This set of data is in an _array_, or a container for multiple "things" in a
	certain order. These things can be strings, numbers, boolean values, even
	other arrays or objects

	In this case, each "thing" is an _object_, a structure in JavaScript that
	contains any number of key/value pairs. Every _key_ is a word of some sort,
	like a variable name; the _value_ associated with each _key_ can be any
	of the same things that can be in arrays

	In web development, it is very common data formatted as an _array_ that
	contains any number of _objects_. Arrays are easy to loop through in order to
	do some sort of action to each item encountered, while objects
	are great for defining the kinds of things you might want to display on a web
	page - search results, photos with captions with links, comments, etc.

 
*/
const data = [
  {
	"name":"Bulbasaur",
	"species":"Seed Pokémon",
	"image":"https://baddayeveryday.com/images/pokemon/bulbasaur.jpg",
	"type":[ 
			"poison", "grass" 
		]
  },
	{ "name":"Charmander", "species":"Lizard Pokémon", "image":"https://baddayeveryday.com/images/pokemon/charmander.jpg", "type":[ "fire" ] },
	{ "name":"Sandshrew", "species":"Mouse Pokémon", "image":"https://baddayeveryday.com/images/pokemon/sandshrew.jpg", "type":[ "ground" ] },
	{ "name":"Diglett", "species":"Mole Pokémon", "image":"https://baddayeveryday.com/images/pokemon/diglett.jpg", "type":[ "ground" ] },
	{ "name":"Snorlax", "species":"Sleeping Pokémon", "image":"https://baddayeveryday.com/images/pokemon/snorlax.jpg", "type":[ "normal" ] },
	{ "name":"Piloswine", "species":"Swine Pokémon", "image":"https://baddayeveryday.com/images/pokemon/piloswine.jpg", "type":[ "ice", "ground" ] },
	{ "name":"Houndoom", "species":"Dark Pokémon", "image":"https://baddayeveryday.com/images/pokemon/houndoom.jpg", "type":[ "dark", "fire" ] },
	{ "name":"Ludicolo", "species":"Carefree Pokémon", "image":"https://baddayeveryday.com/images/pokemon/ludicolo.jpg", "type":[ "water", "grass" ] },
	{ "name":"Umbreon", "species":"Moonlight Pokémon", "image":"https://baddayeveryday.com/images/pokemon/umbreon.jpg", "type":[ "dark" ] },
	{ "name":"Tentacruel", "species":"Jellyfish Pokémon", "image":"https://baddayeveryday.com/images/pokemon/tentacruel.jpg", "type":[ "water", "poison" ] },
];


// how do you get this all formatted and inserted into the DOM?



