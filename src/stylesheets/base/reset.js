import { createGlobalStyle } from 'styled-components';

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

  -webkit-tap-highlight-color: ${(props) => props.theme.button.hover};
  -moz-tap-highlight-color: ${(props) => props.theme.button.hover};
  -ms-tap-highlight-color: ${(props) => props.theme.button.hover};
   
  
  ::-webkit-scrollbar {
    width: 0.8em;
    height: 0.8em;
  }
        
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.background.secondary}; 
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    border: 2px solid ${(props) => props.theme.background.secondary}; 
    background: ${(props) => props.theme.text.secondary}; 
  }
 
}

@supports (scrollbar-color: red blue) {
  * {
    scrollbar-width: thin;
    scrollbar-color: ${(props) => props.theme.text.secondary} ${(props) =>
  props.theme.background.secondary};
  }
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

h1,
h2,
h3 {
    text-wrap: balance;
  }

/* Make images easier to work with */
img,
picture,
svg {
  max-width: 100%;
  display: block;
  height: auto;
}

`;
