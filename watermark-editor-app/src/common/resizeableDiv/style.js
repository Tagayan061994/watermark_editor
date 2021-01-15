import styled from "styled-components";
import { Rnd } from "react-rnd";

export const ResizableWrapper = styled(Rnd)`
  border: 1px solid blue;
  overflow: "hidden";
  object-fit: ${(props) => (props.resize ? props.resize : "none")};
`;

export const ResizeImg = styled.img`
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.opacity ? props.opacity : 0)};
`;

export const ResizeTextWrapper = styled.span`
  font-size: ${(props) => `${props.size}px` || "10px"};
  color: ${(props) => `${props.color}` || "black"};
  font-family: ${(props) => `${props.font}` || "Monnserat"};
  overflow: hidden;
`;
