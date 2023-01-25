import React from 'react'
import styled from 'styled-components';


// import socail icons
import facebook from "../../Pictures/facebook3.png";
import instagram from "../../Pictures/instagram3.png";
import linkedin from "../../Pictures/linkedin3.png";
import twitter from "../../Pictures/twitter3.png";
import youtube from "../../Pictures/youtube3.png";

const SocialListBox = styled.ul`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export default function SocialList() {
  return (
    <div>
      <SocialListBox>
        <li>
          <a href="https://www.facebook.com/">
            <img
              style={{ cursor: "pointer" }}
              src={facebook}
              alt="facebook icon"
            />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/">
            <img
              style={{ cursor: "pointer" }}
              src={twitter}
              alt="twitter icon"
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/">
            <img
              style={{ cursor: "pointer" }}
              src={linkedin}
              alt="linkedin icon"
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/">
            <img
              style={{ cursor: "pointer" }}
              src={instagram}
              alt="instagram icon"
            />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/">
            <img
              style={{ cursor: "pointer" }}
              src={youtube}
              alt="youtube icon"
            />
          </a>
        </li>
      </SocialListBox>
    </div>
  );
}
