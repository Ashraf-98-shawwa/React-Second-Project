import React from "react";
import styled from "styled-components";
import { useProductContext } from "../../Context/productContext";

const RemoveButtonBox = styled.button`
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  color: #fa3434;
  box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
  border-radius: 6px;
  border: 1px solid #e3e8ee;
  background: #ffffff;
  width: 71px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export default function RemoveButton(props) {
  const {
    removeFromCart,
  } = useProductContext();

  return (
    <RemoveButtonBox
      onClick={(id) => {
        removeFromCart(props.id);
      }}
    >
      Remove
    </RemoveButtonBox>
  );
}
