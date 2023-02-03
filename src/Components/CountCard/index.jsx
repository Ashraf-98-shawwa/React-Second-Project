import React from 'react'
import styled from 'styled-components'

const CountCardBox = styled.div`
  width: 45px;
  height: 50px;
  background: #606060;
  border-radius: 4px;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

const Name = styled.h2`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #ffffff;
  
`;
const Number = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
`;
export default function CountCard(props) {
  return (
      <CountCardBox>
          <Number>{props.number < 10 ? "0" + props.number : props.number}</Number>
          <Name>{props.name}</Name>
    </CountCardBox>
  )
}
