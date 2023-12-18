import Image from "next/image";
import React from "react";
import logo from "../../public/logo.png";

const Navbar = () => {
	return (
		<nav className="w-full h-48">
			<div className="flex justify-center items-center">
				<Image src={logo} width={400} height={400} />
			</div>
		</nav>
	);
};

export default Navbar;
