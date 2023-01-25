import React from "react";
import { Flex } from "../../Global/style";
import Container from "../../Components/Container";
import Logo from "../../Components/Logo";
import SocialList from "../../Components/SocialList";
import { FlexBetween } from "../Header/style";
import {
  BrandBox,
  BrandBoxP,
  CopyRightBox,
  CopyRightP,
  CopyRightSelect,
  FooterList,
  FooterListitem,
  FooterTitle,
  MainFooterBox,
} from "./style";

// import images
import GooglePlay from "../../Pictures/GooglePlay.png";
import AppStore from "../../Pictures/AppStore.png";
import USA from "../../Pictures/USA.png";
import upArrow from "../../Pictures/upArrow.png";
import { NavLink } from "react-router-dom";

export default function MainFooter() {
  return (
    <MainFooterBox>
      <Container>
        <Flex justify="space-between" style={{ marginBottom: "60px" }} gap="64">
          <BrandBox>
            <Logo />
            <BrandBoxP>
              Best information about the company gies here but now lorem ipsum
              is
            </BrandBoxP>
            <SocialList />
          </BrandBox>
          <div>
            <FooterTitle>About</FooterTitle>
            <FooterList>
              <FooterListitem>
                <NavLink to="/main">About Us </NavLink>
              </FooterListitem>
              <FooterListitem>
                <NavLink to="/main">Find store </NavLink>
              </FooterListitem>
              <FooterListitem>
                <NavLink to="/main">Categories </NavLink>
              </FooterListitem>
              <FooterListitem>
                <NavLink to="/main">Blogs </NavLink>
              </FooterListitem>
            </FooterList>
          </div>
          <div>
            <FooterTitle>Partnership</FooterTitle>
            <FooterList>
              <FooterListitem>
                <NavLink to="/main">About Us </NavLink>
              </FooterListitem>
              <FooterListitem>
                <NavLink to="/main">Find stores </NavLink>
              </FooterListitem>
              <FooterListitem>
                <NavLink to="/main">Categories </NavLink>
              </FooterListitem>
              <FooterListitem>
                <NavLink to="/main">Blogs </NavLink>
              </FooterListitem>
            </FooterList>
          </div>
          <div>
            <FooterTitle>Information</FooterTitle>
            <FooterList>
              <FooterListitem>
                <NavLink to="/main">Help Center </NavLink>
              </FooterListitem>
              <FooterListitem>
                <NavLink to="/main"> Money Refund</NavLink>
              </FooterListitem>

              <FooterListitem>
                <NavLink to="/main">Shipping</NavLink>
              </FooterListitem>
              <FooterListitem>
                <NavLink to="/main"> Contact us</NavLink>
              </FooterListitem>
            </FooterList>
          </div>
          <div>
            <FooterTitle>For users</FooterTitle>
            <FooterList>
              <FooterListitem>
                <NavLink to="/main">Login</NavLink>
              </FooterListitem>
              <FooterListitem>
                <NavLink to="/main">Register</NavLink>
              </FooterListitem>
              <FooterListitem>
                <NavLink to="/main">Settings</NavLink>
              </FooterListitem>
              <FooterListitem>
                <NavLink to="/main"> My Orders</NavLink>
              </FooterListitem>
            </FooterList>
          </div>
          <div>
            <FooterTitle>Get app</FooterTitle>
            <FooterList>
              <a href="https://www.apple.com/app-store/">
                <img
                  style={{ cursor: "pointer" }}
                  src={AppStore}
                  alt="Appstore icon"
                />
              </a>
              <a href="https://play.google.com/store/games?hl=en&gl=US">
                <img
                  style={{ marginTop: "5px", cursor: "pointer" }}
                  src={GooglePlay}
                  alt="GooglePlay icon"
                />
              </a>
            </FooterList>
          </div>
        </Flex>
      </Container>
      <CopyRightBox>
        <Container>
          <FlexBetween>
            <CopyRightP>© 2023 Ecommerce.</CopyRightP>
            <Flex gap="4" align="center">
              <img src={USA} alt="USA flag" />
              <CopyRightSelect id="Lang">
                <option value="English">English</option>
              </CopyRightSelect>
              <img
                style={{ position: "relative", left: "-16px", zIndex: "0" }}
                src={upArrow}
                alt="Arrow icon"
              />
            </Flex>
          </FlexBetween>
        </Container>
      </CopyRightBox>
    </MainFooterBox>
  );
}
