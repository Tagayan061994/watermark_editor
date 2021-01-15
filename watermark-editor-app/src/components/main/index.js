import React from "react";
import { MainWrapper } from "./style";
import { useSelector } from "react-redux";
import { Content } from "../content/index";
import { getType } from "../../redux/selectors";
import { TextSideBar } from "../sidbar/textSideBar";
import { ImageSideBar } from "../sidbar/imageSideBar";
import { DefaultSideBar } from "../sidbar/defaultSideBar";

export const Main = () => {
  const sideBarType = useSelector(getType);

  return (
    <MainWrapper>
      <>
        {sideBarType === "" ? <DefaultSideBar />
          : sideBarType === "image" ? <ImageSideBar /> :
            sideBarType === "text" ? <TextSideBar /> : null
        }
      </>
      <Content />
    </MainWrapper>
  );
};
