import React from "react";
import CategoryProduct from "../../Components/CategoryProduct";
import Container from "../../Components/Container";
import Button from "../../Components/Button";
import { Flex } from "../../Global/style";
import { electronicsProducts, HomeProducts } from "./products";
import {
  CategoryBox,
  CategoryListBox,
  CategoryName,
  ProductsBox,
} from "./style";


export default function CategoryList(props) {
  return (
    <Container>
      <CategoryListBox>
        <Flex>
          <CategoryBox img={props.img}>
            <CategoryName>{props.category}</CategoryName>
            <Button title="Source now" />
          </CategoryBox>
          <ProductsBox>
            {props.category === "Home and outdoor"
              ? HomeProducts.map((item) => (
                  <CategoryProduct
                    key={item.id}
                    product={item.name}
                    price={item.price}
                    img={item.img}
                  />
                ))
              : ""}

            {props.category === "Consumer electronics and gadgets"
              ? electronicsProducts.map((item) => (
                  <CategoryProduct
                    key={item.id}
                    product={item.name}
                    price={item.price}
                    img={item.img}
                  />
                ))
              : ""}
          </ProductsBox>
        </Flex>
      </CategoryListBox>
    </Container>
  );
}
