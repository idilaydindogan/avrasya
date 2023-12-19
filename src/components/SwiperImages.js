"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import bannerone from "../../public/banner3.jpg";
import bannertwo from "../../public/banner4.jpg";
import bannerthree from "../../public/banner5.jpg";
import bannerfour from "../../public/banner1.jpg";
import bannerfive from "../../public/banner2.jpg";
import Image from "next/image";

function SwiperImages() {
	const images = [bannerone, bannertwo, bannerthree, bannerfour, bannerfive];

	return (
		<div className=" w-full h-full">
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 4500,
					disableOnInteraction: false,
				}}
				navigation={true}
				pagination={{
					clickable: true,
				}}
				modules={[Autoplay, Navigation]}
				className="mySwiper"
			>
				{images.map((image) => (
					<SwiperSlide key={image}>
						<Image
							src={image}
							sizes="100vw"
							style={{ width: "100%", height: "100%" }}
							className="swiperslide_image"
							alt="Avrasya Haberlesme Sistemleri"
							referrerPolicy="no-referrer"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
export default SwiperImages;

// <SwiperSlide>
// 					<Image
// 						src={banner3}
// 						sizes="100vw"
// 						style={{ width: "100%", height: "100%" }}
// 					/>
// 				</SwiperSlide>

// <SwiperSlide>
// 					<Image src={bannertwo} sizes="100vw" height={500} />
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<Image src={bannerthree} sizes="100vw" height={500} />
// 				</SwiperSlide>
