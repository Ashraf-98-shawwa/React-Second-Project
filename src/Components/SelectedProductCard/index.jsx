import React, { useState } from "react";
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
  const [like, SetLike] = useState(false);

  const HandleLike = () => {
    SetLike((prevstate) => !prevstate);
  };

  if (props.row) {
    return (
      <SelectedProductCardBox>
        <Flex>
          <div>
            <img  width="189px" src={props.img} alt="selected product" />
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
          <Heart className={like ? "active" : ""} onClick={HandleLike}>
            <img src={heart} alt="heart" />
          </Heart>
        </Flex>
      </SelectedProductCardBox>
    );
  } else {
    return (
      <SelectedProductCardBox height width>
        <Flex direction="column">
          <div style={{ textAlign: "center" }}>
            <img height="202px" width="189px" src={props.img} alt="selected product" />
          </div>
          <ProductDetails MT>
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
            </RateOrderShiping>
          </ProductDetails>
          <ProductName width FW color MT>
            Canon Cmera EOS 2000, Black 10x zoom
          </ProductName>
          <Heart bottom className={like ? "active" : ""} onClick={HandleLike}>
            <img src={heart} alt="heart" />
          </Heart>
        </Flex>
      </SelectedProductCardBox>
    );
  }
}
