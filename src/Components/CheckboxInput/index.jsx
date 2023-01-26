import React from "react";
import styled from "styled-components";
import { Flex } from "../../Global/style";


const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  border-radius: 5px;
  border-radius: 15px;

  &:checked {
    background: #0d6efd;
  }
`;

const CheckLabel = styled.label`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #1c1c1c;
  cursor: pointer;
`;


export default function CheckboxInput(props) {

    return (
      <Flex style={{ paddingRight: "17px" }} gap="13">
        <CheckBox id={props.id} type="checkbox" />
        <CheckLabel htmlFor={props.id}>{props.label}</CheckLabel>
      </Flex>
    );
  
}
