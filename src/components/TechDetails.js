"use client";
import React from "react";
import { useAtomValue } from "jotai";
import { technologies } from "@/helpers/jotai";
import Image from "next/image";
import Link from "next/link";
function TechDetails() {
	const content = useAtomValue(technologies);
	return (
		<div className="border border-primary_Gray shadow-lg w-full">
			{content.map((item) => (
				<div>
					{item.id % 2 === 1 ? (
						<div className="flex">
							<div className="w-1/2">
								<Image
									src={item.totalImage}
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className=""
								/>
							</div>
							<div className="w-1/2 flex flex-col items-center justify-center text-white space-y-4">
								<h2 className="text-2xl">{item.name}</h2>
								<p>{item.shortTitle}</p>
								<Link
									href={`/technologies/${item.id}`}
									className="bg-secondary_Navy px-4 py-2 rounded-md border border-white hover:bg-primary_Navy"
								>
									Detaylar
								</Link>
							</div>
						</div>
					) : (
						<div className="flex">
							<div className="w-1/2 flex flex-col items-center justify-center text-white space-y-4">
								<h2 className="text-2xl">{item.name}</h2>
								<p>{item.shortTitle}</p>
								<Link
									href={`/technologies/${item.id}`}
									className="bg-secondary_Navy px-4 py-2 rounded-md border border-white hover:bg-primary_Navy"
								>
									Detaylar
								</Link>
							</div>
							<div className="w-1/2">
								<Image
									src={item.totalImage}
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className=""
								/>
							</div>
						</div>
					)}
				</div>
			))}
		</div>
	);
}

export default TechDetails;
