import styled from "styled-components";

export const ResizableWrapper = styled.div`
  background: white;
  width: 100px;
  height: 100px;
  position: absolute;
  top: 100px;
  left: 100px;
`;
export const Resizers = styled.div`
  width: 100%;
  height: 100%;
  border: 3px solid #4286f4;
`;
export const Resizer = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: white;
  border: 3px solid #4286f4;
  position: absolute;
  &.top-left {
    left: -5px;
    top: -5px;
    cursor: nwse-resize;
  }
  &.top-right {
    right: -5px;
    top: -5px;
    cursor: nesw-resize;
  }
  &.bottom-left {
    left: -5px;
    bottom: -5px;
    cursor: nesw-resize;
  }
  &.bottom-right {
    right: -5px;
    bottom: -5px;
    cursor: nwse-resize;
  }
`;

export const ResizeText = styled.span`
  font-size: ${props => `${props.textSize}px` || "10px"};
  color: ${props => `${props.textColor}` || "black"};
  font-family:${props => `${props.textFont}` || "Monnserat"}
`;