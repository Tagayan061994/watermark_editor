import styled from "styled-components";
import circlebg from "../../../assets/circleBack.png";

export const ImageSideBarWrapper = styled.div`
  width: 38.5%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #dee3f0;
  div + div {
    border-top: 1px solid;
    border-color: #dee3f0;
  }
`;

export const CircleSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 12% 6.5% 12% 6.5%;
`;

export const CircleImageWrapper = styled.div`
  max-width: 91px;
  width: 100%;
  padding: 3% 9%;
  border-radius: 50%;
  overflow: hidden;
  background-image: url(${circlebg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const SliderSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4% 8% 7% 8%;
`;

export const ModeSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5% 7% 9% 7%;
`;

export const Label = styled.span`
  text-align: center;
  letter-spacing: 0px;
  color: #7683a8;
  margin-bottom: 5%;
`;

export const PositionSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 6%;
  padding-bottom: 5%;
`;

export const PosBtnWrapper = styled.div`
  max-width: 254px;
  width: 100%;
  background-color: transparent;
  padding: 5%;
  display: flex;
  justify-content: space-between;
`;
