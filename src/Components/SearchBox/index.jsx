import React from "react";
import { SearchForm, SearchInput, SearchSelect, SearchSubmit } from "./style";


export default function SearchBox() {
  return (
    <SearchForm>
      <SearchInput type="text" placeholder="Search" />
      <SearchSelect name="searchSelect" id="searchSelect">
        All category
        <option value="all"> All category</option>
        <option value="Electronics"> Electronics</option>
        <option value="Clothes"> Clothes</option>
      </SearchSelect>
      <SearchSubmit type="submit" value="Search" />
    </SearchForm>
  );
}
