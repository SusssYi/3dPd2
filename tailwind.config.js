/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                color_text_light: "#333332",
                color_background_light: "#FAF4E5",
                color_pink_light: "#e5a1aa",
                color_green_light: "#7AD0AC",
                color_blue_light: "#8395CD",
                color_text_dark: "#FAF4E5",
                color_background_dark: "#8395CD",
            },
            fontFamily: {
                Montserrat: ["Montserrat", "sans-serif"],
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
