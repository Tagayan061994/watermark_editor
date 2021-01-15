import React, { useState } from "react";
import * as Styled from "./style";
import { useSelector } from "react-redux";
import multipleImg from "../../assets/BeeTV.png";
import { ResizeableDiv } from "../../common/resizeableDiv";
import {
    getMode,
    getOpacity,
    getPadding,
    getPosition
} from "../../redux/selectors";

export const ImageResizeWrapp = () => {
    const imageMode = useSelector(getMode);
    const textPadding = useSelector(getPadding);
    const imageOpacity = useSelector(getOpacity);
    const imagePosition = useSelector(getPosition);

    const [multipleDivWidth, setmultipleDivWidth] = useState(null);
    const [multipleDivHeight, setmultipleDivHeight] = useState(null);
    const [numberOfResizableDiv, setNumberOfResizableDiv] = useState(0);

    const renderSingleResizeDiv = () => {
        return (
            <ResizeableDiv
                child="image"
                position={imagePosition}
                imageOpacity={imageOpacity}
                setmultipleDivWidth={setmultipleDivWidth}
                setmultipleDivHeight={setmultipleDivHeight}
                setNumberOfResizableDiv={setNumberOfResizableDiv}
            />
        );
    };
    console.log(textPadding)
    const renderMultipleResizeDiv = (count) => {
        let duplicateElementsArr = [];
        for (let i = 0; i < count; i++) {
            let el = (
                <Styled.MultipleRenderedImgWrapper
                    key={i}
                    padding={textPadding}
                    width={multipleDivWidth}
                    height={multipleDivHeight}
                >
                    <Styled.MultipleRenderedImg
                        src={multipleImg}
                        imageOpacity={imageOpacity}
                        alt="BeeTv"
                    />
                </Styled.MultipleRenderedImgWrapper>
            );
            duplicateElementsArr.push(el);
        }
        return duplicateElementsArr;
    };

    return (
        <>
            {imageMode
                ? renderSingleResizeDiv()
                : renderMultipleResizeDiv(numberOfResizableDiv)}
        </>
    );
};
