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
    color: rgb(51, 51, 51);
}
a:link:visited:hover:active {
    text-decoration: none;
    color: rgb(51, 51, 51);
}
a:hover {
    text-decoration: none;
    color: rgb(51, 51, 51);
}
.background-green{
    background: rgb(64, 205, 40);  
}
`;
