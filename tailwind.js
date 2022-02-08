module.exports = {
    important: true,
    theme: {
        container: {
            center: true,
        },
        fontFamily: {
            display: ['Gilroy', 'sans-serif'],
            body: ['Graphik', 'sans-serif'],
        },
        extend: {
            colors: {
                cyan: '#9cdbff',
            },
            margin: {
                96: '24rem',
                128: '32rem',
            },
            maxWidth: {
                6: '1.5rem',
            },
            maxHeight: {
                6: '1.5rem',
            },
        },
    },
    variants: {
        opacity: ['responsive', 'hover'],
    },
    purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
};
