// this is a component named Nav;
// it is passed an arry of object to wrap into HTML links
const Nav = ({navLinks}) => {

	return (
		<nav>
			<ul>

				{navLinks.map((link,key) => {
					return (
						<li key={key}>
							<a href={link.url}>{link.text}</a>
						</li>
					)
				})}

			</ul>
		</nav>
	)

}

export default Nav
