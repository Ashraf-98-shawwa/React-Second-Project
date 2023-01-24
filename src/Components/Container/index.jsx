import React from "react";
import styled from "styled-components";

const CONTAINER = styled.div`
  /* width: 75%; */
  width: 80%;
  margin: auto;

  @media (max-width: 600px) {
    & {
      width: 95%;
    }
  }
`;
export default function Container(props) {
  return <CONTAINER>{props.children}</CONTAINER>;
}
