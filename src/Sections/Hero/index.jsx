import React from "react";
import Button from "../../Components/Button";
import Container from "../../Components/Container";
import { Flex } from "../../Global/style";
import {
  Banner,
  BannerH1,
  BannerH2,
  Card,
  CardButton,
  CardP,
  CategoriesList,
  CategoryLi,
  HeroBox,
  RightSide,
} from "./style";

// import avatar pic
import avatar from "../../Pictures/Avatar.png";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <Container>
      <HeroBox>
        <Flex align="center" gap="20">
          <CategoriesList>
            <CategoryLi className="active">Automobiles</CategoryLi>
            <CategoryLi>Clothes and wear</CategoryLi>
            <CategoryLi>Home interiors</CategoryLi>
            <CategoryLi>Computer and tech</CategoryLi>
            <CategoryLi>Tools, equipments</CategoryLi>
            <CategoryLi>Sports and outdoor</CategoryLi>
            <CategoryLi>Animal and pets</CategoryLi>
            <CategoryLi>Machinery tools</CategoryLi>
            <CategoryLi>More category</CategoryLi>
          </CategoriesList>
          <Banner>
            <BannerH2>Latest trending</BannerH2>
            <BannerH1>Electronic items</BannerH1>
            <Button title="Learn more" />
          </Banner>
          <RightSide>
            <Flex gap="10" direction="column">
              <Card custom={true} color="#E3F0FF">
                <Flex style={{ marginBottom: "14px" }} align="center" gap="9">
                  <img src={avatar} alt="profile pic" />
                  <CardP>
                    Hi, user <br /> let’s get stated
                  </CardP>
                </Flex>
                <NavLink to="/Sign-up">
                  <CardButton
                    bordercolor="#0D6EFD"
                    color="white"
                    bgcolor="#0D6EFD"
                    type="button"
                  >
                    Join now
                  </CardButton>
                </NavLink>
                <NavLink to="/login">
                <CardButton
                  bordercolor="#E3E8EE"
                  bgcolor="white"
                  color="#0D6EFD"
                  type="button"
                  MT="6"
                  >
                  Log in
                </CardButton>
                  </NavLink>
              </Card>
              <Card color="#F38332">Get US $10 off with a new supplier</Card>
              <Card color="#55BDC3">Send quotes with supplier preferences</Card>
            </Flex>
          </RightSide>
        </Flex>
      </HeroBox>
    </Container>
  );
}
