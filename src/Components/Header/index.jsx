import React from "react";
import AccountNav from "../AccountNav";
import Container from "../Container";
import Logo from "../Logo";
import MainNav from "../MainNav";
import SearchBox from "../SearchBox";
import { Filters, Flex, HeaderBox } from "./style";

export default function Header() {
  return (
    <HeaderBox>
      <Container>
        <Flex padding>
          <Logo />
          <SearchBox />
          <AccountNav />
        </Flex>
      </Container>
      <Filters>
        <Container>
          <Flex padding>
            <MainNav />
            <h1>Lang and price</h1>
          </Flex>
        </Container>
      </Filters>
    </HeaderBox>
  );
}
