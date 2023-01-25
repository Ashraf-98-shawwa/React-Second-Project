import React from 'react'
import styled from 'styled-components';

export const ButtonStyle = styled.button`
  background: #ffffff;
  padding: 11px 15px 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #1c1c1c;
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
