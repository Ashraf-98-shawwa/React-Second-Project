import React, { useState } from "react";
import styled from "styled-components";
import Container from "../../Components/Container";
import FilterCard from "../../Components/FilterCard";
import LayoutFilter from "../../Components/LayoutFilter";
import Pagination from "../../Components/Pagination";
import SelectedProductCard from "../../Components/SelectedProductCard";
import { Flex } from "../../Global/style";
import CheckboxInput from "../../Components/CheckboxInput";

// importing icons
import S1 from "../../Pictures/S1.png";
import S2 from "../../Pictures/S2.png";
import S3 from "../../Pictures/S3.png";
import S4 from "../../Pictures/S4.png";
import S5 from "../../Pictures/S5.png";
import uparrow from "../../Pictures/upArrow.png";
import FiveStars from "../../Pictures/5stars.png";
import FourStars from "../../Pictures/4stars.png";
import ThreeStars from "../../Pictures/3stars.png";
import TwoStars from "../../Pictures/2stars.png";
import S6 from "../../Pictures/S6.png";
import RadioInput from "../../Components/RadioInput";

const AccordionCardBox = styled.div`
  padding: 14px 0px 15px;
  border-top: 1px solid #e3e8ee;
`;

const AccordionName = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.pallet.Text};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FiltersSelection = styled.div`
  width: 240px;
`;
const ProductsSelected = styled.div`
  width: 920px;
`;


const AccordionContent = styled.div`
  display: ${(props) => (props.display === "block" ? "block" : "none")};
  padding-top: 24px;
  & ul li {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => props.theme.pallet.list};
    margin-bottom: 16px;
    cursor: pointer;
  }

  & ul li.blue {
    color: #0d6efd;
  }
`;

const ClearFiltersP = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #0d6efd;
  margin-top: 20px;
  cursor: pointer;
