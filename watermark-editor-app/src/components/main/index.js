import { useState } from "react";
import ImageSideBar from "../sidbar/imageSideBar";
import {
  MainWrapper,
  SideBar,
  Content,
  UploadButton,
  Icon,
  Separator,
  TextButton,
  EditorDesk,
} from "./style";

const Mian = () => {
  const [state, setstate] = useState(false);
  return (
    <MainWrapper>
      {!state ? (
        <SideBar>
          <UploadButton onClick={() => setstate(!state)}>
            <Icon src="../../assets/upload.svg" alt="" />
            UPLOAD YOUR LOGO
          </UploadButton>
          <Separator />
          <TextButton>Type text</TextButton>
        </SideBar>
      ) : (
        <ImageSideBar />
      )}
      <Content>
        <EditorDesk></EditorDesk>
      </Content>
    </MainWrapper>
  );
};

export default Mian;
