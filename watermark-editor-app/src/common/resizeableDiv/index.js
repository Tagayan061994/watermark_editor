import React, { useRef, useEffect } from "react";
import * as Styled from "./style";
import { useDispatch } from "react-redux";

export const ResizeableDiv = React.memo(
  ({ child, size, color, font, position, parentRef }) => {
    const dispatch = useDispatch();
    const childrenRef = useRef(null);
    let parentHeight, parentWidth, childrenHeight, childrenWidth;

    useEffect(() => {
      if (parentRef.current) {
        parentHeight = parentRef.current.offsetHeight;
        parentWidth = parentRef.current.offsetWidth;
      }
      if (childrenRef.current) {
        childrenHeight = childrenRef.current.offsetHeight;
        childrenWidth = childrenRef.current.offsetWidth;
      }
    }, [parentRef, childrenRef]);

    return (
      <Styled.ResizableWrapper
        default={{
          x: 0,
          y: 0,
          width: "auto",
          height: "auto",
        }}
        position={{ x: position.x, y: position.y }}
        onDragStop={(e, currentPos) => {
          dispatch({ type: "SET_TEXT_POSITION", payload: currentPos });
        }}
        minWidth={5}
        minHeight={9}
        bounds="parent"
      >
        {typeof child === "string" && (
          <Styled.ResizeDiv
            size={size}
            color={color}
            font={font}
            ref={childrenRef}
          >
            {child}
          </Styled.ResizeDiv>
        )}
      </Styled.ResizableWrapper>
    );
  }
);