`;


export default function Content(props) {
  const [Filters, setFilters] = useState(["Samsung","Apple"]);
  const [categoryDisplay, setcategoryDisplay] = useState("none");
  const [BrandsDisplay, setBrandsDisplay] = useState("none");
  const [FeaturesDisplay, setFeaturesDisplay] = useState("none");
  const [RatingsDisplay, setRatingsDisplay] = useState("none");
  const [ConditionDisplay, setConditionDisplay] = useState("none");
  const [PriceRange, setPriceRange] = useState("none");

  if (props.lined) {
    return (
      <Container>
        <Flex gap="12">
          <FiltersSelection>
            <AccordionCardBox>
              <AccordionName>
                Category
                <img
                  style={
                    categoryDisplay === "none"
                      ? { cursor: "pointer", transform: "rotate(180deg)" }
                      : { cursor: "pointer" }
                  }
                  src={uparrow}
                  alt="uparrow icon"
                  onClick={() =>
                    setcategoryDisplay((prevstate) =>
                      prevstate === "block" ? "none" : "block"
                    )
                  }
                />
              </AccordionName>
              <AccordionContent
                display={categoryDisplay === "none" ? "none" : "block"}
              >
                <ul>
                  <li>Mobile accessory</li>
                  <li>Electronics</li>
                  <li>Smartphones </li>
                  <li>Modern tech</li>
                  <li className="blue">See all</li>
                </ul>
              </AccordionContent>
            </AccordionCardBox>

            <AccordionCardBox>
              <AccordionName>
                Brands
                <img
                  style={
                    BrandsDisplay === "none"
                      ? { cursor: "pointer", transform: "rotate(180deg)" }
                      : { cursor: "pointer" }
                  }
                  src={uparrow}
                  alt="uparrow icon"
                  onClick={() =>
                    setBrandsDisplay((prevstate) =>
                      prevstate === "block" ? "none" : "block"
                    )
                  }
                />
              </AccordionName>
              <AccordionContent
                display={BrandsDisplay === "none" ? "none" : "block"}
              >
                <ul>
                  <li>
                    <CheckboxInput id="Samsung" label="Samsung" />
                  </li>
                  <li>
                    <CheckboxInput id="Apple" label="Apple" />
                  </li>
                  <li>
                    <CheckboxInput id="Huawei" label="Huawei" />
                  </li>
                  <li>
                    <CheckboxInput id="Pocco" label="Pocco" />
                  </li>
                  <li>
                    <CheckboxInput id="Lenovo" label="Lenovo" />
                  </li>
                  <li className="blue">See all</li>
                </ul>
              </AccordionContent>
            </AccordionCardBox>

            <AccordionCardBox>
              <AccordionName>
                Features
                <img
                  style={
                    FeaturesDisplay === "none"
                      ? { cursor: "pointer", transform: "rotate(180deg)" }
                      : { cursor: "pointer" }
                  }
                  src={uparrow}
                  alt="uparrow icon"
                  onClick={() =>
                    setFeaturesDisplay((prevstate) =>
                      prevstate === "block" ? "none" : "block"
                    )
                  }
                />
              </AccordionName>
              <AccordionContent
                display={FeaturesDisplay === "none" ? "none" : "block"}
              >
                <ul>
                  <li>
                    <CheckboxInput id="Metallic" label="Metallic" />
                  </li>
                  <li>
                    <CheckboxInput id="Plastic cover" label="Plastic cover" />
                  </li>
                  <li>
                    <CheckboxInput id="8GB Ram" label="8GB Ram" />
                  </li>
                  <li>
                    <CheckboxInput id="Super power" label="Super power" />
                  </li>
                  <li>
                    <CheckboxInput id="Large Memory" label="Large Memory" />
                  </li>
                  <li className="blue">See all</li>
                </ul>
              </AccordionContent>
            </AccordionCardBox>

            <AccordionCardBox>
              <AccordionName>
                Price range
                <img
                  style={
                    PriceRange === "none"
                      ? { cursor: "pointer", transform: "rotate(180deg)" }
                      : { cursor: "pointer" }
                  }
                  src={uparrow}
                  alt="uparrow icon"
                  onClick={() =>
                    setPriceRange((prevstate) =>
                      prevstate === "block" ? "none" : "block"
                    )
                  }
                />
              </AccordionName>
              <AccordionContent
                display={PriceRange === "none" ? "none" : "block"}
              >
                <ul>Price range</ul>
              </AccordionContent>
            </AccordionCardBox>

            <AccordionCardBox>
              <AccordionName>
                Condition
                <img
                  style={
                    ConditionDisplay === "none"
                      ? { cursor: "pointer", transform: "rotate(180deg)" }
                      : { cursor: "pointer" }
                  }
                  src={uparrow}
                  alt="uparrow icon"
                  onClick={() =>
                    setConditionDisplay((prevstate) =>
                      prevstate === "block" ? "none" : "block"
                    )
                  }
                />
              </AccordionName>
              <AccordionContent
                display={ConditionDisplay === "none" ? "none" : "block"}
              >
                <ul>
                  <li>
                    <RadioInput id="Any" label="Any" />
                  </li>
                  <li>
                    <RadioInput id="Refurbished" label="Refurbished" />
                  </li>
                  <li>
                    <RadioInput id="Brand new" label="Brand new" />
                  </li>
                  <li>
                    <RadioInput id="Old items" label="Old items" />
                  </li>
                </ul>
              </AccordionContent>
            </AccordionCardBox>

            <AccordionCardBox>
              <AccordionName>
                Ratings
                <img
                  style={
                    RatingsDisplay === "none"
                      ? { cursor: "pointer", transform: "rotate(180deg)" }
                      : { cursor: "pointer" }
                  }
                  src={uparrow}
                  alt="uparrow icon"
                  onClick={() =>
                    setRatingsDisplay((prevstate) =>
                      prevstate === "block" ? "none" : "block"
                    )
                  }
                />
              </AccordionName>
              <AccordionContent
                display={RatingsDisplay === "none" ? "none" : "block"}
              >
                <ul>
                  <li>
                    <CheckboxInput id="5stars" imgLabel={FiveStars} />
                  </li>
                  <li>
                    <CheckboxInput id="4stars" imgLabel={FourStars} />
                  </li>
                  <li>
                    <CheckboxInput id="3stars" imgLabel={ThreeStars} />
                  </li>
                  <li>
                    <CheckboxInput id="2stars" imgLabel={TwoStars} />
                  </li>
                </ul>
              </AccordionContent>
            </AccordionCardBox>
          </FiltersSelection>
          <ProductsSelected>
            <LayoutFilter
              HandleSquaredLayout={props.HandleSquaredLayout}
              HandleLinedLayout={props.HandleLinedLayout}
              lined
            />
            {Filters ? (
              <Flex align="center" gap="8">
                {Filters.map((item) => (
                  <FilterCard name={item} />
                ))}
                <ClearFiltersP>Clear all filters</ClearFiltersP>
              </Flex>
            ) : (
              ""
            )}

            <SelectedProductCard
              row
              img={S1}
              orders="154"
              PrPrice="$1128.00"
              Previous={true}
              description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua"
            />
            <SelectedProductCard
              row
              img={S2}
              description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua"
              orders="154"
            />

            <SelectedProductCard
              row
              img={S3}
              description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua"
              orders="154"
            />

            <SelectedProductCard
              row
              img={S4}
              description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua"
              orders="154"
            />

            <SelectedProductCard
              row
              img={S5}
              description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua"
              orders="154"
            />

            <SelectedProductCard
              row
              img={S6}
              description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua"
              orders="154"
            />
            <Pagination />
          </ProductsSelected>
        </Flex>
      </Container>
    );
  } else {
    return (
      <Container>
        <Flex gap="12">
          <FiltersSelection>
            <AccordionCardBox>
              <AccordionName>
                Category
                <img
                  style={
                    categoryDisplay === "none"
                      ? { cursor: "pointer", transform: "rotate(180deg)" }
                      : { cursor: "pointer" }
                  }
                  src={uparrow}
                  alt="uparrow icon"
                  onClick={() =>
                    setcategoryDisplay((prevstate) =>
                      prevstate === "block" ? "none" : "block"
                    )
                  }
                />
              </AccordionName>
              <AccordionContent
                display={categoryDisplay === "none" ? "none" : "block"}
              >
                <ul>
                  <li>Mobile accessory</li>
                  <li>Electronics</li>
                  <li>Smartphones </li>
                  <li>Modern tech</li>
                  <li className="blue">See all</li>
                </ul>
              </AccordionContent>
            </AccordionCardBox>

            <AccordionCardBox>
              <AccordionName>
                Brands
                <img
                  style={
                    BrandsDisplay === "none"
                      ? { cursor: "pointer", transform: "rotate(180deg)" }
                      : { cursor: "pointer" }
                  }
                  src={uparrow}
                  alt="uparrow icon"
                  onClick={() =>
                    setBrandsDisplay((prevstate) =>
                      prevstate === "block" ? "none" : "block"
                    )
                  }
                />
              </AccordionName>
              <AccordionContent
                display={BrandsDisplay === "none" ? "none" : "block"}
              >
                <ul>
                  <li>
                    <CheckboxInput id="Samsung" label="Samsung" />
                  </li>
                  <li>
                    <CheckboxInput id="Apple" label="Apple" />
                  </li>
                  <li>
                    <CheckboxInput id="Huawei" label="Huawei" />
                  </li>
                  <li>
                    <CheckboxInput id="Pocco" label="Pocco" />
                  </li>
                  <li>
                    <CheckboxInput id="Lenovo" label="Lenovo" />
                  </li>
                  <li className="blue">See all</li>
                </ul>
              </AccordionContent>
            </AccordionCardBox>

            <AccordionCardBox>
              <AccordionName>
                Features
                <img
                  style={
                    FeaturesDisplay === "none"
                      ? { cursor: "pointer", transform: "rotate(180deg)" }
                      : { cursor: "pointer" }
                  }
                  src={uparrow}
                  alt="uparrow icon"
                  onClick={() =>
                    setFeaturesDisplay((prevstate) =>
                      prevstate === "block" ? "none" : "block"
                    )
                  }
                />
              </AccordionName>
              <AccordionContent
                display={FeaturesDisplay === "none" ? "none" : "block"}
              >
                <ul>
                  <li>
                    <CheckboxInput id="Metallic" label="Metallic" />
                  </li>
                  <li>
                    <CheckboxInput id="Plastic cover" label="Plastic cover" />
                  </li>
                  <li>
                    <CheckboxInput id="8GB Ram" label="8GB Ram" />
                  </li>
                  <li>
                    <CheckboxInput id="Super power" label="Super power" />
                  </li>
                  <li>
                    <CheckboxInput id="Large Memory" label="Large Memory" />
                  </li>
                  <li className="blue">See all</li>
                </ul>
              </AccordionContent>
            </AccordionCardBox>

            <AccordionCardBox>
              <AccordionName>
                Price range
                <img
                  style={
                    PriceRange === "none"
                      ? { cursor: "pointer", transform: "rotate(180deg)" }
                      : { cursor: "pointer" }
                  }
                  src={uparrow}
                  alt="uparrow icon"
                  onClick={() =>
                    setPriceRange((prevstate) =>
                      prevstate === "block" ? "none" : "block"
                    )
                  }
                />
              </AccordionName>
              <AccordionContent
                display={PriceRange === "none" ? "none" : "block"}
              >
                <ul>Price range</ul>
              </AccordionContent>
            </AccordionCardBox>

            <AccordionCardBox>
              <AccordionName>
                Condition
                <img
                  style={
                    ConditionDisplay === "none"
                      ? { cursor: "pointer", transform: "rotate(180deg)" }
                      : { cursor: "pointer" }
                  }
                  src={uparrow}
                  alt="uparrow icon"
                  onClick={() =>
                    setConditionDisplay((prevstate) =>
                      prevstate === "block" ? "none" : "block"
                    )
                  }
                />
              </AccordionName>
              <AccordionContent
                display={ConditionDisplay === "none" ? "none" : "block"}
              >
                <ul>
                  <li>
                    <RadioInput id="Any" label="Any" />
                  </li>
                  <li>
                    <RadioInput id="Refurbished" label="Refurbished" />
                  </li>
                  <li>
                    <RadioInput id="Brand new" label="Brand new" />
                  </li>
                  <li>
                    <RadioInput id="Old items" label="Old items" />
                  </li>
                </ul>
              </AccordionContent>
            </AccordionCardBox>

            <AccordionCardBox>
              <AccordionName>
                Ratings
                <img
                  style={
                    RatingsDisplay === "none"
                      ? { cursor: "pointer", transform: "rotate(180deg)" }
                      : { cursor: "pointer" }
                  }
                  src={uparrow}
                  alt="uparrow icon"
                  onClick={() =>
                    setRatingsDisplay((prevstate) =>
                      prevstate === "block" ? "none" : "block"
                    )
                  }
                />
              </AccordionName>
              <AccordionContent
                display={RatingsDisplay === "none" ? "none" : "block"}
              >
                <ul>
                  <li>
                    <CheckboxInput id="5stars" imgLabel={FiveStars} />
                  </li>
                  <li>
                    <CheckboxInput id="4stars" imgLabel={FourStars} />
                  </li>
                  <li>
                    <CheckboxInput id="3stars" imgLabel={ThreeStars} />
                  </li>
                  <li>
                    <CheckboxInput id="2stars" imgLabel={TwoStars} />
                  </li>
                </ul>
              </AccordionContent>
            </AccordionCardBox>
          </FiltersSelection>
          <ProductsSelected>
            <LayoutFilter
              HandleSquaredLayout={props.HandleSquaredLayout}
              HandleLinedLayout={props.HandleLinedLayout}
              squared
            />

            {Filters ? (
              <Flex align="center" gap="8">
                {Filters.map((item) => (
                  <FilterCard name={item} />
                ))}
                <ClearFiltersP>Clear all filters</ClearFiltersP>
              </Flex>
            ) : (
              ""
            )}

            <Flex  gap="20" wrap="wrap">
              <SelectedProductCard
                img={S1}
                orders="154"
                PrPrice="$1128.00"
                Previous={true}
                description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua"
              />
              <SelectedProductCard
                img={S2}
                description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua"
                orders="154"
              />

              <SelectedProductCard
                img={S3}
                description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua"
                orders="154"
              />

              <SelectedProductCard
                img={S4}
                description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua"
                orders="154"
              />

              <SelectedProductCard
                img={S5}
                description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua"
                orders="154"
              />

              <SelectedProductCard
                img={S6}
                description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua"
                orders="154"
              />
              <SelectedProductCard
                img={S1}
                orders="154"
                PrPrice="$1128.00"
                Previous={true}
                description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua"
              />
              <SelectedProductCard
                img={S2}
                description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua"
                orders="154"
              />

              <SelectedProductCard
                img={S3}
                description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua"
                orders="154"
              />
            </Flex>
            <Pagination />
          </ProductsSelected>
        </Flex>
      </Container>
    );
  }
}
