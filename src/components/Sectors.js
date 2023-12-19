import Image from "next/image";
import React from "react";
import image1 from "../../public/sectors/image1.jpeg";
import image2 from "../../public/sectors/image2.jpeg";
import image3 from "../../public/sectors/image3.jpeg";
import image4 from "../../public/sectors/image4.jpeg";
import image5 from "../../public/sectors/image5.jpeg";
import image6 from "../../public/sectors/image6.jpeg";

function Sectors() {
	const images = [image1, image2, image3, image4, image5, image6];
	return (
		<section className="w-full flex justify-center">
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 lg:justify-items-center px-8 md:px-16 lg:px-0 w-full lg:w-[1000px] xl:w-[1200px] gap-8 lg:gap-12">
				{images.map((image) => (
					<div className="">
						<Image
							src={image}
							sizes="100vw"
							style={{ width: "100%", height: "auto" }}
						/>
					</div>
				))}
			</div>
		</section>
	);
}

export default Sectors;
