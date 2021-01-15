import React from "react";
import * as Styled from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getMode } from "../../redux/selectors";


export const ToggleButton = React.memo(() => {
    const dispatch = useDispatch();
    const mode = useSelector(getMode);

    const handleMode = () => {
        dispatch({ type: "SET_MODE" });
    };


    return (
        <Styled.ToggleWrapper>
            <Styled.SingleLabel mode={String(mode)}>Single</Styled.SingleLabel>
            <Styled.ToggleSwitch>
                <input
                    id="chkTest"
                    name="chkTest"
                    type="checkbox"
                    onClick={handleMode}
                />
                <label htmlFor="chkTest">
                    <span className="toggle-track"></span>
                </label>
            </Styled.ToggleSwitch>
            <Styled.TailedLabel mode={String(mode)}>Tiled</Styled.TailedLabel>
        </Styled.ToggleWrapper>
    );
});
