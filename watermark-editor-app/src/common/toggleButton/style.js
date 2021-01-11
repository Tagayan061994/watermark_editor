import styled from "styled-components";

export const ToggleWrapper = styled.div`
  width: 100%;
  display:flex;
  justify-content:space-evenly;
`;

export const TogglLabel = styled.label`
  color: #7683A8;
`;

export const ToggleSwitch = styled.div`
  input[type="checkbox"] {
    display: none;
  }
  label {
    cursor: pointer;
  }
  label .toggle-track {
    display: block;
    height: 20px;
    width: 35px;
    background: #387DFF;
    border-radius: 20px;
    position: relative;
    border: 1px solid #ccc;
  }
  .toggle-track:before {
    content: "";
    display: inline-block;
    height: 14px;
    width: 14px;
    background: white;
    border-radius: 20px;
    position: absolute;
    top: 0;
    right: 0;
    transition: right 0.2s ease-in;
  }
  input[type="checkbox"]:checked + label .toggle-track:before {
    background: white;
    right: 15px;
  }
`;
