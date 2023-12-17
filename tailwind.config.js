/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                gradient:
                    "linear-gradient(192deg, #391A49 11.21%, #301D5C 32.42%, #262171 55.92%, #301D5C 69.39%, #391A49 89.57%)",
            },
        },
    },
    extend: {},
    plugins: [],
};
