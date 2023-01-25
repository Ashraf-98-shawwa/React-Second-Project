import React from 'react'
import styled from 'styled-components'




const RecommendedItemBox = styled.div`
  padding: 9px 10px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  width: 220px;
`;

const ItemPrice = styled.h4`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #1c1c1c;
`;
const ItemDescription = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #8b96a5;
`;
export default function RecommendedItemCard(props) {
  return (
    <RecommendedItemBox>
      <img src={props.img} alt="product" />
      <ItemPrice>{props.price}</ItemPrice>
      <ItemDescription>{props.description}</ItemDescription>
    </RecommendedItemBox>
  );
}
