import React, { useState } from "react";
import {
  Dot,
  Orders,
  Rate,
  RateOrderShiping,
} from "../../Components/SelectedProductCard/style";
import Container from "../../Components/Container";
import { Flex } from "../../Global/style";

// import images
import greencheck from "../../Pictures/greencheck.png";
import graystar from "../../Pictures/graystar.png";
import orangestar from "../../Pictures/orangeStar.png";
import message from "../../Pictures/message.png";
import basket from "../../Pictures/basket.png";
import Ger from "../../Pictures/Germany.png";
import verified from "../../Pictures/verified.png";
import language from "../../Pictures/language.png";
import heart from "../../Pictures/emptyheart.png";

import G1 from "../../Pictures/G1.png";
import G2 from "../../Pictures/G2.png";
import G3 from "../../Pictures/G3.png";
import G4 from "../../Pictures/G4.png";
import G5 from "../../Pictures/G5.png";
import G6 from "../../Pictures/G6.png";
import {
  BlackList,
  GrayList,
  HR,
  IMG,
  Name,
  Price,
  Prices,
  ProductDetails,
  ProductImages,
  ProductInfoBox,
  ProductName,
  SaveForLAterButton,
  Stock,
  SupplierButton,
  SupplierDetails,
  SupplierInfo,
  SupplierPicName,
} from "./style";

export default function ProductInfo() {
  const [PhotoID, SetPhotoID] = useState("p1");
  const [PhotoShown, SetPhotoShown] = useState(G1);

  const HandleChangePhoto = (e) => {
    SetPhotoShown(e.target.src);
  };

  return (
    <Container>
      <ProductInfoBox>
        <Flex gap="22">
          <ProductImages>
            <img height="380px" src={PhotoShown} alt="product" />
            <Flex gap="13">
              <img
                id="p1"
                className={PhotoID === "p1" ? "active" : ""}
                src={G1}
                alt="product"
                onClick={HandleChangePhoto}
              />
              <img
                className={PhotoID === "p2" ? "active" : ""}
                onClick={HandleChangePhoto}
                id="p2"
                src={G2}
                alt="product"
              />
              <img
                className={PhotoID === "p3" ? "active" : ""}
                onClick={HandleChangePhoto}
                id="p3"
                src={G3}
                alt="product"
              />
              <img
                className={PhotoID === "p4" ? "active" : ""}
                onClick={HandleChangePhoto}
                id="p4"
                src={G4}
                alt="product"
              />
              <img
                className={PhotoID === "p5" ? "active" : ""}
                onClick={HandleChangePhoto}
                id="p5"
                src={G5}
                alt="product"
              />
              <img
                className={PhotoID === "p6" ? "active" : ""}
                onClick={HandleChangePhoto}
                id="p6"
                src={G6}
                alt="product"
              />
            </Flex>
          </ProductImages>
          <ProductDetails>
            <Stock>
              <img src={greencheck} alt="" /> In stock
            </Stock>
            <ProductName>
              Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
            </ProductName>
            <RateOrderShiping>
              <div>
                <img src={orangestar} alt="star" />
                <img src={orangestar} alt="star" />
                <img src={orangestar} alt="star" />
                <img src={orangestar} alt="star" />
                <img src={graystar} alt="star" />
                <Rate>9.3</Rate>
              </div>
              <Dot></Dot>
              <Orders>
                <img src={message} alt="message icon" />
                32 reviews
              </Orders>
              <Dot></Dot>

              <Orders>
                <img src={basket} alt="basket icon" />
                154 sold
              </Orders>
            </RateOrderShiping>
            <Prices>
              <Price red>
                <h3>$98.00</h3>
                <p>50-100 pcs</p>
              </Price>
              <Price border>
                <h3>$90.00</h3>
                <p>100-700 pcs</p>
              </Price>
              <Price border>
                <h3>$78.00</h3>
                <p>700+ pcs</p>
              </Price>
            </Prices>
            <Flex>
              <GrayList>
                <li>price:</li>
              </GrayList>
              <BlackList>
                <li>Negotiable</li>
              </BlackList>
            </Flex>
            <HR></HR>
            <Flex>
              <GrayList>
                <li>Type: </li>
                <li>Material: </li>
                <li>Design: </li>
              </GrayList>
              <BlackList>
                <li>Classic shoes</li>
                <li>Plastic material</li>
                <li>Modern nice</li>
              </BlackList>
            </Flex>
            <HR></HR>
            <Flex>
              <GrayList>
                <li className="PB">Customization: </li>
                <li>Protection: </li>
                <li>Warranty: </li>
              </GrayList>
              <BlackList>
                <li>Customized logo and design custom packages</li>
                <li>Refund Policy</li>
                <li>2 years full warranty </li>
              </BlackList>
            </Flex>
            <HR></HR>
          </ProductDetails>
          <SupplierDetails>
            <SupplierPicName>
              <IMG>R</IMG>
              <Name>
                <h3>Supplier</h3>
                <h3>Guanjoi Trading LLC</h3>
              </Name>
            </SupplierPicName>
            <SupplierInfo>
              <li>
                <img src={Ger} alt="germany flag" />
                Germany, Berlin
              </li>
              <li>
                <img src={verified} alt="verified icon" />
                Verified Seller
              </li>
              <li>
                <img src={language} alt="world wide icon" />
                Worldwide shipping
              </li>
            </SupplierInfo>
            <SupplierButton bgcolor="#0D6EFD" color="white">
              Send inquiry
            </SupplierButton>
            <SupplierButton
              MT="8"
              bordercolor="#E3E8EE"
              color="#0D6EFD"
              bgcolor="white"
            >
              Seller’s profile
            </SupplierButton>
                      <SaveForLAterButton>
                          <img src={heart} alt="heart icon"  />
                          Save for later

                      </SaveForLAterButton>
          </SupplierDetails>
        </Flex>
      </ProductInfoBox>
    </Container>
  );
}
