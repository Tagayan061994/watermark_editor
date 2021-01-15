import React, { useState } from "react";
import * as Styled from "./style";
import { useSelector } from "react-redux";
import { ResizeableDiv } from "../../common/resizeableDiv";
import {
  getSize,
  getText,
  getColor,
  getFont,
  getMode,
  getPosition,
  getPadding,
} from "../../redux/selectors";

export const TextResizeWrapp = () => {
  const textSize = useSelector(getSize);
  const textFont = useSelector(getFont);
  const textMode = useSelector(getMode);
  const textInput = useSelector(getText);
  const textColor = useSelector(getColor);
  const textPadding = useSelector(getPadding);
  const textPosition = useSelector(getPosition);

  const [multipleDivWidth, setmultipleDivWidth] = useState(null);
  const [multipleDivHeight, setmultipleDivHeight] = useState(null);
  const [numberOfResizableDiv, setNumberOfResizableDiv] = useState(0);

  const renderSingleResizeDiv = () => {
    return (
      <ResizeableDiv
        size={textSize}
        font={textFont}
        children={textInput}
        color={textColor}
        position={textPosition}
        setmultipleDivWidth={setmultipleDivWidth}
        setmultipleDivHeight={setmultipleDivHeight}
        setNumberOfResizableDiv={setNumberOfResizableDiv}
      />
    );
  };

  const renderMultipleResizeDiv = (count) => {
    let duplicateElementsArr = [];
    for (let i = 0; i < count; i++) {
      let el = (
        <Styled.MultipleRenderedTextWrapper
          key={i}
          size={textSize}
          font={textFont}
          color={textColor}
          padding={textPadding}
          width={multipleDivWidth}
          height={multipleDivHeight}
        >
          {textInput}
        </Styled.MultipleRenderedTextWrapper>
      );
      duplicateElementsArr.push(el);
    }
    return duplicateElementsArr;
  };

  return (
    <>
      {textMode && textInput
        ? renderSingleResizeDiv()
        : !textMode && textInput
        ? renderMultipleResizeDiv(numberOfResizableDiv)
        : null}
    </>
  );
};
