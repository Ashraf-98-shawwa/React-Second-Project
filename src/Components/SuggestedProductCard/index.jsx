import React from "react";
import styled from "styled-components";

const SuggestedProductCardBox = styled.div`
  display: flex;
  gap: 11px;
  align-items: flex-start;
  margin-bottom: 16px;
`;
const SuggestedProductName = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #1c1c1c;
  margin-bottom: 3px;
`;

const SuggestedProductPrice = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #8b96a5;
`;
export default function SuggestedProductCard(props) {
  return (
    <SuggestedProductCardBox>
      <img src={props.img} alt="suggested product" />
      <div>
        <SuggestedProductName>{props.name}</SuggestedProductName>
        <SuggestedProductPrice>{props.price}</SuggestedProductPrice>
      </div>
    </SuggestedProductCardBox>
  );
}
