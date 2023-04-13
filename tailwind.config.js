/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./App.{js,jsx,ts,tsx}",
        "./app/**/*.{js,jsx,ts,tsx}",
        "./Components/**/*.{js,jsx,ts,tsx}",
    ],

    theme: {
        extend: {
            colors: {
                primary: "#1E90FF",
                "grey-primary": "#7C82A1",
                "grey-secondary": "#F3F4F6",
                "black-primary": "#333647",
                "black-lighter": "#555A77",
                "purple-primary": "#475AD7",
            },
        },
    },
    plugins: [],
};
