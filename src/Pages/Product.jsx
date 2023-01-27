import React from 'react'
import Breadcrumb from '../Components/Breadcrumb';
import DiscountBanner from '../Components/DiscountBanner';
import Header from '../Sections/Header';
import MainFooter from '../Sections/MainFooter';
import Subscribe from '../Sections/Subscribe';

export default function Product() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <DiscountBanner/>
      <Subscribe/>
      <MainFooter />
    </>
  );
}
