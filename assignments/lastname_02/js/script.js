// selectors 
const mouseoverMessage= document.querySelector(".mouseoverMessage");
const clickButton = document.querySelector(".clickButton");

// basic mouseover listener
mouseoverMessage.addEventListener("mouseover", () => {
	console.log("element was mousedover-ed");
})


// log the "event" when the button is clicked
clickButton.addEventListener("click", (event) => {
	console.log(event);
})



