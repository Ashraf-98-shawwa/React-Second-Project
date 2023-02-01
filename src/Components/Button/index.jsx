import React from 'react'
import styled from 'styled-components';

export const ButtonStyle = styled.button`
  background-color: ${(props) => props.theme.pallet.Box};
  padding: 11px 15px 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.pallet.Text};
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
`;

export default function Button(props) {
  return (
            <ButtonStyle type="button">{props.title}</ButtonStyle>

  )
}
