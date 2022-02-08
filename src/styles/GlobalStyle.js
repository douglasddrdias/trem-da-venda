import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    text-decoration: none;
    text-decoration-color= none;

}
body {
    font-family: 'Roboto', sans-serif;    
}
a{
    text-decoration: none;
}
a:visited {
    text-decoration: none;
  }
`;
