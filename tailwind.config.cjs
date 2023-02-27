/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.tsx',
        './index.html',
    ],
    theme: {
        screens: {
            'sm': '640px',

            'md': '768px',

            'lg': '1024px',

            'xl': '1280px',

            '2xl': '1536px',
        },
        extend: {
            colors: {
                background: '#000000',
                purplePrimary: 'rgb(118, 59, 227)',
                greenPrimary: 'rgb(106, 206, 168)',
                purpleAlpha: 'rgba(118, 59, 227, .15)',
                greenAlpha: 'rgba(106, 206, 168, .25)'
            },
            backgroundImage: {
                blur: "url('./src/assets/blur.svg')",
            },
            backgroundSize: {
                cover: 'cover',
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif']

            }

        },
    },
        plugins: [],
}
