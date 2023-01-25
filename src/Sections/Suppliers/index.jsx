import React from "react";
import styled from "styled-components";
import { Flex, SectionsTitle } from "../../Global/style";
import Container from "../../Components/Container";
import SupplierCard from "../../Components/SupplierCard";

// import country images
import Usa from "../../Pictures/USA.png";
import UAE from "../../Pictures/UAE.png";
import Russia from "../../Pictures/Russia.png";
import China from "../../Pictures/China.png";
import DK from "../../Pictures/DK.png";
import UK from "../../Pictures/UK.png";
import Italy from "../../Pictures/Italy.png";
import AUS from "../../Pictures/AUS.png";
import FR from "../../Pictures/FR.png";

const SuppliersBox = styled.section`
  padding: 30px 0px 43px;
`;

export default function Suppliers() {
  return (
    <SuppliersBox>
      <Container>
        <SectionsTitle>Suppliers by region</SectionsTitle>
        <Flex  gap="15" align="center" wrap="wrap">
          <SupplierCard img={UAE} name="United States" website="shopname.ae " />
          <SupplierCard img={AUS} name="United States" website="shopname.ae " />
          <SupplierCard img={Usa} name="United States" website="shopname.ae " />
          <SupplierCard
            img={Russia}
            name="United States"
            website="shopname.ae "
          />
          <SupplierCard
            img={Italy}
            name="United States"
            website="shopname.ae "
          />
          <SupplierCard
            img={DK}
            name="United States"
            website="shopname.ae "
          />
          <SupplierCard
            img={FR}
            name="United States"
            website="shopname.ae "
          />
          <SupplierCard
            img={UAE}
            name="United States"
            website="shopname.ae "
          />
          <SupplierCard
            img={China}
            name="United States"
            website="shopname.ae "
          />
          <SupplierCard
            img={UK}
            name="United States"
            website="shopname.ae "
          />
        </Flex>
      </Container>
    </SuppliersBox>
  );
}
