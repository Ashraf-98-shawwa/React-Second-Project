import React from "react";
import { Flex } from "../../Global/style";

import RemoveButton from "../RemoveButton";
import SaveForLaterButton from "../SaveForLaterButton";
import { CartProductCardBox, CartSelect, Desc, Details, Name, Price, ProductDetailsBox, ProductPrice } from "./style";

import arrow from "../../Pictures/downarrow.png"


export default function CartProductCard(props) {
  
    return (
      <CartProductCardBox>
        <Flex justify="space-between">
          <ProductDetailsBox>
            <img width={80} height={80} src={props.img} alt="cart product" />
            <Details>
              <Name>{props.name}</Name>
              <Desc>{props.Desc}</Desc>
              <Flex gap="6">
                <RemoveButton id={props.id} />
                <SaveForLaterButton />
              </Flex>
            </Details>
          </ProductDetailsBox>
          <ProductPrice>
            <Flex gap="12" align="flex-end" direction="column">
              <Price>{props.price}</Price>
              <CartSelect defaultValue={"1"} name="Test" id="Test">
                <option  value={props.count}>
                  Qty: {props.count}
                </option>
                <option value="1">Qty: 1</option>
                <option value="2">Qty: 2</option>
                <option value="3">Qty: 3</option>
                <option value="4">Qty: 4</option>
                <option value="5">Qty: 5</option>
                <option value="6">Qty: 6</option>
                <option value="7">Qty: 7</option>
              </CartSelect>
            </Flex>
            <img
              style={{
                position: "absolute",
                bottom: "72px",
                right: "10px",
                zIndex: "0",
              }}
              src={arrow}
              alt="arrow icon"
            />
          </ProductPrice>
        </Flex>
      </CartProductCardBox>
    );
}
