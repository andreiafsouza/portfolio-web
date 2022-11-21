import { typography } from '../stylesheets/base/typography';
import { colors } from '../stylesheets/abstracts/palettes';

export const lightTheme = {
  colors: colors,
  backgroundColor: {
    primary: {
      500: colors.primary[200],
      900: colors.neutral[200]
    },
    secondary: {
      800: colors.secondary[400]
    }
  },
  textColor: {
    main: {
      100: colors.primary[900],
      200: colors.primary[500]
    },
    secondary: {
      200: colors.primary[400]
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
    hoverColor: colors.shadows[200],
    hoverColorLight: colors.shadows[100]
  },
  shadows: {
    main: colors.shadows[900]
  },
  svgLinesColor: colors.accent.purple,
  fontSizes: typography.fontSizes,
  fontWeights: typography.fontWeights,
  lineHeight: typography.lineHeight
};
