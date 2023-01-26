import React from "react";
import styled from "styled-components";
import Container from "../../Components/Container";
import LayoutFilter from "../../Components/LayoutFilter";
import Pagination from "../../Components/Pagination";
import SelectedProductCard from "../../Components/SelectedProductCard";
import { Flex } from "../../Global/style";

// importing icons
import S1 from "../../Pictures/S1.png";
import S2 from "../../Pictures/S2.png";
import S3 from "../../Pictures/S3.png";
import S4 from "../../Pictures/S4.png";
import S5 from "../../Pictures/S5.png";
import S6 from "../../Pictures/S6.png";

const FiltersSelection = styled.div`
  width: 240px;
`;
const ProductsSelected = styled.div`
  width: 920px;
`;

export default function Content(props) {
  if (props.lined) {
    return (
      <Container>
        <Flex>
          <FiltersSelection>sidebar</FiltersSelection>
          <ProductsSelected>
            <LayoutFilter HandleLayout={props.HandleLayout} lined />
            <SelectedProductCard
              img={S1}
              orders="154"
              PrPrice="$1128.00"
              Previous={true}
              description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua"
            />
            <SelectedProductCard
              img={S2}
              description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua"
              orders="154"
            />

            <SelectedProductCard
              img={S3}
              description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua"
              orders="154"
            />

            <SelectedProductCard
              img={S4}
              description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua"
              orders="154"
            />

            <SelectedProductCard
              img={S5}
              description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua"
              orders="154"
            />

            <SelectedProductCard
              img={S6}
              description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua"
              orders="154"
            />
            <Pagination />
          </ProductsSelected>
        </Flex>
      </Container>
    );
  } else {
    return (
      <Container>
        <Flex>
          <FiltersSelection>sidebar</FiltersSelection>
          <ProductsSelected>
            <LayoutFilter HandleLayout={props.HandleLayout} squared />
            <Pagination />
          </ProductsSelected>
        </Flex>
      </Container>
    );
  }
}
