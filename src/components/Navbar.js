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
		<nav className="w-full h-60">
			<div className="md:flex justify-evenly items-center text-white hidden ">
				<Link href={"/"}>Home</Link>
				<Link href={"/"}>Sektörler</Link>
				<div className=" md:h-[200px] ">
					<Link href={"/"}>
						<Image
							src={logo}
							sizes="100vw"
							style={{ width: "100%", height: "100%" }}
						/>
					</Link>
				</div>
				<Link href={"/"}>Teknolojiler</Link>
				<Link href={"/contact"}>İletişim</Link>
			</div>
			<div className="flex justify-between text-white md:hidden">
				<div className="  h-[150px]">
					<Link href={"/"}>
						<Image
							src={logo}
							sizes="100vw"
							style={{ width: "100%", height: "100%" }}
						/>
					</Link>
				</div>
				{!visiable && (
					<button className=" pr-8" onClick={() => setVisible(true)}>
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
							<Link href={"/contact"}>İletişim</Link>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
