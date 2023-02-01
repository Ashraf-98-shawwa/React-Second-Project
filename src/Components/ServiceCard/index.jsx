import React from "react";
import styled from "styled-components";

const ServiceCardBox = styled.div`
  background-color: ${(props) => props.theme.pallet.Box};
  border: 1px solid #e0e0e0;
  border-radius: 6px;
`;

const ImageDiv = styled.div`
  width: 280px;
  height: 120px;
  background-image: ${(props) =>
    `url(${props.img}), linear-gradient(#040304, #4d4444)`};
`;
const NameDiv = styled.div`
  padding: 20px 45px 20px 20px;
  position: relative;
`;
const NameP = styled.div`
  width: 175px;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: ${(props) => props.theme.pallet.Text};
`;

const IconDiv = styled.div`
  position: absolute;
  width: 55px;
  height: 55px;
  border: 2px solid #ffffff;
  background: #d1e7ff;
  border-radius: 50%;
  top: -27.5px;
  right: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ServiceCard(props) {
  return (
    <ServiceCardBox>
      <ImageDiv img={props.img}></ImageDiv>
      <NameDiv>
        <NameP>{props.name}</NameP>
        <IconDiv>
          <img src={props.icon} alt="icon" />
        </IconDiv>
      </NameDiv>
    </ServiceCardBox>
  );
}
