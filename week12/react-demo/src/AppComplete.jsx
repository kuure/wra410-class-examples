import Header from './components/Header'
import Nav from './components/Nav'

import './css/stylesheet.css'

const navLinks = [
	{ "url" : "/", "text" : "Home"},
	{ "url" : "/about", "text" : "About"},
	{ "url" : "/contact", "text" : "Contact"},
	{ "url" : "/portfolio", "text" : "Portfolio"},
]


const RandomComponent = () => {
	return(
		<div>
			<p>The Random Component says: {Math.random()}</p>
		</div>
	)
}






function App() {

	return (
		<div>
			<Header/>
			<Nav navLinks={navLinks}/>
			<RandomComponent/>
			<RandomComponent/>
			<RandomComponent/>
		</div>
	)
}

export default App
