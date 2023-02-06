import { useState } from "react";
import { NavLink } from "react-router-dom";
import FormHeading from "../FormHeading/FormHeading";
import Input from "../Input";
import {
  ErrorMessage,
  ErrorsList,
  FormBox,
  Switcher,
} from "../LoginForm/style";
import { Dflex, HR } from "./style";
import * as yup from "yup";
import { useAuthContext } from "../../Context/AuthContext";
import axios from "axios";

export default function SignUpForm() {

   const {
     isAuthorized,
     isLoading,
     setIsLoading,
     setisAuthorized,
     setErrors,
     Errors,
     setToken,
     setusername,
  } = useAuthContext();
  

  const [Name, SetName] = useState("");
  const [Surname, SetSurname] = useState("");
  const [Email, Setemail] = useState("");
  const [Phone, SetPhone] = useState("");
  const [Password, SetPassword] = useState("");
  const [Repeatpassword, SetRepeatpassword] = useState("");
  const [checkbox, Setcheckbox] = useState(false);

  const schema = yup.object().shape({
    Name: yup.string().required(),
    Surname: yup.string().required(),
    Email: yup.string().email().required(),
    Phone: yup.string().required(),
    Password: yup.string().min(8).required(),
    Repeatpassword: yup
      .string()
      .min(8)
      .required()
      .oneOf([yup.ref("Password"), null], "Password Must match"),
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
          Name,
          Surname,
          Email,
          Phone,
          Password,
          Repeatpassword,
          checkbox,
        },
        { abortEarly: false }
      )
      .then(async () => {
          const res = await axios.post(
            `https://react-tt-api.onrender.com/api/users/signup`,
            {
              name: Name,
              email: Email,
              password: Password,
            }
          );
        if (res) {
          setToken(res.data.token);
          localStorage.setItem("token", res.data.token);
          setusername(res.data.name);
          localStorage.setItem("name", res.data.name);
          setErrors([]);
          setIsLoading(false);
          setisAuthorized(true);
        }
      })
      .catch((e) => {
        setErrors(e.errors  || [e.message]);
        setIsLoading(false);
      });
  };

  
  const handleChangeInput = (e, Tel) => {
    const { id, value } = e.target;
    if (id === "Name") {
      SetName(value);
    }
    if (id === "Surname") {
      SetSurname(value);
    }
    if (id === "Email") {
      Setemail(value);
    }
    if (id === "Phone") {
      SetPhone(Tel + value);
    }
    if (id === "Password") {
      SetPassword(value);
    }
    if (id === "Repeatpassword") {
      SetRepeatpassword(value);
    }
  };

  const handleCheckbox = (e) => {
    Setcheckbox((prevstate) => !prevstate);
  };
  return (
    <FormBox onSubmit={handleSubmit}>
      <FormHeading name="Register" />

      <ErrorsList>
        {Errors.map((error, index) => {
          return <ErrorMessage key={index}>{error}</ErrorMessage>;
        })}
      </ErrorsList>

      <Dflex>
        <Input
          halfWidth={true}
          id="Name"
          label="Name"
          placeholder="Type here"
          type="text"
          HandleInputFunction={handleChangeInput}
          value={Name}
        />
        <Input
          halfWidth={true}
          id="Surname"
          label="Surname"
          placeholder="Type here"
          type="text"
          HandleInputFunction={handleChangeInput}
          value={Surname}
        />
      </Dflex>
      <Input
        id="Email"
        label="Your e-mail "
        placeholder="example@mail.com"
        type="text"
        HandleInputFunction={handleChangeInput}
        value={Email}
      />
      <Input
        id="Phone"
        label="Phone"
        placeholder="00-000-00-00"
        type="text"
        Select={true}
        value={Phone}
        HandleInputFunction={handleChangeInput}
      />
      <Input
        id="Password"
        label="Password"
        placeholder="At least 6 characters."
        type="password"
        value={Password}
        HandleInputFunction={handleChangeInput}
      />
      <Input
        id="Repeatpassword"
        label="Repeat password"
        placeholder="Type here"
        type="password"
        value={Repeatpassword}
        HandleInputFunction={handleChangeInput}
      />
      <Input IsSubmit={true} type="submit" value="Register now" />
      <Input
        id="checkbox"
        label="I agree with "
        IsCheckBox={true}
        terms={true}
        ChangeCheckboxState={handleCheckbox}
        checked={checkbox}
      />
      <HR></HR>
      <Switcher>
        Already have an accaunt?
        <NavLink to="/login" className="link">
          &nbsp;Login
        </NavLink>
      </Switcher>
    </FormBox>
  );
}
