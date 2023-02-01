import styled from "styled-components";
import ElectronicsBanner from "../../Pictures/ElectronicsBanner.png";

export const HeroBox = styled.section`
  background-color: ${(props) => props.theme.pallet.Box};
  margin-top: 20px;
  padding: 17px 20px 17px 14px;
`;

export const CategoriesList = styled.ul``;

export const Banner = styled.div`
  width: 664px;
  height: 373px;
  padding: 56px 43px;
  background-image: url(${ElectronicsBanner});
  background-size: cover;
`;

export const BannerH2 = styled.h2`
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  color: #1c1c1c;
`;
export const BannerH1 = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: #1c1c1c;
  margin-bottom: 17px;
`;

export const CategoryLi = styled.li`
  padding: 11px 10px 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  width: 250px;
  color: ${(props) => props.theme.pallet.fifty};

  &:hover {
    background-color: #e5f6ff;
    background-color: ${(props) => props.theme.pallet.page};
  }
  &.active {
    border-radius: 6px;
    font-weight: 500;
    background-color: #e5f1ff;
    color: #1c1c1c;
  }
  cursor: pointer;
`;

export const RightSide = styled.div``;
export const Card = styled.div`
  background: ${(props) => props.color};
  border-radius: 6px;
  width: 200px;
  padding: ${(props) =>
    props.custom ? "16px 10px 22px 16px" : "16px 40px 22px 16px"};
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;

export const CardP = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #1c1c1c;
`;

export const CardButton = styled.button`
  width: 180px;
  border: none;
  outline: none;
  cursor: pointer;
  background: ${(props) => props.bgcolor};
  color: ${(props) => props.color};
  padding: 7px;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  border: ${(props) => `1px solid ${props.bordercolor}`};
  border-radius: 6px;
  margin-top: ${(props) => `${props.MT}px`};
   
`;
