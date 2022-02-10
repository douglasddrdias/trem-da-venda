import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
body {
    font-family: 'Roboto', sans-serif;  
    background: #F2FBEF;  
}
a{
    text-decoration: none;
}
a:visited {
    text-decoration: none;
  }
.background-green{
    background: rgb(64, 205, 40);  
}
`;
