/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            display: ['group-hover'],
            colors: {
                primary: '#181818',
                secondary: '#3D3C3C',
                tertiary: '#b1b1b1',
                darkred: '#b24848',
                orange: '#EC9706',
                verifygreen: '#A1E09B',
                greyedCardBg: '#3E3E3E',
                prototypePrimary: '#E0E0E0',
                prototypeSecondary: '#D5D5D5',
                prototypeTertiary: '#BFBFBF',
                prototype4ary: '#5F5F5F',
                prototype5ary: '#717070',
                prototype6ary: '#D4D4D4',
                prototype7ary: '#B6B6B6',
                prototypeHighlight: '#F2F2F2',
                prototypePlaceholder: '#A7A7A7',
                prototypePrimaryBtnBg: '#FFFFFF',
                prototypePrimaryBtnBorder: '#000000',
                prototypeSecondaryBtnBg: '#3E3E3E',
                prototypeSecondaryBtnBorder: '#535353',
                prototypeModalBg: '#505050',
            },
        },

        fontFamily: {
            baloo: ['BalooRegular', 'sans-serif'],
        },
    },
    plugins: [],
};
