import React from "react";
import styled from "styled-components";
import { useProductContext } from "../../Context/productContext";
import Container from "../Container";

const H2 = styled.h2`
  margin-top: 27px;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.2px;
  color: ${(props) => props.theme.pallet.Text};
`;
export default function CartHeading() {
  const { state } = useProductContext();
  return (
    <Container>
      <H2>My cart ({state.count})</H2>
    </Container>
  );
}
