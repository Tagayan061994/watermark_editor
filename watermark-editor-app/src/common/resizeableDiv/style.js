import styled from "styled-components";
import { Rnd } from "react-rnd";

export const ResizableWrapper = styled(Rnd)`
  border: 1px solid blue;
  overflow: "hidden";
`;
export const ResizeDiv = styled.span`
  font-size: ${(props) => `${props.size}px` || "10px"};
  color: ${(props) => `${props.color}` || "black"};
  font-family: ${(props) => `${props.font}` || "Monnserat"};
  overflow:hidden;
`;
// export const Resizers = styled.div`
//   width: 100%;
//   height: 100%;
//   border: 3px solid #4286f4;
// `;
// export const Resizer = styled.div`
//   width: 10px;
//   height: 10px;
//   border-radius: 50%;
//   background: white;
//   border: 3px solid #4286f4;
//   position: absolute;
//   &.top-left {
//     left: -5px;
//     top: -5px;
//     cursor: nwse-resize;
//   }
//   &.top-right {
//     right: -5px;
//     top: -5px;
//     cursor: nesw-resize;
//   }
//   &.bottom-left {
//     left: -5px;
//     bottom: -5px;
//     cursor: nesw-resize;
//   }
//   &.bottom-right {
//     right: -5px;
//     bottom: -5px;
//     cursor: nwse-resize;
//   }
// `;
