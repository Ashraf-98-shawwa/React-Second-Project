import React from "react";
import Header from "../Sections/Header";
import Subscripe from "../Sections/Subscribe";
import MainFooter from "../Sections/MainFooter";
import Suppliers from "../Sections/Suppliers";
import Services from "../Sections/Services";
import Recommendeds from "../Sections/Recommendeds";
import Request from "../Sections/Request";
import CategoryList from "../Sections/CategoryList";

// importing category photos
import Outdoor from "../Pictures/Outdoor.png";
import Electronics from "../Pictures/Electronics.png";
import Hero from "../Sections/Hero";
import Offers from "../Sections/Offers";
import { NavLink } from "react-router-dom";
import Container from "../Components/Container";
import { Flex } from "../Global/style";

export default function Main() {

  

  
  return (
    <>
      <Header />
      <Container>
        <Flex justify="center" gap="15">

        <NavLink style={{ color:"white" }} to="/cart">cart page</NavLink>
        <NavLink style={{ color:"white" }} to="/main">main page</NavLink>
        <NavLink style={{ color:"white" }} to="/product">product page</NavLink>
        <NavLink style={{ color:"white" }} to="/list">list page</NavLink>

        </Flex>
      </Container>

      <Hero />
      <Offers />
      <CategoryList category="Home and outdoor" img={Outdoor} />
      <CategoryList
        category="Consumer electronics and gadgets"
        img={Electronics}
      />
      <Request />
      <Recommendeds />
      <Services />
      <Suppliers />
      <Subscripe />
      <MainFooter />
    </>
  );
}
