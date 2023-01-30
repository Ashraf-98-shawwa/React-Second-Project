import React from 'react'
import Breadcrumb from '../Components/Breadcrumb';
import DiscountBanner from '../Components/DiscountBanner';
import Header from '../Sections/Header';
import MainFooter from '../Sections/MainFooter';
import ProductInfo from '../Sections/ProductInfo';
import ProductOverview from '../Sections/ProductOverview';
import RelatedProducts from '../Sections/RelatedProducts';
import Subscribe from '../Sections/Subscribe';

export default function Product() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <ProductInfo/>
      <ProductOverview/>
      <RelatedProducts />
      <DiscountBanner MB="88px"/>
      <Subscribe />
      <MainFooter />
    </>
  );
}
