import colors from './colors.js'

/** you can define custom color scheme from here */
const theme = {
    ...colors,
    orange: '#FF6D34',
    fadeIn25: `animation: fade-in-25 300ms;`,
    fadeOut25: `animation: fade-out-25 200ms;`,
    fadeIn50: `animation: fade-in-50 300ms;`,
    fadeOut50: `animation: fade-out-50 200ms;`,
    fadeIn75: `animation: fade-in-75 300ms;`,
    fadeOut75: `animation: fade-out-75 200ms;`,
    fadeIn: `animation: fade-in 300ms;`,
    fadeOut: `animation: fade-out 200ms;`,
    makeSmaller: `animation: make-smaller 200ms;`,
    makeLarger: `animation: make-larger 300ms;`,
    fadeInSize: `animation: fade-in 300ms, make-larger 300ms;`,
    fadeOutSize: `animation: fade-out 200ms, make-smaller 200ms;`,

    
}

export default theme;
