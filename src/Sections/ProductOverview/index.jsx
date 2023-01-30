import React from "react";
import Container from "../../Components/Container";
import {
  DescriptionP,
  DownBox,
  Features,
  LeftList,
  LeftListItem,
  OverviewNav,
  OverviewNavTab,
  ProductFeature,
  ProductOverviewBox,
  ProductTable,
  RightList,
  RightListItem,
} from "./style";

// import icon
import True from "../../Pictures/true.png";
import { Flex } from "../../Global/style";
import SuggestedProducts from "../../Components/SuggestedProducts";

export default function ProductOverview() {
  return (
    <Container>
      <Flex gap="20">
        <ProductOverviewBox>
          <OverviewNav>
            <OverviewNavTab className="active">Description</OverviewNavTab>
            <OverviewNavTab>Reviews</OverviewNavTab>
            <OverviewNavTab>Shipping</OverviewNavTab>
            <OverviewNavTab>About company</OverviewNavTab>
          </OverviewNav>
          <DownBox>
            <DescriptionP>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, <br /> Quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </DescriptionP>
            <ProductTable>
              <LeftList>
                <LeftListItem>Model</LeftListItem>
                <LeftListItem>Style</LeftListItem>
                <LeftListItem>Certificate</LeftListItem>
                <LeftListItem>Size</LeftListItem>
                <LeftListItem>Memory</LeftListItem>
              </LeftList>
              <RightList>
                <RightListItem>#8786867</RightListItem>
                <RightListItem>Classic style</RightListItem>
                <RightListItem>ISO-898921212</RightListItem>
                <RightListItem>34mm x 450mm x 19mm</RightListItem>
                <RightListItem>36GB RAM</RightListItem>
              </RightList>
            </ProductTable>
            <Features>
              <ProductFeature>
                <img src={True} alt="True icon" /> Some great feature name here
              </ProductFeature>
              <ProductFeature>
                <img src={True} alt="True icon" />
                Lorem ipsum dolor sit amet, consectetur
              </ProductFeature>
              <ProductFeature>
                <img src={True} alt="True icon" /> Duis aute irure dolor in
                reprehenderit
              </ProductFeature>
              <ProductFeature>
                <img src={True} alt="True icon" /> Some great feature name here
              </ProductFeature>
            </Features>
          </DownBox>
        </ProductOverviewBox>
        <SuggestedProducts />
      </Flex>
    </Container>
  );
}
