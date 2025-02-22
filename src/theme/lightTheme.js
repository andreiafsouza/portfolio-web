import { typography } from '../stylesheets/base/typography';
import { breakPoints } from '../stylesheets/base/breakPoints';

export const lightTheme = {
  background: {
    primary: '#EEEEEE',
    secondary: '#DDDEED',
    neutral: '#F4F3F5',
    accent: '#9586DD',
    secondaryAccent: '#60859B',
    titleBg: 'rgba(224, 211, 245, 1)',
    navbar: '#EEEEEEE6',
    footer: '#DDDEED',
    portfolio: '#e9e9e9'
  },
  text: {
    primary: '#2D2327',
    secondary: '#605C7A',
    neutral: '#ffffff',
    create: 'rgba(224, 211, 245, 0.8)'
  },
  font: {
    main: typography.fontFamilies.main,
    mono: typography.fontFamilies.mono
  },
  button: {
    hover: 'rgba(224, 211, 245, 0.3)',
    hoverLight: 'rgba(224, 211, 245, 0.2)'
  },
  shadows: {
    primary: 'rgba(9, 3, 18, 0.1)',
    secondary: 'rgba(224, 211, 245, 0.8)',
    box: '#605C7Acc'
  },
  icon: {
    primary: '#090312',
    accent: '#9586DD'
  },
  svg: {
    primary: '#090312',
    accent: '#9586DD',
    carets: '#F4F3F5'
  },
  profile: '#BDA52380',
  terminal: {
    header: '#DCDBDB'
  },
  fontSizes: typography.fontSizes,
  fontWeights: typography.fontWeights,
  lineHeight: typography.lineHeight,
  breakPoints: breakPoints
};
