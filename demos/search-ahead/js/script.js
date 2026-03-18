// our future data
let items = [];

// HTML elements
const searchInput = document.querySelector("input");
const suggestionsBox = document.querySelector(".suggestions");


// get the remote data
loadData();


// your basic data fetching, this time reading 
// a file from the local filesystem
async function loadData() {
  try {
    const response = await fetch("/js/allpokemon.json");
    items = await response.json();
  } catch (err) {
    console.error("Error loading JSON:", err);
  }
}


// when there is input in the box...
searchInput.addEventListener("input", () => {

	// get the value and set to lowercase
  const query = searchInput.value.toLowerCase();
	// reset the suggest box to empty
  suggestionsBox.innerHTML = "";

	// if no text in the query...
  if (query.length === 0) return;
  
	// filer all the aray items into a new array but only IF they include
	// the query text
	const filtered = items.filter(item =>
    item.name.toLowerCase().includes(query)
  );

	// for each item that passes the filter...
  filtered.forEach(item => {
		// create a new "p" element
    const p = document.createElement("p");
		// put the items's name inside the new <p>
    p.textContent = item.name;

		// add an event listener for each new paragraph element
    p.addEventListener("click", () => {
			// when you click each one, set value in the search box to the item's name
      searchInput.value = item.name;
			// blank all the existind suggestions
      suggestionsBox.innerHTML = "";
    });

		// append this new <p> to the suggestio box
    suggestionsBox.appendChild(p);
  });
});

