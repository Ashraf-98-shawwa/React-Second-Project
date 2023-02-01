import React from 'react'
import styled from 'styled-components';



const RelatedProductCardBox = styled.div`
  width: 172px;
`;

const PrName = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.pallet.fifty};
  margin: 14px 0px 9px;
  width: 142px;
`;

const PriceRange = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #8b96a5;
`;

export default function RelatedProductCard(props) {
  return (
    <RelatedProductCardBox>
      <img width="172px" height="172px" src={props.img} alt="related product" />
      <PrName>{props.name}</PrName>
      <PriceRange>{props.price}</PriceRange>
    </RelatedProductCardBox>
  );
}
