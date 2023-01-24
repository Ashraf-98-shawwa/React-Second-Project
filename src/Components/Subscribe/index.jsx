import React from "react";

// importing email icon 
import email from "../../Pictures/email.png";
import { SubscribeBox, SubscribeForm, SubscribeH4, SubscribeInput, Subscribep, SubscribeSubmit } from "./style";


export default function Subscribe() {
  return (
    <SubscribeBox>
      <SubscribeH4>Subscribe on our newsletter</SubscribeH4>
      <Subscribep>
        Get daily news on upcoming offers from many suppliers all over the world
      </Subscribep>
      <SubscribeForm>
        <SubscribeInput type="text" placeholder="Email" />
        <SubscribeSubmit type="submit" value="Subscribe" />
      <img style={{ position:"absolute",top:"10px",left:"9px" }} src={email} alt="email icon" />
      </SubscribeForm>
    </SubscribeBox>
  );
}
