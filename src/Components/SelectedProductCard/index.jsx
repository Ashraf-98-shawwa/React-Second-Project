import React from "react";
import { Flex } from "../../Global/style";
import {
  Details,
  Dot,
  Heart,
  Orders,
  PreviousPrice,
  ProductDescription,
  ProductDetails,
  ProductName,
  ProductPrice,
  Rate,
  RateOrderShiping,
  SelectedProductCardBox,
  Shipping,
} from "./style";
import { NavLink } from "react-router-dom";

// importing icons
import orangestar from "../../Pictures/orangeStar.png";
import graystar from "../../Pictures/graystar.png";
import heart from "../../Pictures/emptyheart.png";

export default function SelectedProductCard(props) {
  return (
    <SelectedProductCardBox>
      <Flex>
        <div>
          <img width="189px" src={props.img} alt="selected product" />
        </div>
        <ProductDetails>
          <ProductName>Canon Cmera EOS 2000, Black 10x zoom</ProductName>
          <ProductPrice>$998.00</ProductPrice>

          {props.Previous === true ? (
            <PreviousPrice>{props.PrPrice}</PreviousPrice>
          ) : (
            ""
          )}
          <RateOrderShiping>
            <div>
              <img src={orangestar} alt="star" />
              <img src={orangestar} alt="star" />
              <img src={orangestar} alt="star" />
              <img src={orangestar} alt="star" />
              <img src={graystar} alt="star" />
              <Rate>7.5</Rate>
            </div>
            <Dot></Dot>
            <Orders>{props.orders} orders</Orders>
            <Dot></Dot>
            <Shipping>Free Shipping </Shipping>
          </RateOrderShiping>
          <ProductDescription>{props.description}</ProductDescription>
          <NavLink to="/productid">
            <Details>View details</Details>
          </NavLink>
        </ProductDetails>
        <Heart >
          <img src={heart} alt="heart" />
        </Heart>
      </Flex>
    </SelectedProductCardBox>
  );
}
