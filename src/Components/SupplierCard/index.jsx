import React from "react";
import styled from "styled-components";
import { Flex } from "../../Global/style";

const SupplierCardBox = styled.div`
  width: 200px;
`;

const CountryName = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #1c1c1c;
`;

const Website = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #8b96a5;
`;

export default function SupplierCard(props) {
  return (
    <SupplierCardBox>
      <Flex gap="11" align="center">
        <img width="28px" height="20px" src={props.img} alt="flag" />
        <div>
          <CountryName>{props.name}</CountryName>
          <Website>{props.website}</Website>
        </div>
      </Flex>
    </SupplierCardBox>
  );
}
