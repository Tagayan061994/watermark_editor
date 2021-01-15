import React from 'react';
import { useDispatch } from "react-redux";
import { FooterWrapper, CancelButton, FooterButton } from "./styled";

export const Footer = React.memo(() => {
    const dispatch = useDispatch();

    const goToFirstPage = () => {
        dispatch({ type: "SET_TYPE", payload: "" })
        dispatch({ type: "SET_INITIAL_STATE" })
    }

    return (
        <FooterWrapper>
            <CancelButton onClick={() => goToFirstPage()}>Cancel</CancelButton>
            <FooterButton>Done</FooterButton>
        </FooterWrapper>
    );
});