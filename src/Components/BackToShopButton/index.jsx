import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import LeftArrow from "../../Pictures/LeftArrow.png";

const BackToShopButtonBox = styled.button`
  width: 159px;
  height: 40px;
  background: linear-gradient(180deg, #127fff 0%, #0067ff 100%);
  border: 1px solid #0d6efd;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  padding-left: 13px;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
`;
export default function BackToShopButton() {
    return (
        <NavLink to="/list">

      <BackToShopButtonBox>
        <img src={LeftArrow} alt="arrow icon" />
        Back to shop
      </BackToShopButtonBox>
        </NavLink>
    );
}
