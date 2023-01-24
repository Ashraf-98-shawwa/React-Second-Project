import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import FormHeading from "../FormHeading/FormHeading";
import Input from "../Input";
import { ErrorMessage, ErrorsList, FormBox, OR, Switcher } from "./style";
import * as yup from "yup";

export default function LoginForm() {
  const [passwordType, SetType] = useState("password");
  const [Username, SetUsername] = useState("");
  const [Password, Setpassword] = useState("");
  const [checkbox, Setcheckbox] = useState(false);
  const [Errors, SetErrors] = useState([]);

  const schema = yup.object().shape({
    Username: yup.string().email().required(),
    Password: yup.string().min(8).required(),
    checkbox: yup
      .boolean()
      .oneOf([true], "You should check the checkbox")
      .required(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    schema
      .validate(
        {
          checkbox,
          Password,
          Username,
        },
        { abortEarly: false }
      )
      .then(() => {
        console.log("valid");
        SetErrors([]);
      })
      .catch((e) => {
        SetErrors(e.errors);
      });
  };

  const handleChangeInput = (e) => {
    const { id, value } = e.target;
    id === "Username" ? SetUsername(value) : Setpassword(value);
  };

  const handleCheckbox = (e) => {
    Setcheckbox((prevstate) => !prevstate);
  };

  const changePasswordType = () => {
    SetType((prevstate) => (prevstate === "password" ? "text" : "password"));
  };

  return (
    <FormBox onSubmit={handleSubmit}>
      <FormHeading name="Sign in" />

      <ErrorsList>
        {Errors.map((error, index) => {
          return <ErrorMessage key={index}>{error}</ErrorMessage>;
        })}
      </ErrorsList>

      <Input
        id="Username"
        label="Username"
        placeholder="Email or phone"
        type="text"
        HandleInputFunction={handleChangeInput}
        value={Username}
      />
      <Input
        id="Password"
        label="Password"
        placeholder="Type here"
        type={passwordType}
        value={Password}
        IsPassword={true}
        ChangeTypeFunction={changePasswordType}
        HandleInputFunction={handleChangeInput}
      />
      <Input
        id="checkbox"
        label="Remember me"
        IsCheckBox={true}
        ChangeCheckboxState={handleCheckbox}
        checked={checkbox}
      />

      <Input IsSubmit={true} type="submit" value="Log In" />
      <OR>OR</OR>
      <Input IsGoogle={true} />
      <Input IsFacebook={true} />
      <Switcher>
        Don’t have an account?
        <NavLink to="/Sign-up" className="link">
          &nbsp;Register now
        </NavLink>
      </Switcher>
    </FormBox>
  );
}
