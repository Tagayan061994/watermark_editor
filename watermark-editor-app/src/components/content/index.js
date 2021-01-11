import React from "react";
import { ResizeableDiv } from "../../common/resizeableDiv";
import * as Styled from "./style";
import { useSelector } from "react-redux"
import {
    getSize,
    getText,
    getColor,
    getFont,
    getMode
} from "../../redux/selectors";

export const Content = () => {
    const textInput = useSelector(getText)
    const textSize = useSelector(getSize)
    const textColor = useSelector(getColor)
    const textFont = useSelector(getFont)
    const textMode = useSelector(getMode)

    return (
        <Styled.ContentWrapper>
            <Styled.EditorDesk>
                {textInput && <ResizeableDiv
                    textInput={textInput}
                    textSize={textSize}
                    textColor={textColor}
                    textFont={textFont}
                />}
            </Styled.EditorDesk>
        </Styled.ContentWrapper>
    );
};
