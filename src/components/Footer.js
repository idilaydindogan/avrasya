import Image from "next/image";
import React from "react";
import logo from "../../public/logo.png";

function Footer() {
	return (
		<div className="h-36 w-full bg-footerBody border-t border-t-secondary_Navy">
			<Image src={logo} width={180} height={180} />
			<div></div>
		</div>
	);
}

export default Footer;
