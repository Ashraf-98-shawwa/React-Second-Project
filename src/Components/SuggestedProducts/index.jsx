import React from "react";
import styled from "styled-components";
import SuggestedProductCard from "../SuggestedProductCard";


// import pictures 
import SG1 from "../../Pictures/SG1.png";
import SG2 from "../../Pictures/SG2.png";
import SG3 from "../../Pictures/SG3.png";
import SG4 from "../../Pictures/SG4.png";
import SG5 from "../../Pictures/SG5.png";

const SuggestedProductsBox = styled.div`
  background-color: ${(props) => props.theme.pallet.Box};
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  height: 553px;
  padding: 20px 22px 36px 16px;
  width: 280px;
`;

const BoxName = styled.h4`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.pallet.Text};
  margin-bottom: 14px;
`;
export default function SuggestedProducts() {
  return (
    <SuggestedProductsBox>
      <BoxName>You may like</BoxName>
      <SuggestedProductCard
        img={SG1}
        name="Apple Watch Series Space Gray"
        price="$7.00 - $99.50"
      />
      <SuggestedProductCard
        img={SG2}
        name="Apple Watch Series Space Gray"
        price="$7.00 - $99.50"
      />
      <SuggestedProductCard
        img={SG3}
        name="Apple Watch Series Space Gray"
        price="$7.00 - $99.50"
      />
      <SuggestedProductCard
        img={SG4}
        name="Apple Watch Series Space Gray"
        price="$7.00 - $99.50"
      />
      <SuggestedProductCard
        img={SG5}
        name="Apple Watch Series Space Gray"
        price="$7.00 - $99.50"
      />
    </SuggestedProductsBox>
  );
}
