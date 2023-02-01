
import styled from "styled-components";

export const LayoutFilterBox = styled.div`
  background-color: ${(props) => props.theme.pallet.page};
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 10px;
`;

export const H4 = styled.h4`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.pallet.Text};

  & span {
    font-weight: 700;
  }
`;

export const RightFilters = styled.div`
  display: flex;
  align-items: center;
`;

export const Select = styled.select`
  width: 158px;
  height: 40px;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #1c1c1c;
  outline: none;
  margin-right: 10px;
  padding: 11px 10px;
`;

export const DisplayFilter = styled.div`
  width: 38px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e3e8ee;
  background: #ffffff;
  &.active {
    background-color: #eff2f4;
  }
  cursor: pointer;
`;
