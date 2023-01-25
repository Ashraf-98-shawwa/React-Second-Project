import styled from "styled-components";

export const MainFooterBox = styled.section`
  background-color: #fff;
  padding: 40px 0px 5px;
`;
export const BrandBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const BrandBoxP = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #505050;
  width: 276px;
`;

export const FooterTitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #1c1c1c;
  margin-bottom: 10px;
`;

export const FooterList = styled.ul`
display: flex;
flex-direction:column;
gap: 3px;
`;

export const FooterListitem = styled.li`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #8b96a5;
`;

export const CopyRightBox = styled.div`
background-color: #EFF2F4;
border-top: 1px solid #E3E8EE;
padding: 23px 0px 21px;
`
export const CopyRightP = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 24px;
letter-spacing: -0.2px;
color: #606060;
`
export const CopyRightSelect = styled.select`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #606060;
  outline: none;
  border: none;
  background-color: transparent;
  appearance: none;
  width: 70px;
  cursor: pointer;
  z-index: 2;
`;