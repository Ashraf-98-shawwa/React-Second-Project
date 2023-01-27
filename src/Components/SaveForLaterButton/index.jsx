import React from 'react'
import styled from 'styled-components'

const SaveForLaterButtonBox = styled.button`
  width: 108px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  color: #0d6efd;
  border: 1px solid #e3e8ee;
  box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
  border-radius: 6px;
  background: #ffffff;
  cursor: pointer;
`;
export default function SaveForLaterButton() {
  return <SaveForLaterButtonBox>Save for later</SaveForLaterButtonBox>;
}
