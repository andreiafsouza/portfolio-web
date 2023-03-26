import { createGlobalStyle } from 'styled-components';
import { mediumLayoutBreakPoint, smallLayoutBreakPoint } from '../../utils';

export const GlobalStyleReset = createGlobalStyle`

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

::selection {
    background: ${(props) => props.theme.background.accent};
    color: ${(props) => props.theme.background.secondary}
}


html,
body {
  background: ${(props) => props.theme.background.primary};
  transition: color 350ms ease 0s, background-color 350ms ease 0s; 
  height: 100vh;
  
  ::-webkit-scrollbar {
      width: 8px;
      background-color: ${(props) => props.theme.background.primary}; //card
    }
        
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: ${(props) => props.theme.background.secondary}; //label
    }

    scrollbar-width: thin;
    scrollbar-color: 
    ${(props) => props.theme.background.secondary} ${(props) =>
  props.theme.background.primary};
 
}

/* Set core body defaults */
body {
  line-height: 1.5;
  font-family: ${(props) => props.theme.font.main};
  color: ${(props) => props.theme.text.primary};
  overflow-x: hidden;
  scroll-behavior: smooth;
  
  text-rendering: optimizeSpeed;
  -webkit-font-smoothing: antialiased;
}

body.fade-out {
  opacity: 0;
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
