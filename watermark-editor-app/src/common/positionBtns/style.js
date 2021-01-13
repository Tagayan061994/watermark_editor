import styled from "styled-components";

export const Label = styled.span`
  text-align: center;
  letter-spacing: 0px;
  color: #7683A8;
  margin-bottom:2%;
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
  align-self:center;
  background-color: transparent;
  display: flex;
  justify-content: space-around;
`;

export const PosBtn = styled.button`
  border: none;
  background: transparent linear-gradient(180deg, #fefeff 0%, #eff3ff 100%);
  background: ${props => props.clicked ? "#377DFF" : "white"};
  padding: 4.5%;
  text-align: center;
  text-decoration: none;
  border-radius: 10px;
  border:1px solid #D2E0FC;
  cursor:pointer;
`;

export const PosBtnDecor = styled.span`
  display: block;
  width: 25px;
  height: 25px;
  border-left: 8px solid ${props => props.clicked ? "white" : "#BDCFFB"};
  border-top: 8px solid ${props => props.clicked ? "white" : "#BDCFFB"};
  border-radius: 2px;
  transform: ${(props) => `rotate(${props.degree}deg)`};
`;