import React from 'react'
import styled from 'styled-components'
 
//Importing payment methods logos
import AE from "../../Pictures/AE.png";
import MC from "../../Pictures/MC.png";
import PP from "../../Pictures/PP.png";
import Vissa from "../../Pictures/Vissa.png";


const PayMethodslist = styled.ul`
    display: flex;
    gap: 14px;
    list-style: none;
`
export default function PayMethods() {
  return (
    <PayMethodslist>
      <li>
        <img src={AE} alt="American Express" />
      </li>
      <li>
        <img src={MC} alt="Master Card" />
      </li>
      <li>
        <img src={PP} alt="Paypal" />
      </li>
      <li>
        <img src={Vissa} alt="Visa Card" />
      </li>
    </PayMethodslist>
  );
}
