import React from "react";
import * as Styled from "./style";

const selectData = [
    {
        className: "Hachi-Maru-Pop",
        name: "Hachi Maru Pop"
    },
    {
        className: "Potta-One",
        name: "Potta One"
    },
    {
        className: "East-Sea-Dokdo",
        name: "East Sea Dokdo"
    },
    {
        className: "Montserrat",
        name: "Montserrat"
    }
];

export const SelectColor = ({
    textFont,
    handleTextChange,
    actionName
}) => {
    return (
        <Styled.FontSelect
            onChange={(e) => handleTextChange(e, actionName)}
            textFont={textFont}
        >
            {selectData.map(data => (
                <option
                    className={data.className}
                    value={data.name}>
                    {data.name}
                </option>
            ))}
        </Styled.FontSelect>
    );
};

