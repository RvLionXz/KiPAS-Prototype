import React from "react";
import { Link } from "react-router-dom";
import logoKiPAS from "../assets/logo.png";

const Header = () => {
	return (
		<header className="flex items-center mb-12">
			<Link to="/" className="flex items-center space-x-3">
				<img src={logoKiPAS} alt="KIPAS Logo" className="h-20 w-auto" />
			</Link>
		</header>
	);
};

export default Header;
