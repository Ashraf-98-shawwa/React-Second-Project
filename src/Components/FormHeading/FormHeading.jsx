import React from 'react'
import styled from 'styled-components';


const Heading = styled.h2`
  font-weight: 600;
  font-size: 24px;
  color: #1c1c1c;
`;
export default function FormHeading(props) {
  return <Heading>{props.name}</Heading>;
}
