import React from "react";
import * as Styled from "./style";
import { useDispatch, useSelector } from "react-redux";

export const ToggleButton = React.memo(() => {
    const dispatch = useDispatch();

    const handleMode = () => {
        dispatch({ type: "SET_TEXT_MODE" });
    };

    return (
        <Styled.ToggleWrapper>
            <Styled.TogglLabel>Single</Styled.TogglLabel>
            <Styled.ToggleSwitch>
                <input
                    type="checkbox"
                    id="chkTest"
                    name="chkTest"
                    onClick={handleMode}
                />
                <label htmlFor="chkTest">
                    <span className="toggle-track"></span>
                </label>
            </Styled.ToggleSwitch>
            <Styled.TogglLabel>Tiled</Styled.TogglLabel>
        </Styled.ToggleWrapper>
    );
});
