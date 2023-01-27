import React from 'react'
import styled from 'styled-components';


// import cart icon 
import blueCart from "../../Pictures/blueCart.png";


const Price = styled.h4`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #1c1c1c;
  margin: 10px 0;
`;

const Name = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #606060;
  width:215px;
  margin-bottom: 12px;
`;

const MoveToCartButton = styled.button`
  width: 156.58px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  outline: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #0d6efd;
  display: flex;
  align-items: center;
  gap:10px;
  padding:0 11px ;
`;

export default function ForLaterProductCard(props) {
  return (
    <div>
      <img src={props.img} alt="for later product" />
      <Price>{props.price}</Price>
      <Name>{props.name}</Name>
      <MoveToCartButton>
        <img src={blueCart} alt="cart icon" />
        Move to cart
      </MoveToCartButton>
    </div>
  );
}
