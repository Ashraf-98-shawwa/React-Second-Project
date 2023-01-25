import styled from "styled-components";
import { SearchSubmit } from "../../Components/SearchBox/style";

export const SubscribeBox = styled.section`
  padding: 39px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #eff2f4;
`;

export const SubscribeH4 = styled.h4`
  font-weight: 600;
  font-size: 20px;
  color: #1c1c1c;
`;
export const Subscribep = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #606060;
  margin-bottom: 21px;
`;

export const SubscribeForm = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
`;

export const SubscribeSubmit = styled(SearchSubmit)`
  border-radius: 6px;
  padding: 11px;
  font-size: 16px;
`;

export const SubscribeInput = styled.input`
  padding: 11px 36px;
  border: none;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  outline: none;
`;
