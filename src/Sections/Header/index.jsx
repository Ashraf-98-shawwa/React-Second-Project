import React from "react";
import AccountNav from "../../Components/AccountNav";
import Container from "../../Components/Container";
import Logo from "../../Components/Logo";
import MainNav from "../../Components/MainNav";
import SearchBox from "../../Components/SearchBox";

import { Filters, FlexBetween, HeaderBox } from "./style";

export default function Header(props) {
  if (props.Dnone) {
    return (
      <HeaderBox>
        <Container>
          <FlexBetween padding>
            <Logo />
            <AccountNav />
          </FlexBetween>
        </Container>
      </HeaderBox>
    );
  } else {
    return (
      <HeaderBox>
        <Container>
          <FlexBetween padding>
            <Logo />
            <SearchBox />
            <AccountNav />
          </FlexBetween>
        </Container>
        <Filters>
          <Container>
            <FlexBetween padding>
              <MainNav />
              <h1>Lang and price</h1>
            </FlexBetween>
          </Container>
        </Filters>
      </HeaderBox>
    );
  }
}
