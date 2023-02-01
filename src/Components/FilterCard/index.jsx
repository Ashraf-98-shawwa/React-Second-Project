import React from 'react'
import styled from 'styled-components'

// import icon

import clear from "../../Pictures/clear.png"


const FilterCardBox = styled.div`
  padding: 6px 6px 6px 10px;
  background-color: ${(props) => props.theme.pallet.Box};
  border: 1px solid #0d6efd;
  border-radius: 5px;
  margin-top: 20px;
  display: flex;
  gap: 9px;
  color: ${(props) => props.theme.pallet.Text};
`;

export default function FilterCard(props) {
  return (
    <FilterCardBox>{props.name} <img style={{ cursor:"pointer" }} src={clear} alt="close icon" /></FilterCardBox>
  )
}
