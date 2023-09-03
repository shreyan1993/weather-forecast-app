import { themeStyles } from 'App.theme';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${themeStyles}

  /* Add additional global styles here */
`;

export default GlobalStyle;
