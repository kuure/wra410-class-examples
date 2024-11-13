import Header from './components/Header'
import Nav from './components/Nav'

import './css/stylesheet.css'

const navLinks = [
	{ "url" : "/", "text" : "Home"},
	{ "url" : "/about", "text" : "About"},
	{ "url" : "/contact", "text" : "Contact"},
	{ "url" : "/portfolio", "text" : "Portfolio"},
]

function App() {

	return (
		<div>
			<Header></Header>
			<Nav navLinks={navLinks}/>
		</div>
	)
}

export default App
