import React, { useState } from "react";
import Breadcrumb from "../Components/Breadcrumb";
import Content from "../Sections/Content";
import Header from "../Sections/Header";
import MainFooter from "../Sections/MainFooter";
import Subscripe from "../Sections/Subscribe";

export default function List() {
  const [Layout, SetLayout] = useState("lined");

  const HandleLinedLayout = () => {
    SetLayout("lined");
  }
  const HandleSquaredLayout = () => {
    SetLayout("squared");
  }
  return (
    <>
      <Header />
      <Breadcrumb />
      {Layout === "lined" ? (
        <Content  lined HandleSquaredLayout={HandleSquaredLayout} HandleLinedLayout={HandleLinedLayout} />
      ) : (
        <Content HandleSquaredLayout={HandleSquaredLayout} HandleLinedLayout={HandleLinedLayout} />
      )}
      <Subscripe />
      <MainFooter />
    </>
  );
}
