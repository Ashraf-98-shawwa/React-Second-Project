import React from 'react'
import styled from 'styled-components'



const OfferCardBox = styled.div`
  width: 20%;
  border-right: 1px solid #e0e0e0;
  padding: 20px;
    height: 235px;
    text-align: center;
`;

const OfferProduct = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: ${(props) => props.theme.pallet.Text};
  margin-bottom: 7px;
`;

const OfferDiscount = styled.div`
padding: 5px 13px 6px;
  background: #ffe3e3;
  border-radius: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #eb001b;
  width: fit-content;
  margin: auto;
`;

export default function OfferCard(props) {
  return (
    <OfferCardBox>
      <img src={props.img} alt=" " />
      <OfferProduct>{props.product}</OfferProduct>
      <OfferDiscount>-{props.discount}</OfferDiscount>
    </OfferCardBox>
  );
}
