import React from "react";
import styled from "styled-components";

import downarrow from "../../Pictures/downarrow.png";
import rightarrow from "../../Pictures/rightarrow.png";

const PaginationBox = styled.div`
  width: fit-content;
  margin: 30px 0 30px auto;
  position: relative;
  display: flex;
`;

const Select = styled.select`
  width: 125px;
  height: 40px;
  cursor: pointer;
  padding-left: 11px;
  outline: none;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  appearance: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #1c1c1c;
  margin-right: 9px;
`;

const PaginateNumbers = styled.div`
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  display: flex;
`;

const PaginateBox = styled.div`
  width: 44px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #1c1c1c;
  background-color: #fff;
  border: 1px solid #e3e8ee;
  cursor: pointer;

  &.active {
    color: #8b96a5;
    background-color: #eff2f4;
  }
`;

export default function Pagination() {
  return (
    <PaginationBox>
      <Select>
        <option value="Show 10">Show 10</option>
        <option value="Show 10">Show 9</option>
        <option value="Show 10">Show 8</option>
      </Select>
      <img
        style={{ position: "absolute", top: "8px", left: "26%" }}
        src={downarrow}
        alt="down arrow"
      />
      <PaginateNumbers>
        <PaginateBox>
          <img
            style={{ transform: "rotate(180deg)" }}
            src={rightarrow}
            alt="right arrow icon"
          />
        </PaginateBox>{" "}
        <PaginateBox className="active">1</PaginateBox>
        <PaginateBox>2</PaginateBox>
        <PaginateBox>3</PaginateBox>
        <PaginateBox>
          <img src={rightarrow} alt="right arrow icon" />
        </PaginateBox>
      </PaginateNumbers>
    </PaginationBox>
  );
}
