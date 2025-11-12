// the element we want to access later
const nav = document.querySelector('nav');

// how do we encode our navigation?
const navLinks = [{ home: 'Home' }, { about: 'About' }, { contact: 'Contact' }];

window.addEventListener('hashchange', () => {
	buildNav();
	changeContent();
});

function buildNav() {}

function changeContent() {}
