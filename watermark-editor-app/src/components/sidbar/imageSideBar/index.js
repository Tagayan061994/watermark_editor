import avatarImg from "../../../assets/BeeTV.png"
import {
    ImageSideBarWrapper,
    CircleImageWrapper,
    CircleSection,
    SliderSection,
    ModeSection,
    PositionSection,
    Label,
    PosBtnWrapper,
    Toggle,
    PosBtn,
    PosBtnDecor
} from "./style"
const ImageSideBar = () => {
    return (
        <ImageSideBarWrapper>
            <CircleSection>
                <CircleImageWrapper>
                    <img src={avatarImg} alt="" />
                </CircleImageWrapper>
            </CircleSection>
            <SliderSection>
                <label htmlFor="volume">Opacity</label>
                <input type="range" id="size" name="size"
                    min="0" max="10" step="0.1" />
            </SliderSection>
            <ModeSection>
                <Label>Tiled mode</Label>
                <Toggle className="switch">
                    <input type="checkbox" />
                    <span className="round"></span>
                </Toggle>
            </ModeSection>
            <PositionSection>
                <Label>Position</Label>
                <PosBtnWrapper>
                    <PosBtn><PosBtnDecor degree={0} /></PosBtn>
                    <PosBtn><PosBtnDecor degree={90} /></PosBtn>
                    <PosBtn><PosBtnDecor degree={0} /></PosBtn>
                    <PosBtn><PosBtnDecor degree={90} /></PosBtn>
                </PosBtnWrapper>
            </PositionSection>
        </ImageSideBarWrapper >
    );
}

export default ImageSideBar;