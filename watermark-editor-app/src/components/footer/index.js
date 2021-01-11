import React from 'react';
import { FooterWrapper, CancelButton, FooterButton } from "./styled";

export const Footer = React.memo(({ switchToSidebar }) => {
    return (
        <FooterWrapper>
            <CancelButton onClick={() => switchToSidebar("DefaultSideBar")}>Cancel</CancelButton>
            <FooterButton>Done</FooterButton>
        </FooterWrapper>
    );
});