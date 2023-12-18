import Image from "next/image";
import React from "react";
import logo from "../../public/logo.png";
import Link from "next/link";

const Navbar = () => {
	const navbar_titles = [
		{ name: "Sektörler", link: "/" },
		{ name: "Teknolojiler", link: "/" },
	];
	return (
		<nav className="w-full h-48">
			<div className="md:flex justify-evenly items-center text-white hidden ">
				<Link href={"/"}>Home</Link>
				<Link href={"/"}>Sektörler</Link>

				<Link href={"/"}>
					<Image src={logo} width={400} height={400} />
				</Link>
				<Link href={"/"}>Teknolojiler</Link>
				<Link href={"/"}>Iletişim</Link>
			</div>
			<div className="flex justify-evenly items-center text-white">
				<Link href={"/"}>Home</Link>
			</div>
		</nav>
	);
};

export default Navbar;
