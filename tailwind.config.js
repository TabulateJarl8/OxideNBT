/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,vue,jsx,tsx}"],
    darkMode: true,
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
};
