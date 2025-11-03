// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#1787d0",
				"dark-text": "#4d4d4d",
			},
		},
	},
	plugins: [],
};
