import React, { useRef, useEffect } from "react";
import * as Styled from "./style";
import { useDispatch } from "react-redux";

export const ResizeableDiv = React.memo(
  ({
    size,
    font,
    child,
    color,
    position,
    setmultipleDivWidth,
    setmultipleDivHeight,
    setNumberOfResizableDiv,
  }) => {
    const dispatch = useDispatch();
    const childrenRef = useRef(null);
    let parentHeight, parentWidth, childrenHeight, childrenWidth;

    useEffect(() => {
      if (childrenRef.current) {
        parentHeight =
          childrenRef.current.resizableElement.current.offsetParent
            .offsetHeight;
        parentWidth =
          childrenRef.current.resizableElement.current.offsetParent.offsetWidth;
      }
      if (childrenRef.current) {
        childrenHeight =
          childrenRef.current.resizableElement.current.offsetHeight;
        childrenWidth =
          childrenRef.current.resizableElement.current.offsetWidth;
      }

      setNumberOfResizableDiv(
        Math.floor(
          (parentWidth / childrenWidth) * (parentHeight / childrenHeight)
        ) / 2
      );
      setmultipleDivWidth(childrenWidth);
      setmultipleDivHeight(childrenHeight);
    }, [child]);

    return (
      <Styled.ResizableWrapper
        default={{
          x: 0,
          y: 0,
          width: "auto",
          height: "auto",
        }}
        minWidth={5}
        minHeight={9}
        bounds="parent"
        ref={childrenRef}
        position={{ x: position.x, y: position.y }}
        onDragStop={(e, currentPos) => {
          dispatch({ type: "SET_TEXT_POSITION", payload: currentPos });
        }}
      >
        {typeof child === "string" && (
          <Styled.ResizeDiv size={size} color={color} font={font}>
            {child}
          </Styled.ResizeDiv>
        )}
      </Styled.ResizableWrapper>
    );
  }
);
