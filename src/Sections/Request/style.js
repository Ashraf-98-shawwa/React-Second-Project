import styled from "styled-components";
import { Inputt } from "../../Components/Input/style";
import bg from "../../Pictures/Request-bg.png";

export const RequestSectionBox = styled.section`
  margin-top: 20px;
`;
export const RequestBox = styled.div`
  padding: 41px 31px 59px 49px;
  background-image: url(${bg}),
    linear-gradient(94.99deg, #2c7cf1 7.19%, #00d1ff80 89.49%);
  background-blend-mode: multiply;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
`;

export const RequestLeft = styled.div`
padding-top: 10px;
  width: 390px;
`;
export const RequestH3 = styled.h3`
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: -0.2px;
  color: #ffffff;
  margin-bottom: 13px;
`;

export const RequestP = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #ffffff;
`;

export const RequestFormBox = styled.form`
  background-color: ${(props) => props.theme.pallet.Footer  };
  padding: 22px 31px 25px 20px;
  width: 491px;
  box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.25);
  border-radius: 6px;
`;

export const RequestInput = styled(Inputt)`
  margin-bottom: ${(props) => (props.margin ? "20px" : "")};
  margin-top: ${(props) => (props.type === "submit" ? "20px" : "")};
  width: ${(props) => (props.type === "submit" ? " 129px" : "")};
`;

export const RequestextArea = styled.textarea`
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 11px 10px;
  font-weight: 400;
  outline: none;

  &:focus {
    outline: 2px solid #7f858c;
  }

  &::placeholder {
    color: #a9acb0;
  }
  width:100%;
  margin-bottom: 20px;
  min-height: 73px;
`;

export const RequestSelect = styled.select`
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 11px 10px;
  font-weight: 400;
  outline: none;
  width: 111px;
  
`;
