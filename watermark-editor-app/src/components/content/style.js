import styled from "styled-components";
import backImg from "../../assets/imageMian.png";

export const ContentWrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
  padding: 3%;
`;

export const EditorDesk = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 10px;
  padding-right: 5%;
  overflow: hidden;
  background-image: url(${backImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: ${(props) => (props.flex ? "flex" : "block")};
  justify-content: ${(props) => (props.flex ? "space-around" : null)};
  flex-wrap: ${(props) => (props.flex ? "wrap" : "nowrap")};
`;

export const MultipleRenderedTextWrapper = styled.div`
  color: ${(props) => `${props.color}` || "black"};
  margin: ${(props) => `0 ${props.padding}%` || "0"};
  width: ${(props) => `${props.width}px` || "10px"};
  height: ${(props) => `${props.height}px` || "10px"};
  font-size: ${(props) => `${props.size}px` || "10px"};
  font-family: ${(props) => `${props.font}` || "Monnserat"};
`;

export const MultipleRenderedImgWrapper = styled.div`
  width: ${(props) => `${props.width}px` || "50px"};
  height: ${(props) => `${props.height}px` || "50px"};
  margin: ${(props) => `0 ${props.padding}%` || "0 10"};
  object-fit: cover;
`;

export const MultipleRenderedImg = styled.img`
  height: 100%;
  width: 100%;
  opacity: ${(props) => (props.imageOpacity ? props.imageOpacity : 1)};
`;
