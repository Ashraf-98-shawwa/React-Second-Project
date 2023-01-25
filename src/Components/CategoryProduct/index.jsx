import React from 'react'
import styled from 'styled-components'
import { Flex } from '../../Global/style';



const CategoryProductBox = styled.div`
  width: 25%;
  height: 129px;
  border: 1px solid #e0e0e0;
  padding: 20px 0px 0px 16px;
`;

const ProductName = styled.h4`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #1c1c1c;
  margin-bottom: 9px;
`;
const ProductPrice = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #8b96a5;
  width: 55px;
`;

export default function CategoryProduct(props) {
  return (
    <CategoryProductBox>
      <Flex justify="space-between">
        <div>
          <ProductName>{props.product}</ProductName>
          <ProductPrice>From USD {props.price}</ProductPrice>
        </div>
        <img src={props.img} alt="chair" />
      </Flex>
    </CategoryProductBox>
  );
}
