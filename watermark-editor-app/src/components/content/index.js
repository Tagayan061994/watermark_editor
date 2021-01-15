import React from "react";
import * as Styled from "./style";
import { TextResizeWrapp } from "./text";
import { useSelector } from "react-redux";
import { ImageResizeWrapp } from "./image";
import { getMode, getType } from "../../redux/selectors";

export const Content = () => {
  const mode = useSelector(getMode);
  const type = useSelector(getType);

  return (
    <Styled.ContentWrapper>
      <Styled.EditorDesk flex={!mode ? true : false}>
        {type === "text" ? (
          <TextResizeWrapp />
        ) : type === "image" ? (
          <ImageResizeWrapp />
        ) : null}
      </Styled.EditorDesk>
    </Styled.ContentWrapper>
  );
};
