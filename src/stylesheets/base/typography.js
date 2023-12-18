export const typography = {
  fontFamilies: {
    main: `'system-ui', 'sans-serif'`,
    mono: `SFMono-Regular, Menlo, Monaco,
    Consolas, "Liberation Mono", 
    "Courier New", monospace`
  },
  fontSizes: {
    xs: '0.625rem',
    sm: '.75rem',
    md: 'clamp(.875rem, 1vw, 1rem)',
    lg: 'clamp(1rem, 1.5vw, 1.25rem)',
    xl: 'clamp(1.25rem, 2vw, 1.5rem)',
    xxl: 'clamp(2rem, 5vw, 4rem)',
    xxxl: 'clamp(4rem, 7vw, 6rem)'
  },
  fontWeights: {
    normal: 400,
    bold: 600
  },
  lineHeight: {
    main: '103.7%'
  }
};
