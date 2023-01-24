import React from "react";
import styled from "styled-components";
import { Flex } from "../Header/style";

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
  color: #1c1c1c;
  cursor: pointer;
  &:hover {
    color: #127fff;
  }
`;

export default function MainNav() {
  return (
    <MainNavList>
      <MainNavLi>
        <Flex>
          <img style={{ marginRight: "6px" }} src={menu} alt="menu icon" />
          All category
        </Flex>
      </MainNavLi>
      <MainNavLi>Hot offers</MainNavLi>
      <MainNavLi>Gift boxes</MainNavLi>
      <MainNavLi>Projects</MainNavLi>
      <MainNavLi>Menu item</MainNavLi>
      <MainNavLi>
        <Flex>
          Help
          <img style={{ marginRight: "6px" }} src={downarrow} alt="menu icon" />
        </Flex>
      </MainNavLi>
    </MainNavList>
  );
}
