import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


body {
font-family: 'Inter', sans-serif;
background-color: #F7F7F7;
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

export const Flex = styled.div`
  display: flex;
  align-items: ${(props) => props.align};
  gap: ${(props) => props.gap + "px"};
  justify-content: ${(props) => props.justify};
  flex-wrap: ${(props) => props.wrap};
  flex-direction: ${(props) => props.direction};
`;

export const SectionsTitle = styled.h3`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.2px;
  color: #1c1c1c;
  margin-bottom: 24px;
`;
