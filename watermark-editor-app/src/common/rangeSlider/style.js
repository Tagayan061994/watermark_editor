import styled from "styled-components";

export const SizeSlider = styled.input`
  width: ${(props) =>
  props.sliderSize === 100 ? "100%" : `${props.sliderSize}%`};
  background-color: #d2e0fc;
  height: 3px;
  border-radius: 4px;
  align-self: center;
  outline: none;
`;

export const Label = styled.label`
  font-size: 12px;
  text-align: left;
  color: #7683a8;
  align-self: center;
  margin-bottom: 4%;
`;
