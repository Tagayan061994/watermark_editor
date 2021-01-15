import styled from "styled-components";

export const TextSidebarWrapper = styled.div`
  width: 35%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding-top: 1%;
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
  padding: 11% 7% 7% 7%;
  display: flex;
  flex-direction: column;
`;

export const TextInput = styled.input`
  height: 100%;
  border: 1px solid #387dff;
  background-color: #eef5ff;
  color: #0d2053;
  font-family: ${(props) => props.textFont};
  border-radius: 10px;
  overflow: hidden;
  padding: 10px 20px;
  outline: none;
  margin-top: 5%;
`;

export const InputSubText = styled.span`
  letter-spacing: 0px;
  font-size: 12px;
  color: #9aa6c8;
  align-self: flex-end;
  margin-top: 2%;
`;

export const ColorSliderSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 2% 5% 3% 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ColorLabel = styled.label`
  font-size: 12px;
  text-align: left;
  color: #7683a8;
  align-self: center;
`;

export const ColorPicker = styled.input`
  padding: 7%;
  background-color: #ff77e0;
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
  padding: 5% 5% 5% 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const FontLabel = styled.label`
  font-size: 12px;
  text-align: left;
  color: #7683a8;
  align-self: center;
  margin-left: 2%;
  margin-bottom: 2%;
  align-self: center;
`;

export const FontSelect = styled.select`
  width: 205px;
  height: 40px;
  background-color: #eef5ff;
  border: 1px solid #dde3f0;
  border-radius: 10px;
  margin-left: 5%;
  padding: 2%;
  font-family: ${(props) => props.textFont};
  font-size: 13px;
  outline: none;
  .select {
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;
  }
  .Hachi-Maru-Pop {
    font-family: "Hachi Maru Pop";
  }
  .Potta-One {
    font-family: "Potta-One";
  }
  .East-Sea-Dokdo {
    font-family: "East-Sea-Dokdo";
  }
  .Montserrat {
    font-family: "Montserrat";
  }
`;

export const TailedModeSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 4.5% 20% 4.5% 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const PositionModeSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 5% 5% 7% 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .padding {
    padding-bottom: 13%;
    padding-top: 3.6%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
