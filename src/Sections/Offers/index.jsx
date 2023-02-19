import React, {  useEffect, useState } from "react";
import Container from "../../Components/Container";
import CountCard from "../../Components/CountCard";
import OfferCard from "../../Components/OfferCard";
import { Flex } from "../../Global/style";

// import offers images
import O1 from "../../Pictures/O1.png";
import O2 from "../../Pictures/O2.png";
import O3 from "../../Pictures/O3.png";
import O4 from "../../Pictures/O4.png";
import O5 from "../../Pictures/O5.png";
import {
  OffersBox,
  OffersSectionBox,
  SectionDescriptionP,
  SectionDetails,
  SectionNameH3,
} from "./style";

export default function Offers() {
  const [Days, setDays] = useState();
  const [Hours, setHours] = useState();
  const [Minutes, setMinutes] = useState();
  const [Seconds, setSeconds] = useState();

  // let interval;

  // const startTimer = useCallback(() => {
  //   const CountDownDate = new Date("Feb 28,2023").getTime();

  //   interval = setInterval(() => {
  //     const now = new Date().getTime();

  //     const distance = CountDownDate - now;
  //     const days = Math.floor(distance / (24 * 60 * 60 * 1000));
  //     const hours = Math.floor(
  //       (distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  //     );
  //     const minutes = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
  //     const seconds = Math.floor((distance % (60 * 1000)) / 1000);

  //     if (distance < 0) {
  //       clearInterval(interval)
  //     } else {
  //       setDays(days);
  //       setHours(hours);
  //       setMinutes(minutes);
  //       setSeconds(seconds);
  //     }
  //   })
  // }, [Days, Hours, Minutes, Seconds]);

  useEffect(() => {
    // startTimer();
    setDays(24);
    setHours(12);
    setMinutes(10);
    setSeconds(5);
  }, [Days, Hours, Minutes, Seconds]);

  return (
    <Container>
      <OffersSectionBox>
        <Flex>
          <SectionDetails>
            <SectionNameH3>Deals and offers</SectionNameH3>
            <SectionDescriptionP>Hygiene equipments</SectionDescriptionP>
            <Flex gap="6">
              <CountCard name="Days" number={Days} />
              <CountCard name="Hour" number={Hours} />
              <CountCard name="Min" number={Minutes} />
              <CountCard name="Sec" number={Seconds} />
            </Flex>
          </SectionDetails>
          <OffersBox>
            <OfferCard img={O1} product="Smart watches" discount="25%" />
            <OfferCard img={O2} product="Laptops " discount="15%" />
            <OfferCard img={O3} product="GoPro cameras " discount="40%" />
            <OfferCard img={O4} product="Headphones" discount="25%" />
            <OfferCard img={O5} product="Canon camreras" discount="25%" />
          </OffersBox>
        </Flex>
      </OffersSectionBox>
    </Container>
  );
}
