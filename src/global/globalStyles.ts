import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}

body{
  font-family: "Noto Sans KR", sans-serif;
  button{
    border: none;
    background-color: transparent;
  }
  input {
    outline: none;
    border: none;
  }
  a {
    text-decoration: none;
    color: var(--color-black);
  }
} 

:root {
  //color
  --color-white: #FFFFFF;
  --color-black : #333333;
  --color-primary: #024EEE;
  --color-primary-dark: #003AD6;
  --color-primary-light: #DBE1FD;
  --color-gray-border: #DEDEDE;
  --color-gray-000: #FAFBFC;
  --color-gray-001: #F6F7F8;
  --color-gray-002: #F0F2F3;
  --color-gray-003: #E0E4E8;
  --color-gray-004: #E0E4E8;
  --color-gray-005: #BEBEBE;
  --color-gray-006: #9BA1A7;
  --color-gray-007: #9C9C9C;
  --color-gray-008: #777777;
  --color-gray-009: #565656;
  --color-pink: #FF00FF;
}
`;

export default GlobalStyles;
