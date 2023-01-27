import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Flex } from "../../Global/style";
import Container from "../Container";

const DiscountBannerBox = styled.div`
  margin-top: 20px;
  margin-bottom: ${(props) => props.MB};
  padding: 28px 32px 41px 30px;
  background-color: #237cff;
  border: 1px solid #e3e8ee;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
`;

const BannerH4 = styled.h4`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.2px;
  color: #ffffff;
`;

const BannerP = styled.p`
  margin-top: 3px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  opacity: 0.7;
`;

const RightBox = styled.div`
  width: 40%;
  background-color: #005ade;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 10% 100%);
  z-index: 0;
`;

const ShopButton = styled.button`
  width: 121px;
  background: #ff9017;
  border-radius: 6px;
  outline: none;
  border: none;
  color: white;
  padding: 11px 10px 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
`;
export default function DiscountBanner() {
  return (
    <Container>
      <DiscountBannerBox MB="88px">
        <Flex align="center" justify="space-between">
          <div>
            <BannerH4>Super discount on more than 100 USD</BannerH4>
            <BannerP>Have you ever finally just write dummy info</BannerP>
          </div>
          <NavLink style={{ zIndex: "1" }} to="/Shop">
            <ShopButton>Shop now</ShopButton>
          </NavLink>
        </Flex>
        <RightBox></RightBox>
      </DiscountBannerBox>
    </Container>
  );
}
