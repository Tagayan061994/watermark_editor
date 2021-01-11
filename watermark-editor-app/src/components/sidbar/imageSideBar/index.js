import { useState } from "react";
import avatarImg from "../../../assets/BeeTV.png";
import { PositionBtns } from "../../../common/positionBtns";
import { RangeSlider } from "../../../common/rangeSlider";
import { ToggleButton } from "../../../common/toggleButton";
import * as Styled from "./style";

export const ImageSideBar = () => {
  const [switchSingleToTiled, setSingleToTiled] = useState(true);
  return (
    <Styled.ImageSideBarWrapper>
      <Styled.CircleSection>
        <Styled.CircleImageWrapper>
          <img src={avatarImg} alt="" />
        </Styled.CircleImageWrapper>
      </Styled.CircleSection>
      <Styled.SliderSection>
        <RangeSlider labelName="Opacity" />
      </Styled.SliderSection>
      <Styled.ModeSection>
        <Styled.Label>Tiled mode</Styled.Label>
        <ToggleButton
          switchSingleToTiled={switchSingleToTiled}
          setSingleToTiled={setSingleToTiled}
        />
      </Styled.ModeSection>
      <Styled.PositionSection>
        {switchSingleToTiled ? (
          <PositionBtns />
        ) : (
            <Styled.SliderSection>
              <RangeSlider labelName="Padding" />
            </Styled.SliderSection>
          )}
      </Styled.PositionSection>
    </Styled.ImageSideBarWrapper >
  );
};
