import React from "react";
import styled from "styled-components";
import Container from "../../Components/Container";
import RelatedProductCard from "../../Components/RelatedProductCard";
import { Flex } from "../../Global/style";
import { SectionName } from "../ForLater/style";

// importing images
import R1 from "../../Pictures/F1.png";
import R2 from "../../Pictures/F3.png";
import R3 from "../../Pictures/R3.png";
import R4 from "../../Pictures/F4.png";
import R5 from "../../Pictures/R5.png";
import R6 from "../../Pictures/F2.png";

const RelatedProductsBox = styled.div`
  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  padding: 20px 26px 35px 22px;
  margin-top: 20px;
`;

export default function RelatedProducts() {
  return (
    <Container>
      <RelatedProductsBox>
        <SectionName>Related products</SectionName>
        <Flex gap="20">
          <RelatedProductCard
            img={R1}
            name="Xiaomi Redmi 8 Original"
            price="$32.00-$40.00"
          />
          <RelatedProductCard
            img={R2}
            name="Xiaomi Redmi 8 Original"
            price="$32.00-$40.00"
          />
          <RelatedProductCard
            img={R3}
            name="Xiaomi Redmi 8 Original"
            price="$32.00-$40.00"
          />
          <RelatedProductCard
            img={R4}
            name="Xiaomi Redmi 8 Original"
            price="$32.00-$40.00"
          />
          <RelatedProductCard
            img={R5}
            name="Xiaomi Redmi 8 Original"
            price="$32.00-$40.00"
          />
          <RelatedProductCard
            img={R6}
            name="Xiaomi Redmi 8 Original"
            price="$32.00-$40.00"
          />
        </Flex>
      </RelatedProductsBox>
    </Container>
  );
}
