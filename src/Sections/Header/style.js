import styled from "styled-components";

export const HeaderBox = styled.div`
  background-color: ${(props) => props.theme.pallet.page};
  color: ${(props) => props.theme.pallet.Text};
`;

export const FlexBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => (props.padding?"20px 0" : "")};

`;
export const Filters = styled.div`
border-top: 1px solid #E0E0E0;
border-bottom: 1px solid #E0E0E0;
`;
