/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
		colors: {
			primary_Navy: "#1B365D",
			primary_Gray: "#53565A",
			secondary_Navy: "#5f728e",
			secondary_Gray: "#a9abad",
			bodyNavyshade: "#bbc3ce",
			footerBody: "#2f4564",
		},
	},
	plugins: [],
};
