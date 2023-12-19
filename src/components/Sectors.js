"use client";
import Image from "next/image";
import React from "react";
import { useAtomValue } from "jotai";
import { textAtom } from "@/helpers/jotai";
import Link from "next/link";
function Sectors() {
	const content = useAtomValue(textAtom);

	return (
		<section className="w-full mb-16 mt-6 flex justify-center">
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 lg:justify-items-center px-8 md:px-16 lg:px-0 w-full lg:w-[1000px] xl:w-[1200px] gap-8 lg:gap-12">
				{content.map((item) => (
					<Link key={item.id} href={`/sectors/${item.id}`} className="">
						<div className=" flex flex-col items-center text-white space-y-3 transition duration-300 ease-in-out hover:scale-105 ">
							<Image
								src={item.image}
								sizes="100vw"
								style={{ width: "100%", height: "auto" }}
								className="hover:opacity-70"
							/>

							<h3 className="text-lg">{item.sector}</h3>
							<p className="text-xs leading-5">{item.shortContent}</p>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
}

export default Sectors;
