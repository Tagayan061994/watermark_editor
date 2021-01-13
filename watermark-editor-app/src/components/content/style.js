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
  overflow: hidden;
  background-image: url(${backImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
