import styled from "styled-components";


export const ForLaterBox = styled.div`
  background-color: ${(props) => props.theme.pallet.Box};
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  margin-top: 31px;
  padding: 20px;
`;

export const SectionName = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.2px;
  color: ${(props) => props.theme.pallet.Text};
  margin-bottom: 22px;
`;
