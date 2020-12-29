import { FooterWrapper, CancelButton, FooterButton } from "./styled";

const Footer = () => {
    return (
        <FooterWrapper>
            <CancelButton>Cancel</CancelButton>
            <FooterButton>Done</FooterButton>
        </FooterWrapper>
    );
}

export default Footer;