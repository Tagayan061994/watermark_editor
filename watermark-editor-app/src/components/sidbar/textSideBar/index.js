import React from "react";
import * as Styled from "./style";
import { RangeSlider } from "../../../common/rangeSlider";
import { ToggleButton } from "../../../common/toggleButton";
import { PositionBtns } from "../../../common/positionBtns";
import { useDispatch, useSelector } from "react-redux";
import { getText, getMode, getFont } from "../../../redux/selectors";

export const TextSideBar = () => {
  const dispatch = useDispatch();
  const textInputValue = useSelector(getText);
  const textMode = useSelector(getMode);
  const textFont = useSelector(getFont);

  const handleTextChange = (event, action) => {
    dispatch({ type: action, payload: event.target.value });
  };

  return (
    <Styled.TextSidebarWrapper>
      <Styled.InputSection>
        <Styled.TextInput
          value={textInputValue}
          textFont={textFont}
          onChange={(e) => handleTextChange(e, "SET_TEXT_VALUE")}
        />
        <Styled.InputSubText>6/42 characters advised</Styled.InputSubText>
      </Styled.InputSection>
      <Styled.ColorSliderSection>
        <Styled.ColorLabel>Size</Styled.ColorLabel>
        <RangeSlider
          sliderSize={50}
          handleTextChange={handleTextChange}
          min="2"
          max="50"
          step="1"
        />
        <Styled.ColorPicker
          type="color"
          defaultValue="#FF77E0"
          onChange={(e) => handleTextChange(e, "SET_TEXT_COLOR")}
        />
      </Styled.ColorSliderSection>
      <Styled.FontSection>
        <Styled.FontLabel>Font</Styled.FontLabel>
        <Styled.FontSelect
          onChange={(e) => handleTextChange(e, "SET_TEXT_FONT")}
          textFont={textFont}
        >
          <option className="Hachi-Maru-Pop" value="East Sea Dokdo">
            Hachi Maru Pop
          </option>
          <option className="Potta-One" value="Potta One">
            Potta One
          </option>
          <option className="East-Sea-Dokdo" value="East Sea Dokdo">
            East Sea Dokdo
          </option>
          <option className="Montserrat" value="Montserrat">
            Montserrat
          </option>
        </Styled.FontSelect>
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
              <RangeSlider labelName="Padding" />
            </div>
          )}
      </Styled.PositionModeSection>
    </Styled.TextSidebarWrapper>
  );
};
