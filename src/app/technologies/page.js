import TechDetails from "@/components/TechDetails";
import React from "react";

function page() {
	return (
		<section className="w-full px-20 mt-10">
			<h1 className="text-3xl text-center text-white mb-10 font-bold">
				Haberleşme Çözümleri
			</h1>
			<TechDetails />
		</section>
	);
}

export default page;
