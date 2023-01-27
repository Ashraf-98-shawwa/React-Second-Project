import React from "react";
import styled from "styled-components";
import Container from "../../Components/Container";
import ForLaterProductCard from "../../Components/ForLaterProductCard";
import { Flex } from "../../Global/style";

// importing images 
import F1 from "../../Pictures/F1.png";
import F2 from "../../Pictures/F2.png";
import F3 from "../../Pictures/F3.png";
import F4 from "../../Pictures/F4.png";

const ForLaterBox = styled.div`
  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  margin-top: 31px;
  padding: 20px;
`;

const SectionName = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.2px;
  color: #1c1c1c;
  margin-bottom: 22px;
`;
export default function ForLater() {
  return (
    <Container>
      <ForLaterBox>
        <SectionName>Saved for later</SectionName>
        <Flex gap="20">
          <ForLaterProductCard
            name="GoPro HERO6 4K Action Camera - Black"
            price="$99.50"
            img={F1}
          />
          <ForLaterProductCard
            name="GoPro HERO6 4K Action Camera - Black"
            price="$99.50"
            img={F2}
          />
          <ForLaterProductCard
            name="GoPro HERO6 4K Action Camera - Black"
            price="$99.50"
            img={F3}
          />
          <ForLaterProductCard
            name="GoPro HERO6 4K Action Camera - Black"
            price="$99.50"
            img={F4}
          />
        </Flex>
      </ForLaterBox>
    </Container>
  );
}
