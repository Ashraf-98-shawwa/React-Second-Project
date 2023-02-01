import React from 'react'
import styled from 'styled-components';


const Heading = styled.h2`
  font-weight: 600;
  font-size: 24px;
  color: ${(props) => props.theme.pallet.Text};
`;
export default function FormHeading(props) {
  return <Heading>{props.name}</Heading>;
}
