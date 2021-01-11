import styled from "styled-components";

export const TextSidebarWrapper = styled.div`
  width:35%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #dee3f0;
  div + div {
    border-top: 1px solid;
    border-color: #dee3f0;
  }
`;

export const InputSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 11% 4% 3% 4%;
  display: flex;
  flex-direction: column;
`;

export const TextInput = styled.input`
  border: 1px solid #387dff;
  background: #eef5ff 0% 0% no-repeat padding-box;
  color: #0d2053;
  border-radius: 10px;
  overflow: hidden;
  padding: 5% 27% 5% 15%;
  outline: none;
  margin-top:5%;
`;

export const InputSubText = styled.span`
  letter-spacing: 0px;
  font-size:12px;
  color: #9aa6c8;
  align-self: flex-end;
  margin-top:2%;
`;

export const ColorSliderSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 2% 5% 2% 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ColorLabel = styled.label`
  font-size:12px;
  text-align: left;
  color: #7683a8;
  align-self: center;
`;

export const ColorPicker = styled.input`
  padding: 7%;
  background: #ff77e0 0% 0% no-repeat;
  border: 1px solid #dee3f0;
  border-radius: 5px;
`;

export const SizeSlider = styled.input`
  height: 4px;
  background: #d2e0fc 0% 0% no-repeat padding-box;
  border-radius: 4px;
  align-self: center;
`;

export const FontSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 3% 5% 3% 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const FontLabel = styled.label`
  font-size:12px;
  font-family: "Montserrat-Medium";
  text-align: left;
  color: #7683a8;
  align-self: center;
  margin-left: 2%;
  margin-bottom: 3%;
`;

export const FontSelect = styled.select`
  width: 205px;
  height: 40px;
  background-color: #eef5ff;
  border: 1px solid #dde3f0;
  border-radius: 10px;
  margin-left: 5%;
  padding: 2%;

  .Hachi-Maru-Pop {
    font-family: "Hachi Maru Pop"
  }
  .Potta-One {
    font-family: "Potta-One"
  }
  .East-Sea-Dokdo {
    font-family: "East-Sea-Dokdo"
  }
  .Montserrat {
    font-family: "Montserrat";
  }
`;

export const TailedModeSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 3% 20% 3% 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;


export const PositionModeSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 3% 5% 3% 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;