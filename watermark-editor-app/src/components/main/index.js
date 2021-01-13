import React from "react";
import { MainWrapper } from "./style";
import { Content } from "../content/index";
import { TextSideBar } from "../sidbar/textSideBar";
import { ImageSideBar } from "../sidbar/imageSideBar";
import { DefaultSideBar } from "../sidbar/defaultSideBar";
import { SideBar } from "../sidbar/defaultSideBar/style";
export const Main = ({
  defaultSidebar,
  imgSidebar,
  textSidebar,
  switchToSidebar,
}) => {
  return (
    <MainWrapper>
      <>
        {defaultSidebar ? (
          <DefaultSideBar switchToSidebar={switchToSidebar} />
        ) : null}
        {imgSidebar ? <ImageSideBar /> : null}
        {textSidebar ? <TextSideBar /> : null}
      </>
      <Content />
    </MainWrapper>
  );
};
