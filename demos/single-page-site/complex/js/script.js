// the element we want to access later
const nav = document.querySelector('nav');

// how do we encode our navigation?
const navLinks = ['Home', 'About', 'Contact'];

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
	const navHTML = navLinks
		.map(link => {
			if (window.location.hash.endsWith(link.toLowerCase())) {
				return `
					<li><a href="#${link.toLowerCase()}" class="current">${link}</a></li>
				`;
			} else {
				return `
					<li><a href="#${link.toLowerCase()}">${link}</a></li>`;
			}
		})
		.join('');
	nav.innerHTML = `<ul>${navHTML}</ul>`;
}
