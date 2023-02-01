import React from "react";
import styled from "styled-components";
import { FlexBetween } from "../../Sections/Header/style";

// import menu icon
import menu from "../../Pictures/menu.png";
import downarrow from "../../Pictures/downarrow.png";

const MainNavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 25px;
`;

const MainNavLi = styled.li`
  font-weight: 500;
  font-size: 16px;
  color: ${(props) => props.theme.pallet.Text};

  cursor: pointer;
  &:hover {
    color: #127fff;
  }
`;

export default function MainNav() {
  return (
    <MainNavList>
      <MainNavLi>
        <FlexBetween>
          <img
            style={{ marginRight: "6px", background: "#F7F7F7" }}
            src={menu}
            alt="menu icon"
          />
          All category
        </FlexBetween>
      </MainNavLi>
      <MainNavLi>Hot offers</MainNavLi>
      <MainNavLi>Gift boxes</MainNavLi>
      <MainNavLi>Projects</MainNavLi>
      <MainNavLi>Menu item</MainNavLi>
      <MainNavLi>
        <FlexBetween>
          Help
          <img style={{ marginRight: "6px" }} src={downarrow} alt="menu icon" />
        </FlexBetween>
      </MainNavLi>
    </MainNavList>
  );
}
