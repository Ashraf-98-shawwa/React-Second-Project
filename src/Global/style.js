import  { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


body {
font-family: 'Inter', sans-serif;background-color: #F7F7F7;
color:black;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

`;

// const Flex = styled.div`
//   display: flex;
//   align-items: center;
// `;
