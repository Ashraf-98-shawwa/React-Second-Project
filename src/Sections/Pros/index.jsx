import React from "react";
import styled from "styled-components";
import Container from "../../Components/Container";
import ProsCard from "../../Components/ProsCard";

// import Pros icons
import Lock from "../../Pictures/Lock.png";
import chat from "../../Pictures/chat.png";
import delivery from "../../Pictures/delivery.png";

const ProsBox = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 54px;
`;

export default function Pros() {
  return (
    <Container>
      <ProsBox>
        <ProsCard
          img={Lock}
          name="Secure payment"
          desc="Have you ever finally just "
        />
        <ProsCard
          img={chat}
          name="Customer support"
          desc="Have you ever finally just "
        />
        <ProsCard
          img={delivery}
          name="Free delivery"
          desc="Have you ever finally just "
        />
      </ProsBox>
    </Container>
  );
}
