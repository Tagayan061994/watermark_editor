import React from "react";
import * as Styled from "./style";

export const RangeSlider = React.memo(
  ({
    labelName = false,
    sliderSize = 95,
    handleChange,
    actionName,
    min = "0",
    max = "10",
    step = "0.1",
    defaultValue = 16,
  }) => {
    return (
      <>
        {labelName ? <Styled.Label>{labelName}</Styled.Label> : null}
        <Styled.SizeSlider
          sliderSize={sliderSize}
          type="range"
          min={min}
          max={max}
          step={step}
          defaultValue={defaultValue}
          onChange={(e) => handleChange(e, actionName)}
        />
      </>
    );
  }
);
