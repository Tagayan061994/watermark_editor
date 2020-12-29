import styled from "styled-components";
import circlebg from "../../../assets/circleBack.png";

export const ImageSideBarWrapper = styled.div`
  width: 30%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #dee3f0;
  div + div {
    border-top: 1px solid;
    border-color: #dee3f0;
  }
`;

export const CircleSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 10%;
`;

export const CircleImageWrapper = styled.div`
  max-width: 91px;
  width: 100%;
  padding: 5% 12%;
  border-radius: 50%;
  overflow: hidden;
  background-image: url(${circlebg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const SliderSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3%;
  label {
    color: #7683a8;
    font: normal normal medium 12px/15px Montserrat;
    letter-spacing: 0px;
    opacity: 1;
    display: flex;
    justify-content: center;
  }
  input {
    overflow: hidden;
    height: 5px;
    width: 100%;
    /* -webkit-appearance: none; */
    background-color: #d2e0fc;
    margin-top: 5%;
    margin-bottom: 9%;
  }

  input::-webkit-slider-runnable-track {
    height: 10px;
    -webkit-appearance: none;
    color: #13bba4;
    margin-top: -1px;
  }

  input::-webkit-slider-thumb {
    width: 12px;
    -webkit-appearance: none;
    height: 12px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    background: red;
    box-shadow: -80px 0 0 80px #d2e0fc;
  }
`;

export const ModeSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 6%;
`;

export const Toggle = styled.label`
  position: relative;
  display: inline-block;
  width: 45px;
  height: 25px;
  margin: 6% auto;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #377dff;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  span:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  input::before {
    content: "Single";
    height: 14px;
    width: 14px;
    left: 4px;
    bottom: 4px;
    background-color: red;
  }
  input:checked + span {
    background-color: #377dff;
  }
  input:focus + span {
    box-shadow: 0 0 1px rgb(255, 77, 211);
  }
  input:checked + span:before {
    transform: translateX(26px);
  }
  span.round {
    border-radius: 34px;
  }
  span.round:before {
    border-radius: 50%;
  }
`;

export const Label = styled.span`
  text-align: center;
  font: normal normal medium 12px/15px Montserrat;
  letter-spacing: 0px;
  color: #7683a8;
`;

export const PositionSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 6%;
`;

export const PosBtnWrapper = styled.div`
  max-width: 254px;
  width: 100%;
  background-color: transparent;
  padding: 5%;
  display: flex;
  justify-content: space-between;
`;

export const PosBtn = styled.button`
  border: none;
  background: transparent linear-gradient(180deg, #fefeff 0%, #eff3ff 100%);
  color: white;
  padding: 5%;
  text-align: center;
  text-decoration: none;
  /* display: inline-block; */
  border-radius: 10px;
`;

export const PosBtnDecor = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-left: 5px solid #bdcffb;
  border-top: 5px solid #bdcffb;
  border-radius: 2px;
  transform: ${(props) => `rotate(${props.degree}deg)`};
`;
