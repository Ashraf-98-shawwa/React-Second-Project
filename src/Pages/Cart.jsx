import React from "react";
import DiscountBanner from "../Components/DiscountBanner";
import CartHeading from "../Components/CartHeading";
import ForLater from "../Sections/ForLater";
import Header from "../Sections/Header";
import MainFooter from "../Sections/MainFooter";
import Pros from "../Sections/Pros";
import Subscribe from "../Sections/Subscribe";
import CartProducts from "../Components/CartProducts";

export default function Cart() {
  return (
    <>
      <Header Dnone />
      <CartHeading />
      <CartProducts />
      <Pros />
      <ForLater />
      <DiscountBanner MB="41px" />
      <Subscribe />
      <MainFooter />
    </>
  );
}
