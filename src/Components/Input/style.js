import styled from "styled-components";

export const InputBox = styled.div`
  display: flex;
  margin-top: 20px;
  position: relative;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  gap: ${(props) => (props.row ? "10px" : "3px")};
  width: ${(props) => (props.half ? "50%" : "100%")};
`;

export const Label = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.2px;
  color: #1c1c1c;
  cursor: pointer;
`;

export const Inputt = styled.input`
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: ${(props) => (props.Padding ? "11px 10px 11px 130px" : "11px 10px")};
  font-weight: 400;
  outline: none;

  background-color: ${(props) =>
    props.type === "submit" ? "#0D6EFD" : "white"};
  color: ${(props) => (props.type === "submit" ? "#fff" : "")};
  cursor: ${(props) => (props.type === "submit" ? "pointer" : "")};

  &:focus {
    outline: ${(props) =>
      props.type === "submit" || props.Padding ? "" : "2px solid #7f858c"};
  }

  &::placeholder {
    color: #a9acb0;
  }
  width: ${(props) => props.width};
`;

export const GoogleButton = styled.button`
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 11px 10px;
  outline: none;
  background-color: #fff;
  font-weight: 500;
  font-size: 16px;
  color: #606060;
  display: flex;
  gap: 48px;
  align-items: center;
  cursor: pointer;
`;
export const FacebookButton = styled(GoogleButton)`
  background-color: #4267b2;
  color: #fff;
  gap: 38px;
`;
export const Select = styled.select`
  border: 1px solid #e0e0e0;
  padding: 10px 10px 11px;
  width: 120px;
  position: absolute;
  top: 22px;
  outline: none;
  color: #1c1c1c;
`;


