import React from "react";
import Container from "../../Components/Container";
import { Inputt } from "../../Components/Input/style";
import { Flex, SectionsTitle } from "../../Global/style";
import {
  RequestBox,
  RequestextArea,
  RequestFormBox,
  RequestH3,
  RequestInput,
  RequestLeft,
  RequestP,
  RequestSectionBox,
  RequestSelect,
} from "./style";

export default function Request() {
  return (
    <RequestSectionBox>
      <Container>
        <RequestBox>
          <Flex justify="space-between">
            <RequestLeft>
              <RequestH3>
                An easy way to send requests to all suppliers
              </RequestH3>
              <RequestP>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </RequestP>
            </RequestLeft>
            <RequestFormBox>
              <SectionsTitle style={{ fontSize: "20px" }}>
                Send quote to suppliers
              </SectionsTitle>
              <RequestInput
                width="100%"
                type="text"
                placeholder="What item you need?"
                margin={true}
              />
              <RequestextArea placeholder="Type more details"></RequestextArea>
              <Flex gap="8" align="center">
                <RequestInput width="47%" type="text" placeholder="Quantity?" />
                <RequestSelect id="request" name="request">
                  <option value="Pcs">Pcs</option>
                  <option value="Pcs">Pcs</option>
                  <option value="Pcs">Pcs</option>
                  <option value="Pcs">Pcs</option>
                </RequestSelect>
              </Flex>
              <RequestInput type="submit" value="Send inquiry" />
            </RequestFormBox>
          </Flex>
        </RequestBox>
      </Container>
    </RequestSectionBox>
  );
}
