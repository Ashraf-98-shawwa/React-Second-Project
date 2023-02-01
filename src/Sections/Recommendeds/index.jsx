import React from 'react'
import styled from 'styled-components';
import { Flex, SectionsTitle } from '../../Global/style';
import Container from "../../Components/Container";

import RecommendedItemCard from "../../Components/RecommendedItemCard";

// import product pictures
import P01 from "../../Pictures/01.png";
import P02 from "../../Pictures/02.png";
import P03 from "../../Pictures/03.png";
import P04 from "../../Pictures/04.png";
import P05 from "../../Pictures/05.png";
import P06 from "../../Pictures/06.png";
import P07 from "../../Pictures/07.png";
import P08 from "../../Pictures/08.png";
import P09 from "../../Pictures/09.png";


const RecommendedsBox = styled.div`
  padding-top: 30px;
  
`


export default function Recommendeds() {
  return (
    <RecommendedsBox>
      <Container>
        <SectionsTitle>Recommended items</SectionsTitle>
        <Flex gap="19" wrap="wrap">
          <RecommendedItemCard
            description="T-shirts with multiple colors, for men"
            price="$10.30"
            img={P01}
          />
          <RecommendedItemCard
            description="Jeans shorts for men blue color"
            price="$10.30"
            img={P02}
          />
          <RecommendedItemCard
            description="Brown winter coat medium size"
            price="$12.50"
            img={P03}
          />
          <RecommendedItemCard
            description="Leather wallet"
            price="$34.00"
            img={P04}
          />
          <RecommendedItemCard
            description="Jeans bag for travel for men"
            price="$99.00"
            img={P05}
          />
          <RecommendedItemCard
            description="Canon camera black, 100x zoom"
            price="$9.99"
            img={P06}
          />
          <RecommendedItemCard
            description="Headset for gaming with mic"
            price="$8.99"
            img={P07}
          />
          <RecommendedItemCard
            description="Smartwatch silver color modern"
            price="$10.30"
            img={P05}
          />
          <RecommendedItemCard
            description="T-shirts with multiple colors, for men"
            price="$10.30"
            img={P08}
          />
          <RecommendedItemCard
            description="Jeans bag for travel for men"
            price="$80.95"
            img={P09}
          />
        </Flex>
      </Container>
    </RecommendedsBox>
  );
}
