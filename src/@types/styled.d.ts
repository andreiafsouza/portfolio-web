import 'styled-components';
import { darkTheme } from '../theme/darkTheme';

export type ThemeType = typeof darkTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
