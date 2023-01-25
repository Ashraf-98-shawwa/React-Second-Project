import styled from "styled-components";


export const CategoryListBox = styled.section`
  margin-top: 20px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 11px;
  overflow: hidden;
  height: 257px;
`;

export const CategoryBox = styled.div`
  background-image: ${(props) =>
    `url(${props.img}), linear-gradient(#040304, #4d4444)`};
  background-position: center center;
  background-size: cover;
  min-width: 280px;
  height: 257px;
  padding: 20px;
`;
export const ProductsBox = styled.div`
display:flex;
flex-wrap: wrap;
`;

export const CategoryName = styled.h4`
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: -0.2px;
  color: #1c1c1c;
  width: 130px;
  margin-bottom: 18px;
`;
export const CategoryButton = styled.button`
  background: #ffffff;
  padding: 11px 15px 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #1c1c1c;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
`;