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
        <Flex gap="15" align="center" wrap="wrap">
          <SupplierCard
            img={UAE}
            name="Arabic Emirates"
            website="shopname.ae "
          />
          <SupplierCard img={AUS} name="Australia" website="shopname.ae " />
          <SupplierCard img={Usa} name="United States" website="shopname.ae " />
          <SupplierCard img={Russia} name="Russia" website="shopname.ae " />
          <SupplierCard img={Italy} name="Italy" website="shopname.ae " />
          <SupplierCard img={DK} name="Denmark" website="shopname.ae " />
          <SupplierCard img={FR} name="France" website="shopname.ae " />
          <SupplierCard
            img={UAE}
            name="Arabic Emirates"
            website="shopname.ae "
          />
          <SupplierCard img={China} name="China" website="shopname.ae " />
          <SupplierCard img={UK} name="Great Britain" website="shopname.ae " />
        </Flex>
      </Container>
    </SuppliersBox>
  );
}
