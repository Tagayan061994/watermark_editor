import React, { useState } from "react";
import * as Styled from "./style";
import { Rnd } from "react-rnd";

export const ResizeableDiv = React.memo(
  ({ textInput, textSize, textColor, textFont }) => {
    return (
      <div>
        <Rnd
          default={{
            x: 150,
            y: 205,
            width: "auto",
            height: 32,
          }}
          minWidth={5}
          minHeight={9}
          bounds="window"
          style={{
            border: "1px solid blue",
          }}
        >
          {textInput && (
            <Styled.ResizeText
              textSize={textSize}
              textColor={textColor}
              textFont={textFont}
            >
              {textInput}
            </Styled.ResizeText>
          )}
        </Rnd>
      </div>
    );
  }
);
