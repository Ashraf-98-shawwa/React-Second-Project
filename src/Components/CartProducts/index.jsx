import React from "react";
import styled from "styled-components";
import { Flex } from "../../Global/style";
import CartProductCard from "../CartProductCard";
import Container from "../Container";
import { ShopRemove } from "../CartProductCard/style";
import RemoveAllButton from "../RemoveAllButton";
import BackToShopButton from "../BackToShopButton";

// import images
import C1 from "../../Pictures/C1.png";
import C2 from "../../Pictures/C2.png";
import C3 from "../../Pictures/C3.png";
import AE from "../../Pictures/AE.png";
import MC from "../../Pictures/MC.png";
import PP from "../../Pictures/PP.png";
import Vissa from "../../Pictures/Vissa.png";
import AP from "../../Pictures/ApplePay.png";
import { ApplyButton, CartProductsBox, CheckOutButton, Coupon, CouponCheckoutBox, CouponInput, CouponQuestion, Discount, PaymentMethodsPics, Products, Receipt, Subtotal, Tax, Total } from "./style";


export default function CartProducts() {
  return (
    <Container>
      <Flex gap="20">
        <Products>
          <CartProductsBox>
            <CartProductCard
              name="T-shirts with multiple colors, for men and lady"
              img={C1}
              count="9"
              price="$78.99"
              Desc="Size: medium, Color: blue, Material: Plastic Seller: Artel
                Market"
            />
            <CartProductCard
              name="T-shirts with multiple colors, for men and lady"
              Desc="Size: medium, Color: blue,  Material: Plastic
            Seller: Best factory LLC"
              img={C2}
              count="3"
              price="$39.00"
            />
            <CartProductCard
              name="T-shirts with multiple colors, for men and lady"
              img={C3}
              count="1"
              Desc="Size: medium, Color: blue, Material: Plastic Seller: Artel
            Market"
              price="$170.50"
            />
            <ShopRemove>
              <Flex justify="space-between">
                <BackToShopButton />
                <RemoveAllButton />
              </Flex>
            </ShopRemove>
          </CartProductsBox>
        </Products>
        <CouponCheckoutBox>
          <Flex direction="column" gap="12">
            <Coupon>
              <CouponQuestion>Have a coupon?</CouponQuestion>
              <Flex>
                <CouponInput placeholder="Add coupon" />
                <ApplyButton>Apply</ApplyButton>
              </Flex>
            </Coupon>
            <Receipt>
              <Subtotal>
                Subtotal: <span>$1403.97</span>
              </Subtotal>
              <Discount>
                Discount <span>- $60.00</span>
              </Discount>
              <Tax>
                Tax <span>+ $14.00</span>
              </Tax>
              <Total>
                Total: <span>$1357.97</span>
              </Total>
              <CheckOutButton>Checkout</CheckOutButton>
              <PaymentMethodsPics>
                <li>
                  <img src={AE} alt="American express" />
                </li>
                <li>
                  <img src={MC} alt="Master Card" />
                </li>
                <li>
                  <img src={PP} alt="Paypal" />
                </li>
                <li>
                  <img src={Vissa} alt="Vissa" />
                </li>
                <li>
                  <img src={AP} alt="Apple Pay" />
                </li>
              </PaymentMethodsPics>
            </Receipt>
          </Flex>
        </CouponCheckoutBox>
      </Flex>
    </Container>
  );
}
