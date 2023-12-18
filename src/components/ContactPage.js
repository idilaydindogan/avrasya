import React from "react";

function ContactPage() {
	return (
		<div className=" w-full mt-10 md:mt-20 mb-10 flex flex-col items-center">
			<div className="w-full px-10 xl:w-[70%]">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4972.408363954093!2d28.971982320677157!3d41.06260666513737!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab73b5eba0301%3A0x7da6aa7824ba6169!2sPerpa%20Trade%20Center!5e0!3m2!1sen!2str!4v1702899705589!5m2!1sen!2str"
					width="100%"
					height="450"
					allowFullScreen
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					title="Avrasya Haberleşme"
				></iframe>
			</div>
			<div>
				<div className="w-[340px] sm:w-[500px] md:w-[700px] lg:w-full h-full py-8 px-8 -mt-12 bg-white pt-10 text-primary_Navy  flex flex-col items-center  space-y-6">
					<h3 className="text-3xl font-bold">İletişim</h3>
					<p className="text-center md:w-2/3">
						Avrasya Haberleşme Sistemleri Ve Gemi Elektroniği Elektrik Sanayi
						Dış Ticaret Limited Şirketi
					</p>
					<div className="w-full flex md:justify-between md:px-10 lg:px-20 md:flex-row md:items-center flex-col space-y-4">
						<div className="flex flex-col space-y-4 items-center">
							<p>Perpa Tic. Mrk. B Blok K:13 No:2519 </p>
							<p>Okmeydanı - Şişli / İstanbul</p>
						</div>
						<div className="flex flex-col space-y-4 items-center">
							<p className="border-b md:border-b-0 w-full text-center border-b-primary_Navy pb-2 md:pb-0">
								+90 212 210 1545
							</p>
							<p>info@avrasyatelsiz.com</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactPage;
