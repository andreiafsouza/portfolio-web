import { createGlobalStyle } from 'styled-components';
import { smallLayoutBreakPoint } from '../../utils';

export const GlobalStyleReset = createGlobalStyle`
:root{
  --fs-xs: 0.625rem;
  --fs-sm: 0.6875rem;
  --fs-md: .75rem;
  --fs-lg: 1rem;
  --fs-xl: 1.5rem;
  --fs-xxl: 2.5rem;
  --fs-xxxl: 3.5rem;

  
  @media (min-width: ${smallLayoutBreakPoint}) {
    --fs-xs: 0.625rem;
    --fs-sm: .75rem;
    --fs-md: 1rem;
    --fs-lg: 1.25rem;
    --fs-xl: 2rem;
    --fs-xxl: 4rem;
    --fs-xxxl: 5rem;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  font: inherit;
}

/* Remove list styles */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

html,
body {
  height: 100vh;
}

/* Set core body defaults */
body {
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  background-color: ${(props) => props.theme.backgroundColor.primary[900]}
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture,
svg {
  max-width: 100%;
  display: block;
}

`;
