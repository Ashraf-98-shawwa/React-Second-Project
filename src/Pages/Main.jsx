import React from 'react'
import Header from "../Sections/Header";
import Subscripe from "../Sections/Subscribe";
import MainFooter from "../Sections/MainFooter";
import Suppliers from "../Sections/Suppliers";
import Services from "../Sections/Services";
import Recommendeds from "../Sections/Recommendeds";
import Request from '../Sections/Request';

export default function Main() {
  return (
    <>
      <Header />
      <Request/>
      <Recommendeds/>
      <Services />
      <Suppliers />
      <Subscripe />
      <MainFooter />
    </>
  );
}
