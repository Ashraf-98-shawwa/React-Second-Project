import styled from "styled-components";

export const SelectedProductCardBox = styled.div`
  margin-top: 20px;
  padding: 21px 20px 24px 20px;
  background-color: #fff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  position: relative;
  width: ${(props) => (props.width ? "282px" : "")};
  height: ${(props) => (props.height ? "405px" : "")};
`;

export const ProductDetails = styled.div`
  margin-top: ${(props) => (props.MT ? "33px" : "")}; ;
`;

export const ProductName = styled.h5`
  font-weight: ${(props) => (props.FW ? "400" : "500")};
  font-size: 16px;
  letter-spacing: -0.2px;
  line-height: 22px;
  color: ${(props) => (props.color ? " #606060" : "#1c1c1c")};
  margin-bottom: 16px;
  margin-top: ${(props) => (props.MT ? "13px" : "")};
  width: ${(props)=> props.width? "200px":""};
  
`;

export const ProductPrice = styled.span`
  width: fit-content;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.2px;
  color: #1c1c1c;
  margin-right: 7px;
`;

export const PreviousPrice = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-decoration-line: line-through;
  color: #8b96a5;
`;

export const RateOrderShiping = styled.div`
  display: flex;
  gap: 9px;
  margin-top: 5px;
  align-items: center;
`;
export const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #e3e8ee;
`;
export const Rate = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ff9017;
  margin-left: 6px;
  margin-right: 3px;
`;

export const Orders = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #8b96a5;
`;

export const Shipping = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #00b517;
`;

export const ProductDescription = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #505050;
  margin: 12px 0 8px;
`;
export const Details = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #0d6efd;
`;

export const Heart = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #e3e8ee;
  box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
  border-radius: 6px;
  background: #ffffff;
  position: absolute;
  top: ${(props) => (props.bottom ? "" : "20px")};
  bottom: ${(props) => (props.bottom ? "110px" : "")};
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &.active {
    background-color: #e3e8ee;
  }
`;
