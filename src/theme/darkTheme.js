import { typography } from '../stylesheets/base/typography';
import { colors } from '../stylesheets/abstracts/palettes';

export const darkTheme = {
  colors: colors,
  backgroundColor: {
    primary: {
      500: colors.primary[500],
      900: colors.primary[900]
    },
    secondary: {
      800: colors.secondary[800]
    },
    neutral: {
      900: colors.neutral[900]
    }
  },
  textColor: {
    main: {
      100: colors.neutral[100],
      200: colors.neutral[200]
    },
    secondary: {
      200: colors.primary[200]
    }
  },
  fontFamilies: {
    main: typography.fontFamilies.main,
    display: typography.fontFamilies.display
  },
  boxShadows: {
    main: colors.shadows[100]
  },
  button: {
    hoverColor: colors.shadows[400],
    hoverColorLight: colors.shadows[800]
  },
  shadows: {
    main: colors.shadows[800]
  },
  accentGreen: colors.accent.green,
  svgLinesColor: colors.accent.purple,
  profileBgColor: colors.accent.yellow,
  fontSizes: typography.fontSizes,
  fontWeights: typography.fontWeights,
  lineHeight: typography.lineHeight
};
