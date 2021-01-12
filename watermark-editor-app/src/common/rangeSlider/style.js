import styled from "styled-components";

export const SizeSlider = styled.input`
  width: ${props => props.sliderSize === 100 ? "100%" : `${props.sliderSize}%`};
  height:4px;
  background-color: #d2e0fc;
  border-radius: 4px;
  align-self: center;
`;

export const ColorLabel = styled.label`
  text-align: left;
  color: #7683a8;
  align-self: center;
  margin-bottom: 4%;
`;
