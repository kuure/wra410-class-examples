const container = document.querySelector(".container");


// create an object
const personOne = {
	"firstName": "Jeff",
	"lastName": "Kuure",
	"birthYear": 1974,
	"currentlyAlive": true
}


// print the object to the console
console.log(personOne);


// print the 'firstName' property
console.log(personOne.firstName);



// create a new string variable, named 'newHTML', with literal text
// mixed with JavaScript values using template literals:
const newHTML = `
<h1>${personOne.firstName} ${personOne.lastName}</h1>
<h2>Born: ${personOne.birthYear}</h2>
<ul>
  <li>Alive? ${personOne.currentlyAlive}</li>
</ul>
`;

// take the string we just made and insert it into the DOM:
container.innerHTML = newHTML;


