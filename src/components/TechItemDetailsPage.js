"use client";
import { technologies } from "@/helpers/jotai";
import { useAtomValue } from "jotai";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoReturnDownBack } from "react-icons/io5";

function TechItemDetailsPage({ id }) {
	const selectedId = parseInt(id, 10);
	const content = useAtomValue(technologies);
	const contentDetail = content.find((item) => item.id === selectedId);
	const { mainImage, name, title } = contentDetail;

	return (
		<section className="md:mx-20 mx-6">
			<div className="flex flex-col items-center w-full ">
				<Image
					src={mainImage}
					sizes="100vw"
					style={{ width: "100%", height: "auto" }}
					className=""
				/>
				<div className="bg-white w-[350px] md:w-[600px] lg:w-[800px] h-28 md:h-32 text-center flex items-center justify-center -mt-12">
					<h4 className="lg:text-3xl md:text-xl text-lg px-3 font-extrabold text-primary_Navy">
						{name}
					</h4>
				</div>
				<div className="md:w-[600px] lg:w-[800px] w-[350px] h-auto py-6 px-4 md:py-10 text-white text-left flex flex-col space-y-8 md:px-6  items-center  bg-secondary_Navy mt-12 mb-10">
					<p className="lg:text-lg text-center">{title}</p>
				</div>
				<div className="bg-white w-full px-10 py-10">
					{contentDetail.contentDetails &&
						contentDetail.contentDetails.map((item) => (
							<div
								key={item.id}
								className="text-primary_Navy flex flex-col space-y-6 md:text-lg mb-8"
							>
								<h5> {item.content1}</h5>
								<h5> {item.content2}</h5>
								<h5 className="text-xl md:text-2xl font-bold">
									{" "}
									{item.description}
								</h5>
								<h5> {item.content3}</h5>
								<h5> {item.content4}</h5>
							</div>
						))}
					{contentDetail.series.map((item) => (
						<div key={item.id} className="flex flex-col space-y-6">
							<h3 className="text-xl md:text-2xl text-primary_Navy font-extrabold">
								{item.sername}
							</h3>
							<div className="flex gap-2 ">
								{item.images.map((image, index) => (
									<div key={index} className="w-full md:w-auto">
										<Image
											src={image}
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											className="border border-secondary_Navy shadow-md"
										/>
									</div>
								))}
							</div>
							<p className="text-primary_Navy py-4 leading-8">{item.content}</p>
						</div>
					))}
				</div>
			</div>

			<div className="w-full flex justify-end mt-8 mb-10">
				<Link
					href={"/technologies"}
					className="border border-white bg-secondary_Navy text-white px-4 py-1 flex space-x-1 items-center justify-center w-28 rounded-lg hover:bg-primary_Navy "
				>
					<IoReturnDownBack size={20} className="" />
					<p>Geri</p>
				</Link>
			</div>
		</section>
	);
}

export default TechItemDetailsPage;
