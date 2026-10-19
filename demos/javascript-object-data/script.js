const container = document.querySelector(".container");


// make your object
const personOne = {
	"firstName": "Jeff",
	"lastName": "Kuure",
	"birthYear": 1974,
	"currentlyAlive": true
}


// get your values printed below

const newHTML = `
<h1>${personOne.firstName} ${personOne.lastName}</h1>
<h2>Born: ${personOne.birthYear}</h2>
<ul>
  <li>Alive? ${personOne.currentlyAlive}</li>
</ul>
`;


container.innerHTML = newHTML;


