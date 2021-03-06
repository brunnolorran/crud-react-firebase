import { createGlobalStyle } from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
body, input, button {
    font: 14px Roboto, sans-serif;
    color: #171717;
    background: hsl(0, 0%, 98%);
}
button, svg, a   {
    cursor: pointer;
    text-decoration: none;
}
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
#main-container {
        max-width: 1020px;
        margin: 0 auto;
        padding: 0 20px 50px;
}
`;
