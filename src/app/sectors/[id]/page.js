import SectorDetailsPage from "@/components/SectorDetailsPage";
import React from "react";

function page({ params }) {
	const id = params.id;
	return <SectorDetailsPage id={id} />;
}

export default page;
