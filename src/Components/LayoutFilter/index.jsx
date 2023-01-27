import React from "react";
import CheckboxInput from "../CheckboxInput";
import { DisplayFilter, H4, LayoutFilterBox, RightFilters, Select } from "./style";
import squared from "../../Pictures/square.png";
import Lined from "../../Pictures/Lined.png";

export default function LayoutFilter(props) {
  return (
    <LayoutFilterBox>
      <H4>
        12,911 items in <span>Mobile accessory </span>
      </H4>
      <RightFilters>
        <CheckboxInput label="Verified only" id="VerifiedOnly" />
        <Select id="Filter" name="Filter">
          <option value="Featured">Featured</option>
        </Select>
        <DisplayFilter
          onClick={props.HandleSquaredLayout}
          className={props.squared ? "active" : ""}
        >
          <img src={squared} alt="squared siplay" />
        </DisplayFilter>
        <DisplayFilter
          onClick={props.HandleLinedLayout}
          className={props.lined ? "active" : ""}
        >
          <img src={Lined} alt="Lined siplay" />
        </DisplayFilter>
      </RightFilters>
    </LayoutFilterBox>
  );
}
