import React, { useRef } from "react";
import * as Styled from "./style";
import { useSelector } from "react-redux";
import { ResizeableDiv } from "../../common/resizeableDiv";
import {
    getSize,
    getText,
    getColor,
    getFont,
    getMode,
    getPosition,
} from "../../redux/selectors";

export const Content = () => {
    const textInput = useSelector(getText);
    const textSize = useSelector(getSize);
    const textColor = useSelector(getColor);
    const textFont = useSelector(getFont);
    const textMode = useSelector(getMode);
    const textPosition = useSelector(getPosition);
    const parentRef = useRef(null);
    return (
        <Styled.ContentWrapper>
            <Styled.EditorDesk ref={parentRef}>
                {textInput && (
                    <ResizeableDiv
                        child={textInput}
                        size={textSize}
                        color={textColor}
                        font={textFont}
                        position={textPosition}
                        parentRef={parentRef}
                    />
                )}
            </Styled.EditorDesk>
        </Styled.ContentWrapper>
    );
};
