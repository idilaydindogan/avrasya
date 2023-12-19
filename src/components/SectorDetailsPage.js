"use client";
import Image from "next/image";
import React from "react";
import { useAtomValue } from "jotai";
import { textAtom } from "@/helpers/jotai";
import { IoReturnDownBack } from "react-icons/io5";
import Link from "next/link";
import TechDetails from "./TechDetails";

function SectorDetailsPage({ id }) {
	const selectedId = parseInt(id, 10);
	const content = useAtomValue(textAtom);
	const contentDetail = content.find((item) => item.id === selectedId);
	const { image, sector, shortContent, longContent1, longContent2 } =
		contentDetail;

	return (
		<section className="mx-20 ">
			<div className="flex flex-col items-center w-full ">
				<Image
					src={image}
					sizes="100vw"
					style={{ width: "100%", height: "auto" }}
					className=""
				/>
				<div className="bg-white w-[800px] h-32 text-center flex items-center justify-center -mt-12">
					<h4 className="text-3xl font-extrabold text-primary_Navy">
						{sector}
					</h4>
				</div>
				<div className="w-[800px] h-auto py-10 text-white text-left flex flex-col space-y-8 px-6  items-center  bg-secondary_Navy mt-12 ">
					<p className="text-lg">{longContent1}</p>
					<p>{longContent2}</p>
				</div>
			</div>
			<div className="w-full flex justify-center mt-16 mb-10">
				<TechDetails />
			</div>
			<div className="w-full flex justify-end mt-8 mb-10">
				<Link
					href={"/sectors"}
					className="border border-white bg-secondary_Navy text-white px-4 py-1 flex space-x-1 items-center justify-center w-28 rounded-lg hover:bg-primary_Navy "
				>
					<IoReturnDownBack size={20} className="" />
					<p>Geri</p>
				</Link>
			</div>
		</section>
	);
}

export default SectorDetailsPage;
