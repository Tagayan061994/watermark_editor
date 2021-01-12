import React from "react";
import { ImageSideBar } from "../sidbar/imageSideBar";
import { DefaultSideBar } from "../sidbar/defaultSideBar";
import { MainWrapper } from "./style";
import { TextSideBar } from "../sidbar/textSideBar";
import { Content } from "../content/index";
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
