import React from 'react';
import * as Styled from "./style";

export const PositionBtns = React.memo(() => {
    return (
        <>
            <Styled.Label>Position</Styled.Label>
            <Styled.PosBtnWrapper>
                <Styled.PosBtn>
                    <Styled.PosBtnDecor degree={0} />
                </Styled.PosBtn>
                <Styled.PosBtn>
                    <Styled.PosBtnDecor degree={90} />
                </Styled.PosBtn>
                <Styled.PosBtn>
                    <Styled.PosBtnDecor degree={270} />
                </Styled.PosBtn>
                <Styled.PosBtn>
                    <Styled.PosBtnDecor degree={180} />
                </Styled.PosBtn>
            </Styled.PosBtnWrapper>
        </>
    );
});
