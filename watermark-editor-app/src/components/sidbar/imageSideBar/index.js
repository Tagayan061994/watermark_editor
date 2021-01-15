import { useState } from "react";
import * as Styled from "./style";
import avatarImg from "../../../assets/BeeTV.png";
import { getOpacity } from "../../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { RangeSlider } from "../../../common/rangeSlider";
import { PositionBtns } from "../../../common/positionBtns";
import { ToggleButton } from "../../../common/toggleButton";

export const ImageSideBar = () => {
  const dispatch = useDispatch();
  const imageOpacity = useSelector(getOpacity);
  const [switchSingleToTiled, setSingleToTiled] = useState(true);

  const handleImageChange = (event, action) => {
    dispatch({ type: action, payload: event.target.value });
  };

  return (
    <Styled.ImageSideBarWrapper>
      <Styled.CircleSection>
        <Styled.CircleImageWrapper>
          <img src={avatarImg} alt="" />
        </Styled.CircleImageWrapper>
      </Styled.CircleSection>
      <Styled.SliderSection>
        <RangeSlider
          labelName="Opacity"
          min="0"
          max="1"
          step="0.1"
          actionName="SET_OPACITY"
          defaultValue={imageOpacity}
          handleChange={handleImageChange}
        />
      </Styled.SliderSection>
      <Styled.ModeSection>
        <Styled.Label>Tiled mode</Styled.Label>
        <ToggleButton
          setSingleToTiled={setSingleToTiled}
          switchSingleToTiled={switchSingleToTiled}
        />
      </Styled.ModeSection>
      <Styled.PositionSection>
        {switchSingleToTiled ? (
          <PositionBtns />
        ) : (
            <Styled.SliderSection>
              <RangeSlider
                labelName="Padding"
                min="0"
                max="10"
                step="0.1"
                labelName="Padding"
                actionName={"SET_OPACITY"}
                // defaultValue={textPadding}
                handleChange={handleImageChange}
              />
            </Styled.SliderSection>
          )}
      </Styled.PositionSection>
    </Styled.ImageSideBarWrapper>
  );
};
