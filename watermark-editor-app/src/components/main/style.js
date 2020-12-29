import styled from "styled-components";
import backImg from "../../assets/imageMian.png";

export const MainWrapper = styled.div`
  width:100%;
  background-color:#FFFFFF;
  display: flex;
  border-top: 1px solid #DEE3F0;
  border-bottom: 1px solid #DEE3F0;
  `;

export const SideBar = styled.div`
  width:30%;
  background-color: #FFFFFF;
  padding:14% 0;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  border-right: 1px solid #DEE3F0;
`;

export const UploadButton = styled.button`
  background-color: #5690FF;
  color: #fff;
  box-shadow: 0px 3px 9px #387DFF80;
  border-radius: 25px;
  overflow:hidden;
  padding:3% 11%;
  cursor: pointer;
`;

export const Icon = styled.img`
  width:14px;
  height:14px;
`;

export const Separator = styled.div`
  width: 53%;
  border-bottom: solid 1px;
  position: relative;
  margin: 32px 0px;
  color: rgba(193, 201, 224, 0.3);
  &:before {
    content: "or";
    position: absolute;
    left: 37%;
    top: -9px;
    background-color: #fff;
    color:#545F7E;
    padding: 0px 10px;
  }
`;

export const TextButton = styled.button`
  background-color: #fafafa;
  color: #4F8BFF;
  box-shadow: 0px 6px 12px #0052E01A;
  border-radius: 5px;
  overflow:hidden;
  padding:3% 8%;
  cursor: pointer;
`;

export const Content = styled.div`
  width:100%;
  background-color: #FFFFFF;
  padding: 3%;
`;

export const EditorDesk = styled.div`
  width: 100%;
  height:100%;
  border-radius: 10px;
  overflow:hidden;  
  background-image:url(${backImg});
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
`;