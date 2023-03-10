import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { themeContext } from "../../Context/themeContex";
import { darkTheme, lightTheme } from "../../Global/theme";
import { useAuthContext } from "../../Context/AuthContext";

// import  icons
import profile from "../../Pictures/person.png";
import heart from "../../Pictures/heart.png";
import cart from "../../Pictures/cart.png";
import chat from "../../Pictures/chat.png";

const AccountNavlist = styled.ul`
  display: flex;
  gap: 18px;
`;
const AccountNavLinkStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "7px",
  alignItems: "center",
};

const AccountNavP = styled.p`
  color: #8b96a5;

  font-size: 12px;
`;

const ChangeThemeButton = styled.button`
  outline: none;
  border: 1px solid #8b96a5;
  border-radius: 4px;
  padding: 5px;
  background-color: ${(props) => props.theme.pallet.page};
  color: ${(props) => props.theme.pallet.Text};
  cursor: pointer;
`;

export default function AccountNav() {
  const [theme, setTheme] = useContext(themeContext);

  const { logout } = useAuthContext();

  return (
    <AccountNavlist>
      <li>
        <NavLink style={AccountNavLinkStyle} to="/profile">
          <img width="21px" height="21px" src={profile} alt="profile icon" />
          <AccountNavP>Profile</AccountNavP>
        </NavLink>
      </li>
      <li>
        <NavLink style={AccountNavLinkStyle} to="/Message">
          <img width="21px" height="21px" src={chat} alt="chat icon" />
          <AccountNavP>Message</AccountNavP>
        </NavLink>
      </li>
      <li>
        <NavLink style={AccountNavLinkStyle} to="/Orders">
          <img width="21px" height="21px" src={heart} alt="heart icon" />
          <AccountNavP>Orders</AccountNavP>
        </NavLink>
      </li>
      <li>
        <NavLink style={AccountNavLinkStyle} to="/cart">
          <img width="21px" height="21px" src={cart} alt="cart icon" />
          <AccountNavP>My cart</AccountNavP>
        </NavLink>
      </li>
      <li>
        <ChangeThemeButton
          onClick={() => {
            setTheme((prevState) =>
              prevState.theme === "light" ? darkTheme : lightTheme
            );
            localStorage.setItem(
              "Theme",
              theme === darkTheme ? "light" : "dark"
            );
          }}
        >
          {theme.theme === "light" ? "Dark Theme" : "Light Theme"}
        </ChangeThemeButton>
        <ChangeThemeButton onClick={logout}>Log Out</ChangeThemeButton>
      </li>
    </AccountNavlist>
  );
}
