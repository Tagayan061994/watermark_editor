import React from "react";
import * as Styled from "./style";

export const DefaultSideBar = ({ switchToSidebar }) => {
  return (
    <Styled.SideBar>
      <Styled.UploadButton onClick={() => switchToSidebar("ImageSideBar")}>
        <Styled.Icon src="../../assets/upload.svg" alt="" />
        UPLOAD YOUR LOGO
      </Styled.UploadButton>
      <Styled.Separator />
      <Styled.TextButton onClick={() => switchToSidebar("TextSideBar")}>Type text</Styled.TextButton>
    </Styled.SideBar>
  );
};

