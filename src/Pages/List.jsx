import React, { useState } from "react";
import Breadcrumb from "../Components/Breadcrumb";
import Content from "../Sections/Content";
import Header from "../Sections/Header";
import MainFooter from "../Sections/MainFooter";
import Subscripe from "../Sections/Subscribe";

export default function List() {
  const [Layout, SetLayout] = useState("lined");

  const HandleLayout = () => {
    SetLayout((prevstate)=>  prevstate==="lined" ? "" : "lined");
  }
  return (
    <>
      <Header />
      <Breadcrumb />
      {Layout === "lined" ? (
        <Content lined HandleLayout={HandleLayout} />
      ) : (
        <Content HandleLayout={HandleLayout} />
      )}
      <Subscripe />
      <MainFooter />
    </>
  );
}
