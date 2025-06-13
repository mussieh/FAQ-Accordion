/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                customPurple: {
                    100: "#F9F0FF",
                    600: "#8B6991",
                    950: "#2E1533",
                },
            },
            fontFamily: {
                sans: ["Work Sans", "sans-serif"],
            },
        },
    },
    plugins: [],
};
