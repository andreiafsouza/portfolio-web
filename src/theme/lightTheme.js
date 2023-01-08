import { typography } from '../stylesheets/base/typography';
import { colorsLight } from '../stylesheets/abstracts/palettes';

export const lightTheme = {
  background: {
    primary: '#eeeeee',
    secondary: 'rgba(118, 98, 215, 0.1)',
    neutral: '#CFCED0',
    accent: '#7662D7',
    secondaryAccent: '#5C8187'
  },
  text: {
    primary: '#090312',
    secondary: '#1D1835',
    neutral: '#101014'
  },
  font: {
    main: typography.fontFamilies.main,
    display: typography.fontFamilies.display
  },
  button: {
    hover: 'rgba(9, 3, 18, 0.2)',
    hoverLight: 'rgba(9, 3, 18, 0.1)'
  },
  shadows: {
    primary: 'rgba(9, 3, 18, 0.1)',
    secondary: 'rgba(29, 24, 53, 0.3)'
  },
  icon: {
    primary: '#090312',
    accent: '#7662D7'
  },
  svg: {
    primary: '#090312',
    accent: '#7662D7'
  },
  profile: {
    primary: colorsLight.shadows[900]
  },
  fontSizes: typography.fontSizes,
  fontWeights: typography.fontWeights,
  lineHeight: typography.lineHeight
};
