// this is a component named 'Header'
const Header = ({children}) => {

	return (
		<header>
			<h1>This is the Header Component</h1>

			{children}

		</header>
	)

}

export default Header
