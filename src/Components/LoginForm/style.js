import styled from "styled-components";

export const FormBox = styled.form`
  width: 387px;
  margin: 209px auto 336px;
  background-color: white;
  padding: 30px;
  box-shadow: 0px 3px 10px rgba(32, 32, 32, 0.1);
  border-radius: 6px;
`;

export const OR = styled.div`
  margin: 20px auto 18px;
  width: fit-content;
  font-size: 13px;
  font-weight: 400;
  color: #a9acb0;
  position: relative;

  &::after {
    content: "";
    width: 140px;
    background-color: #e0e0e0;
    height: 1px;
    position: absolute;
    top: 50%;
    left: 25px;
    margin-left: 7px;
  }

  &::before {
    content: "";
    width: 140px;
    background-color: #e0e0e0;
    height: 1px;
    position: absolute;
    top: 50%;
    right: 25px;
    margin-right: 7px;
  }
  user-select: none;
`;
export const Switcher = styled.div`
margin: 30px auto 0px;
width: fit-content;
font-weight: 500;
font-size: 16px;
letter-spacing: -0.1px;
color: #606060;
& .link {
  color:#0D6EFD
}
`;

export const ErrorsList = styled.ul`
  list-style: circle;
  padding: 10px;
`;


export const ErrorMessage = styled.li`
  margin-top: 5px;
  color: red;
`;