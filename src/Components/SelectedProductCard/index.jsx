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
import { useProductContext } from "../../Context/productContext";

export default function SelectedProductCard(props) {
  const [like, SetLike] = useState(false);
  
  const {
    state: { products },
    addToCart,
    removeFromCart,
  } = useProductContext();



  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(products));
  // }, [products]);

  const isExistInCart = (id) => products.find((item) => item.id === id);

  const toggleCart = (product) => {
    isExistInCart(product.id) ? removeFromCart(product.id) : addToCart(product);
  };

  const HandleLike = () => {
    SetLike((prevstate) => !prevstate);
  };

  if (props.row) {
    return (
      <SelectedProductCardBox>
        <Flex gap="5">
          <div>
            <img width="189px" src={props.img} alt="selected product" />
          </div>
          <ProductDetails>
            <ProductName>{props.name}</ProductName>
            <ProductPrice>{props.price}</ProductPrice>

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
          <Heart
            style={{ top: 70 }}
            onClick={() => {

              let product = {
                id: props.id,
                img: props.img,
                name: props.name,
                des: props.description,
                price: props.price,
              };

              toggleCart(product);
            }}
          >
            {isExistInCart(props.id) ? "-" : "+"}
          </Heart>
        </Flex>
      </SelectedProductCardBox>
    );
  } else {
    return (
      <SelectedProductCardBox height width>
        <Flex direction="column">
          <div style={{ textAlign: "center" }}>
            <img
              height="202px"
              width="189px"
              src={props.img}
              alt="selected product"
            />
          </div>
          <ProductDetails MT>
            <ProductPrice>{props.price}</ProductPrice>

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
            {props.name}
          </ProductName>
          <Heart bottom className={like ? "active" : ""} onClick={HandleLike}>
            <img src={heart} alt="heart" />
          </Heart>
          <Heart
            style={{ top: 300 }}
            onClick={() => {
              console.log(products);
              let product = {
                id: props.id,
                img: props.img,
                name: props.name,
                des: props.description,
                price: props.price,
              };
              toggleCart(product);

              console.log(products);
            }}
          >
            {isExistInCart(props.id) ? "-" : "+"}
          </Heart>
        </Flex>
      </SelectedProductCardBox>
    );
  }
}
