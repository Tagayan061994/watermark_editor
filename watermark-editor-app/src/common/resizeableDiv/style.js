import styled from "styled-components";
import { Rnd } from "react-rnd";

export const ResizableWrapper = styled(Rnd)`
  border: 1px solid blue;
  overflow: "hidden";
  /* position: static !important; */
  > div {
    position: static !important;
    top: initial !important;
    left: initial !important;
    transform: none !important;
  }
`;
export const ResizeDiv = styled.span`
  font-size: ${(props) => `${props.size}px` || "10px"};
  color: ${(props) => `${props.color}` || "black"};
  font-family: ${(props) => `${props.font}` || "Monnserat"};
  overflow:hidden;
`;
