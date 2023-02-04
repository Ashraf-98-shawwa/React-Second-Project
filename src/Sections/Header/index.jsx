import React from "react";
import AccountNav from "../../Components/AccountNav";
import Container from "../../Components/Container";
import Logo from "../../Components/Logo";
import MainNav from "../../Components/MainNav";
import SearchBox from "../../Components/SearchBox";
import { Flex } from "../../Global/style";
import { Filters, FlexBetween, HeaderBox, Select, SelectBox } from "./style";

import Germany from "../../Pictures/Germany.png";
import downarrow from "../../Pictures/downarrow.png";


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
              <Flex gap="38">
                <SelectBox>
                  <Select>
                    <option value="English, USD">English, USD</option>
                  </Select>
                  <img
                    style={{ position: "absolute", top: "-2px", right: "0" }}
                    src={downarrow}
                    alt="arrow"
                  />
                </SelectBox>
                <SelectBox>
                  <Select>
                    <option value="Ship to">Ship to</option>
                  </Select>
                  <img
                    style={{ position: "absolute", top: "0", left: "45%" }}
                    src={Germany}
                    alt="country flag"
                  />
                  <img
                    style={{ position: "absolute", top: "-2px", right: "15%" ,zIndex:"0"}}
                    src={downarrow}
                    alt="arrow"
                  />
                </SelectBox>
              </Flex>
            </FlexBetween>
          </Container>
        </Filters>
      </HeaderBox>
    );
  }
}
