import styled from "styled-components";

export const CartProductCardBox = styled.div`
  border-bottom: 1px solid #e3e8ee;
  padding: 20px 0;
`;
export const ProductDetailsBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  `;
export const ProductPrice = styled.div`
  position: relative;
`;
export const Details = styled.div``;
export const Name = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #1c1c1c;
  margin-bottom: 6px;
`;
export const Desc = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #8b96a5;
  width: 350px;
  margin-bottom: 10px;
`;

export const Price = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #1c1c1c;
`;
export const CartSelect = styled.select`
  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  font-weight: 400;
  font-size: 16px;
  color: #1c1c1c;
  width: 123px;
  height: 40px;
  outline: none;
  appearance:none;
  padding: 10px;
  cursor: pointer;
  background-color: transparent;
  z-index: 1;
  `;


  export const ShopRemove = styled.div`
margin-top: 20px
  `;