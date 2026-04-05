// the dialog element
const dialog = document.querySelector("dialog");

// has the modal been displayed?
let shown = false;

// if the page has scrolled more than 20%, show the modal 
window.addEventListener("scroll", () => {
	if(!shown) {
		if(getScrollPercent() > 20) {
			dialog.showModal();
			shown = true;
		}
	}
})


dialog.querySelector("button").addEventListener("click", () => {
	dialog.close();
	shown = true;
})


function getScrollPercent() {
	const scrollTop = window.scrollY; 
	const docHeight = document.documentElement.scrollHeight; 
	const windowHeight = window.innerHeight; 
	return (scrollTop / (docHeight - windowHeight)) * 100;
}

