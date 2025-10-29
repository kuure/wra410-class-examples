// the url where we get the JSON data
const url = 'https://jsonplaceholder.typicode.com/users'; 

// the html container
const container = document.querySelector('.container');




// run everything by calling the 'doTheWholeThing()' function with the URL as an argument
doTheWholeThing(url);


// the function that runs everything
async function doTheWholeThing(url) {
	// get the data
	const data = await getData(url);
	// pass the data and contiainer to the function that formats everything
	formatData(data,container);
}



// the function that gets the data
async function getData(url) {
	const response = await fetch(url);
	const data = await response.json();
	return data;
}



// the unction that processes the data and formatted HTML
function formatData(data) {
	const newHTML = data.map( person => {
		return(`
			<h1>${person.name}</h1>
			<h2>${person.phone}</h2>
		`)
	}).join("")
	return(newHTML);
}
