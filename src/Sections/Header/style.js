import styled from "styled-components";

export const HeaderBox = styled.div`
  background-color: ${(props) => props.theme.pallet.page};
  color: ${(props) => props.theme.pallet.Text};
`;

export const FlexBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => (props.padding ? "20px 0" : "")};
`;
export const Filters = styled.div`
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
`;

export const SelectBox = styled.div`
  position: relative;
`;

export const Select = styled.select`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: ${(props) => props.theme.pallet.Text};
  width: 124px;
  background-color: transparent;
  border: none;
  outline: none;
  appearance: none;
  cursor: pointer;
  position: relative;
  z-index: 1;
`;
