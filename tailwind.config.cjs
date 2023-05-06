/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {},
    },
    darkMode: 'class', // os darkmode에 영향받지 않도록 추가
    plugins: [
        require('tailwind-scrollbar-hide')
    ],
}
