import styled from "styled-components";

import { CardButton } from "../Hero/style";



export const ProductInfoBox = styled.div`
  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  margin-bottom: 20px;
  padding: 20px 22px 44px 19px;
`;

export const ProductImages = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;

  & div img {
    cursor: pointer;
    width: 56px;
    height: 56px;
  }
  & div img.active {
    border: 1px solid #505050;
    border-radius: 3px;
  }
`;

export const Stock = styled.span`
  display: flex;
  align-items: center;
  gap: 2px;
  color: #00b517;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const ProductDetails = styled.div``;

export const ProductName = styled.h3`
  font-weight: 600;
  width: 384px;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.2px;
  color: #1c1c1c;
  margin-top: 5px;
  margin-bottom: 11px;
`;

export const Prices = styled.div`
  width: 430px;
  height: 72px;
  background: #fff0df;
  margin-top: 14px;
  display: flex;
  padding: 16px 16px 16px 6px;
  gap: 42px;
  /* margin-bottom: 21px; */
`;

export const Price = styled.div`
  border-left: ${(props) => (props.border ? "1px solid #BDC1C8" : "")};
  padding-left: 10px;
  & h3 {
    color: ${(props) => (props.red ? "#FA3434" : "black")};
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 4px;
  }

  & p {
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #606060;
  }
`;

export const GrayList = styled.ul`
  & li {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #8b96a5;
    width: 125px;
    text-transform: capitalize;
    padding: 13px 0;
  }

  & li.PB {
    padding-bottom: 32px;
  }
`;

export const BlackList = styled.ul`
  & li {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #505050;
    text-transform: capitalize;
    padding: 13px 0;
    width: 198px;
  }
`;

export const HR = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
`;


export const SupplierDetails = styled.div`
  background: #ffffff;
  border: 1px solid #e3e8ee;
  box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
  border-radius: 6px;
  padding: 19px 16px 21px;
  height: 325px;
  width: 280px;
  position: relative;
`;

export const SupplierPicName = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
`;
export const IMG = styled.div`
  width: 48px;
  height: 48px;
  background-color: #c6f3f1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 28px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: rgba(76, 167, 167, 0.6);
  border-radius: 4px;
`;

export const Name = styled.div`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #1c1c1c;
  
  & h3 { 
      font-weight: 400;

  }
`;

export const SupplierInfo = styled.ul`
  margin-top: 17px;

  & li {
    display: flex;
    align-items: center;
    gap: 20px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: #8b96a5;
    margin-bottom: 15px;
  }
`;

export const SupplierButton = styled(CardButton)`
width: 100%;
padding: 11px;
font-size: 16px;
`;
export const SaveForLAterButton = styled(SupplierButton)`
background-color: transparent;
  width: 100%;
  padding: 11px;
  font-size: 16px;
  position: absolute;
  bottom:-16%;
  left:0;
  display: flex; 
  align-items: center;
  gap:10px;
  justify-content: center;
`;