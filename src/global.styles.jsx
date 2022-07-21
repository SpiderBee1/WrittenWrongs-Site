import { createGlobalStyle } from "styled-components";

/**
 * this file defines global styles for the site, such
 * as fonts, box sizing, and comatibility
 */

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Open Sans Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media screen and (max-width: 800px) {
    //rules for less than 800 width
    //padding: 10px;
  }
    
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
  
  //border: 1px solid black;
}

`;
