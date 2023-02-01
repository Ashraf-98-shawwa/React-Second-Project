import React from "react";
import styled from "styled-components";
import Container from "../../Components/Container";
import OfferCard from "../../Components/OfferCard";
import { Flex } from "../../Global/style";

// import offers images
import O1 from "../../Pictures/O1.png";
import O2 from "../../Pictures/O2.png";
import O3 from "../../Pictures/O3.png";
import O4 from "../../Pictures/O4.png";
import O5 from "../../Pictures/O5.png";

const OffersSectionBox = styled.section`
  margin-top: 30px;
  background-color: ${(props) => props.theme.pallet.Box};
  border: 1px solid #e3e8ee;
  border-radius: 6px;
`;

const SectionDetails = styled.div`
  padding: 20px;
  min-width: 281px;
  border-right: 1px solid #e0e0e0;
`;
const SectionNameH3 = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.2px;
  color: ${(props) => props.theme.pallet.Text};
`;

const SectionDescriptionP = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #8b96a5;
  margin-bottom: 18px;
`;

const OffersBox = styled.div`
  display: flex;
  width: calc(100% - 281px);
  `;

export default function Offers() {
  return (
    <Container>
      <OffersSectionBox>
        <Flex>
          <SectionDetails>
            <SectionNameH3>Deals and offers</SectionNameH3>
            <SectionDescriptionP>Hygiene equipments</SectionDescriptionP>
            <h5>Count Down days</h5>
          </SectionDetails>
          <OffersBox>
              <OfferCard img={O1} product="Smart watches" discount="25%" />
              <OfferCard img={O2} product="Laptops " discount="15%" />
              <OfferCard img={O3} product="GoPro cameras " discount="40%" />
              <OfferCard img={O4} product="Headphones" discount="25%" />
              <OfferCard img={O5} product="Canon camreras" discount="25%" />
          </OffersBox>
        </Flex>
      </OffersSectionBox>
    </Container>
  );
}
