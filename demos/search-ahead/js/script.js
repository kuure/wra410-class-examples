// our future data
let items = [];

// HTML elements
const searchInput = document.querySelector("input");
const suggestionsBox = document.querySelector(".suggestions");


// get the remote data
loadData();


// your basic data fetching
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

  const query = searchInput.value.toLowerCase();
  suggestionsBox.innerHTML = "";

  if (query.length === 0) return;
  
	const filtered = items.filter(item =>
    item.name.toLowerCase().includes(query)
  );

  filtered.forEach(item => {
    const p = document.createElement("p");
    p.textContent = item.name;
    p.addEventListener("click", () => {
      searchInput.value = item.name;
      suggestionsBox.innerHTML = "";
    });
    suggestionsBox.appendChild(p);
  });
});

