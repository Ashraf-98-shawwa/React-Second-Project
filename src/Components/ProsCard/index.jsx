import React from "react";
import styled from "styled-components";

const ProsCardBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 242px;
`;

const IconDiv = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #e3e8ee;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProsName = styled.h4`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: ${(props) => props.theme.pallet.Text};
`;

const Prosdesc = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #a9acb0;
`;
export default function ProsCard(props) {
  return (
    <ProsCardBox>
      <IconDiv>
        <img src={props.img} alt="icon" />
      </IconDiv>
      <div>
        <ProsName>{props.name}</ProsName>
        <Prosdesc>{props.desc}</Prosdesc>
      </div>
    </ProsCardBox>
  );
}
