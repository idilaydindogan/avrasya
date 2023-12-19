import TechItemDetailsPage from "@/components/TechItemDetailsPage";
import React from "react";

function page({ params }) {
	const id = params.id;

	return <TechItemDetailsPage id={id} />;
}

export default page;
