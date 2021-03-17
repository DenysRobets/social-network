import React from 'react';
import './Header.css';
import { MdExitToApp } from 'react-icons/md';

const Header = () => {
	return (
		<header className="header">
			<div className="logo_text">
				SocialNetwork
			</div>
			<div className="header_tools">
				<span className="header_tools__log_out">LogOut</span> <MdExitToApp />
				<img src="" alt="userLogo" />
			</div>
		</header>
	)
}

export default Header
