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

.mouse-hover:hover{
    cursor: pointer;
}

.counter-wrapper{
    display: flex;
    flex-direction: row;
    border: 3px solid rgb(192,192,192);
    border-radius: 4px;
    align-items: center;
    justify-content: space-between;
    height: 30px;
    width: 80%;
}

.counter-button-plus-active{
    border:none;
    background-color: transparent;
    height: 100%;
    font-size: larger;
    color: red;
    cursor: pointer;
}

.counter-button-minus-active{
    border: none;
    background-color: transparent;
    height: 100%;
    font-size: larger;
    color: red;
    cursor: pointer;    
}

.counter-button-plus-desactive{
    border: none;
    background-color: transparent;
    height: 100%;
    font-size: larger;
    cursor: pointer;      
    color: rgb(105,105,105);
}

.counter-button-minus-desactive{
    border: none;
    background-color: transparent;
    height: 100%;
    font-size: larger;
    cursor: pointer;      
    color: rgb(105,105,105);
}

.counter-p{
    margin-top: 15px;
}
`;
