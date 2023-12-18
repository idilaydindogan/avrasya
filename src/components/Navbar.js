"use client";
import Image from "next/image";
import React, { useState } from "react";
// import logo from "../../public/company_logo.png";
import logo from "../../public/logo.png";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
	const [visiable, setVisible] = useState(false);
	return (
		<nav className="w-full h-48">
			<div className="md:flex justify-evenly items-center text-white hidden ">
				<Link href={"/"}>Home</Link>
				<Link href={"/"}>Sektörler</Link>

				<Link href={"/"}>
					<Image src={logo} width={400} height={400} />
				</Link>
				<Link href={"/"}>Teknolojiler</Link>
				<Link href={"/"}>İletişim</Link>
			</div>
			<div className="flex justify-between text-white md:hidden">
				<Link href={"/"}>
					<Image
						src={logo}
						width={300}
						height={300}
						className="-left-12 -top-4 absolute"
					/>
				</Link>
				{!visiable && (
					<button className="pt-16 pr-8" onClick={() => setVisible(true)}>
						<GiHamburgerMenu size={22} />
					</button>
				)}
				{visiable && (
					<div className=" flex flex-col pl-10 pt-10 space-y-4 bg-white  text-primary_Navy w-[50%] h-screen ">
						<div className="w-full flex justify-end pr-6">
							<RxCross2
								className="cursor-pointer"
								size={22}
								onClick={() => setVisible(false)}
							/>
						</div>
						<div className="flex flex-col space-y-4">
							<Link href={"/"}>Home</Link>
							<Link href={"/"}>Sektörler</Link>
							<Link href={"/"}>Teknolojiler</Link>
							<Link href={"/"}>İletişim</Link>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
