import React from "react";
import * as Styled from "./style";

const selectData = [
  {
    className: "Hachi-Maru-Pop",
    name: "Hachi Maru Pop",
  },
  {
    className: "Potta-One",
    name: "Potta One",
  },
  {
    className: "East-Sea-Dokdo",
    name: "East Sea Dokdo",
  },
  {
    className: "Montserrat",
    name: "Montserrat",
  },
];

export const SelectColor = ({ textFont, actionName, handleTextChange }) => {
  return (
    <Styled.FontSelect
      textFont={textFont}
      onChange={(e) => handleTextChange(e, actionName)}
    >
      {selectData.map((data, i) => (
        <option key={i} className={data.className} value={data.name}>
          {data.name}
        </option>
      ))}
    </Styled.FontSelect>
  );
};
