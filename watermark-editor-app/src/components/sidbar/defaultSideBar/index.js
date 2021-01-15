import React from "react";
import * as Styled from "./style";
import { useDispatch } from "react-redux";

export const DefaultSideBar = React.memo(() => {
  const dispatch = useDispatch();
  return (
    <Styled.SideBar>
      <Styled.UploadButton
        onClick={() => dispatch({ type: "SET_TYPE", payload: "image" })}
      >
        <Styled.Icon src="../../assets/upload.svg" alt="" />
        UPLOAD YOUR LOGO
      </Styled.UploadButton>
      <Styled.Separator />
      <Styled.TextButton
        onClick={() => dispatch({ type: "SET_TYPE", payload: "text" })}
      >
        Type text
      </Styled.TextButton>
    </Styled.SideBar>
  );
});
