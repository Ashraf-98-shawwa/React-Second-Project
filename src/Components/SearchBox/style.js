import styled from "styled-components";

export const SearchInput = styled.input`
  padding: 11px 5px 10px 10px;
  outline: none;
  border: none;
  height: 40px;
  width: 420px;
  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    color: #8b96a5;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  border: 2px solid #0d6efd;
  border-radius: 8px;
  overflow: hidden;
  width: 635px;
`;

export const SearchSubmit = styled.input`
  background: linear-gradient(180deg, #127fff 0%, #0067ff 100%);
  color: #fff;
  padding: 12px 24px 11px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
`;

export const SearchSelect = styled.select`
  height: 40px;

  padding: 11px 5px 10px 10px;
  border-radius: 0;
  border: none;
  border-left: 2px solid #0d6efd;
  color: #1c1c1c;
  font-size: 16px;
  cursor: pointer;
  width: 144px;
  &:focus {
    outline: none;
  }
`;
