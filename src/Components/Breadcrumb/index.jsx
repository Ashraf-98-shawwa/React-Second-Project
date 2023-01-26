import React from "react";
import styled from "styled-components";
import Container from "../Container";

const BreadcrumbBox = styled.div`
  padding: 20px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #8b96a5;
`;

export default function Breadcrumb() {
  return (
    <Container>
      <BreadcrumbBox>
        Home {`>`} Clothings {`>`} Men’s wear {`>`} Summer clothing
      </BreadcrumbBox>
    </Container>
  );
}
