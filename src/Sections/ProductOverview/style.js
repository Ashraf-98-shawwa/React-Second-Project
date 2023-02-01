import styled from "styled-components";

export const ProductOverviewBox = styled.div`
  width: 880px;
  background-color: ${(props) => props.theme.pallet.Box};
  border: 1px solid #e3e8ee;
  box-shadow: 0px 1px 3px rgba(56, 56, 56, 0.1);
  border-radius: 6px;
`;

export const OverviewNav = styled.ul`
  padding-left: 10px;
  display: flex;
  border-bottom: 1px solid #e3e8ee;
`;

export const OverviewNavTab = styled.li`
  padding: 16px 20px 13px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #8b96a5;
  position: relative;
  cursor: pointer;
  &.active {
    color: #0d6efd;
  }

  &.active::after {
    content: "";
    width: 100%;
    height: 2px;
    background-color: #0d6efd;
    position: absolute;
    bottom: -2%;
    left: 0;
  }
`;

export const DownBox = styled.div`
  padding: 18px 20px 29px;
`;

export const DescriptionP = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: ${(props) => props.theme.pallet.fifty};
  width: 798px;
  margin-bottom: 24px;
`;

export const ProductTable = styled.div`
  display: flex;
  margin-bottom: 26px;
`;

export const LeftList = styled.ul``;
export const RightList = styled.ul``;
export const Features = styled.div``;

export const LeftListItem = styled.li`
  background-color: ${(props) => props.theme.pallet.listbg};
  padding: 10px 147px 7px 10px;
  border: 1px solid #e3e8ee;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.pallet.fifty};
`;
export const ProductFeature = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: ${(props) => props.theme.pallet.fifty};
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
`;

export const RightListItem = styled.li`
  padding: 6px 140px 6px 10px;
  border: 1px solid #e3e8ee;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: ${(props) => props.theme.pallet.fifty};
`;
