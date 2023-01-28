import React from "react";
import styled from "styled-components";
import Container from "../../Components/Container";
import ForLaterProductCard from "../../Components/ForLaterProductCard";
import { Flex } from "../../Global/style";
import { ForLaterBox, SectionName } from "./style";

// importing images 
import F1 from "../../Pictures/F1.png";
import F2 from "../../Pictures/F2.png";
import F3 from "../../Pictures/F3.png";
import F4 from "../../Pictures/F4.png";



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
