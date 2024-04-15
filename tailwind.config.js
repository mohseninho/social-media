/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            width:{
                "screen":"512px"
            },
            colors:{
                "transparent1" : "rgba(0,0,0,0.5)",
                "transparent2" : "rgba(0,0,0,0.1)"
            }
        },
    },
    plugins: [],
};
