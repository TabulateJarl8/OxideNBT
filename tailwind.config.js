/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,vue,jsx,tsx}"],
	purge: ["./src/**/*.{js,ts,vue,jsx,tsx}"],
	darkMode: true,
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
};
