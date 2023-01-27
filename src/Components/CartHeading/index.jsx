import React from "react";
import styled from "styled-components";
import Container from "../Container";

const H2 = styled.h2`
  margin-top: 27px;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.2px;
  color: #1c1c1c;
`;
export default function CartHeading() {
  return (
    <Container>
      <H2>My cart (3)</H2>
    </Container>
  );
}
