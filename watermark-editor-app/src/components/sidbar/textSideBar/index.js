import React from "react";
import * as Styled from "./style";
import { SelectColor } from "./selectColor";
import { useDispatch, useSelector } from "react-redux";
import { RangeSlider } from "../../../common/rangeSlider";
import { PositionBtns } from "../../../common/positionBtns";
import { ToggleButton } from "../../../common/toggleButton";
import {
  getText,
  getMode,
  getFont,
  getPadding,
} from "../../../redux/selectors";

export const TextSideBar = () => {
  const dispatch = useDispatch();
  const textMode = useSelector(getMode);
  const textFont = useSelector(getFont);
  const textPadding = useSelector(getPadding);
  const textInputValue = useSelector(getText);

  const handleTextChange = (event, action) => {
    dispatch({ type: action, payload: event.target.value });
  };

  return (
    <Styled.TextSidebarWrapper>
      <Styled.InputSection>
        <Styled.TextInput
          textFont={textFont}
          value={textInputValue}
          onChange={(e) => handleTextChange(e, "SET_TEXT_VALUE")}
        />
        <Styled.InputSubText>6/42 characters advised</Styled.InputSubText>
      </Styled.InputSection>
      <Styled.ColorSliderSection>
        <Styled.ColorLabel>Size</Styled.ColorLabel>
        <RangeSlider
          min="2"
          max="50"
          step="1"
          sliderSize={50}
          actionName="SET_TEXT_SIZE"
          handleChange={handleTextChange}
        />
        <Styled.ColorPicker
          type="color"
          defaultValue="#FF77E0"
          onChange={(e) => handleTextChange(e, "SET_TEXT_COLOR")}
        />
      </Styled.ColorSliderSection>
      <Styled.FontSection>
        <Styled.FontLabel>Font</Styled.FontLabel>
        <SelectColor
          textFont={textFont}
          actionName="SET_TEXT_FONT"
          handleTextChange={handleTextChange}
        />
      </Styled.FontSection>
      <Styled.TailedModeSection>
        <Styled.FontLabel>Tailed Mode</Styled.FontLabel>
        <ToggleButton textMode={textMode} />
      </Styled.TailedModeSection>
      <Styled.PositionModeSection>
        {textMode ? (
          <PositionBtns />
        ) : (
            <div className="padding">
              <RangeSlider
                min="0"
                max="10"
                step="0.1"
                labelName="Padding"
                defaultValue={textPadding}
                actionName="SET_TEXT_PADDING"
                handleTextChange={handleTextChange}
              />
            </div>
          )}
      </Styled.PositionModeSection>
    </Styled.TextSidebarWrapper>
  );
};
