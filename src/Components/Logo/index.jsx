import React from 'react'
import styled from 'styled-components';

// importing the logo picture 
import logo from "../../Pictures/logo.png"

const LogoBox = styled.div`
  margin-right: 46px;
`
export default function Logo() {
  return (
    <LogoBox>
      <img src={logo} alt="Brand Logo" />
    </LogoBox>
  );
}
