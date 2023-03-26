import { typography } from '../stylesheets/base/typography';
import { colors } from '../stylesheets/abstracts/palettes';

export const darkTheme = {
  colors: colors,
  background: {
    primary: colors.primary[900],
    secondary: colors.primary[500],
    neutral: colors.neutral[900],
    accent: colors.accent.yellow,
    secondaryAccent: colors.secondary[800],
    navbar: `${colors.primary[900]}E6`
  },
  text: {
    primary: colors.neutral[100],
    secondary: colors.primary[200],
    neutral: colors.neutral[200]
  },
  font: {
    main: typography.fontFamilies.main,
    display: typography.fontFamilies.display
  },
  button: {
    hover: colors.shadows[400],
    hoverLight: colors.shadows[800]
  },
  shadows: {
    primary: colors.shadows[100],
    secondary: colors.shadows[800],
    box: '#7662D780'
  },
  icon: {
    primary: colors.neutral[100],
    accent: colors.accent.purple
  },
  svg: {
    primary: colors.neutral[100],
    accent: colors.accent.purple
  },
  profile: `${colors.accent.yellow}E6`,
  terminal: {
    header: colors.neutral[900]
  },
  fontSizes: typography.fontSizes,
  fontWeights: typography.fontWeights,
  lineHeight: typography.lineHeight
};
