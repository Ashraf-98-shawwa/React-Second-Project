import React from 'react'
import styled from 'styled-components'

const RemoveAllButtonBox = styled.button`
  width: 115px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #0d6efd;
`;

export default function RemoveAllButton() {
  return <RemoveAllButtonBox>Remove all</RemoveAllButtonBox>;
}
