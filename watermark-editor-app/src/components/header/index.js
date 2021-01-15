import React from "react";
import { HeaderWrapper } from "./style";

export const Header = React.memo(() => {
  return (
    <HeaderWrapper>
      <h2>Add Your Watermark</h2>
    </HeaderWrapper>
  );
});
