import React from 'react'
import styled from 'styled-components'
import Container from '../../Components/Container'
import ServiceCard from '../../Components/ServiceCard'
import { Flex,SectionsTitle } from "../../Global/style";


// importing pictures 
import Hubs from "../../Pictures/Hubs.png";
import Products from "../../Pictures/Products.png";
import shiping from "../../Pictures/shiping.png";
import Monitoring from "../../Pictures/Monitoring.png";



// importing icons
import search from "../../Pictures/search.png";
import secure from "../../Pictures/secure.png";
import customize from "../../Pictures/customize.png";
import Arrowrigth from "../../Pictures/Arrowrigth.png";

const ServicesBox = styled.section`
    padding-top: 33px;
`


export default function Services() {
  return (
    <ServicesBox>
      <Container>
        <SectionsTitle>Our extra services</SectionsTitle>
        <Flex gap="20" wrap="wrap">
          <ServiceCard
            img={Hubs}
            name="Source from
            Industry Hubs"
            icon={search}
          />
          <ServiceCard
            img={Products}
            name="Customize Your Products"
            icon={customize}
          />
          <ServiceCard
            img={shiping}
            name="Fast, reliable shipping by ocean or air"
            icon={Arrowrigth}
          />
          <ServiceCard
            img={Monitoring}
            name="Product monitoring and inspection"
            icon={secure}
          />
        </Flex>
      </Container>
    </ServicesBox>
  );
}
