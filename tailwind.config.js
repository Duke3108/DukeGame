/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                zentry: ['zentry', 'sans-serif'],
                circular: ['circular-web', 'sans-serif'],
                general: ['general', 'sans-serif'],
                robertMedium: ['robert-medium', 'sans-serif'],
                robertRegular: ['robert-regular', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
