import React, { useRef, useEffect } from "react";
import * as Styled from "./style";
import Img from "../../assets/BeeTV.png";
import { getType } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";

export const ResizeableDiv = React.memo(
  ({
    size,
    font,
    children,
    color,
    position,
    imageOpacity,
    setmultipleDivWidth,
    setmultipleDivHeight,
    setNumberOfResizableDiv,
  }) => {
    const dispatch = useDispatch();
    const type = useSelector(getType);
    const childrenRef = useRef(null);

    const claculateMultipleRenderingOptions = () => {
      let parentHeight, parentWidth, childrenHeight, childrenWidth;
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
    }

    useEffect(() => {
      claculateMultipleRenderingOptions();
    }, [children]);

    console.log(children)

    return (
      <Styled.ResizableWrapper
        minWidth={5}
        minHeight={9}
        bounds="parent"
        ref={childrenRef}
        position={{ x: position.x, y: position.y }}
        onDragStop={(e, currentPos) => {
          dispatch({ type: "SET_POSITION", payload: currentPos });
        }}
        resize={type === "image" ? "cover" : "none"}
      >
        {type === "text" ? (
          <Styled.ResizeTextWrapper size={size} color={color} font={font}>
            {children}
          </Styled.ResizeTextWrapper>
        ) :
          type === "image" ?
            <Styled.ResizeImg src={Img} opacity={imageOpacity} alt="BeeTV" />
            :
            null
        }
      </Styled.ResizableWrapper>
    );
  }
);
