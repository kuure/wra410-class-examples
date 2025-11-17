// the element we want to access later
const nav = document.querySelector('nav');

// how do we encode our navigation?
const navLinks = [ 
	{"url" : '#', "text" : "Home Page"},
	{"url" : '#about', "text" : "About"},
	{"url" : '#contact', "text" : "Contact Us"},
];

// clicking on the links causes the 'hashchange' event
window.addEventListener('hashchange', () => {
	buildNav();
});

// build the nav when the page loads
window.addEventListener('load', () => {
	buildNav();
});


// build the nav bar from the navLinks array
function buildNav() {
	
	const hash = window.location.hash;
	
	// loop the links and use .map() to format each one
	const navHTML = navLinks.map(link => {
		console.log(hash === "")
		if (hash.endsWith(link.url)) {
			return `
				<li><a href="${link.url}" class="current">${link.text}</a></li>
			`;
		} else {
			return `
				<li><a href="${link.url}">${link.text}</a></li>`;
		}
	})
	.join('');
	nav.innerHTML = `<ul>${navHTML}</ul>`;
}
