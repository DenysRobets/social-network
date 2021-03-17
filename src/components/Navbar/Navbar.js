import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
	return (
		<nav className="nav">
			<div className="nav_link">
				<Link to="/profile">Profile</Link>
			</div>
			<div className="nav_link">
				<Link to="/dialogs">Dialogs</Link>
			</div>
			<div className="nav_link">
				<Link to="/news">News</Link>
			</div>
			{/* <div className="nav_link">
				<Link to="/music">Music</Link>
			</div> */}
			<div className="nav_link">
				<Link to="/settings">Settings</Link>
			</div>
		</nav>
	)
}

export default Navbar
