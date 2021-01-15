import styled from "styled-components";

export const ToggleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const SingleLabel = styled.label`
  color: ${(props) => (props.mode === "true" ? "#545F7E" : "#7683a8")};
  font-size: 14px;
  font-weight: ${(props) => (props.mode === "true" ? "bold" : "normal")};
`;

export const TailedLabel = styled.label`
  color: ${(props) => (props.mode === "true" ? "#7683a8" : "#545F7E")};
  font-size: 14px;
  font-weight: ${(props) => (props.mode === "true" ? "normal" : "bold")};
`;

export const ToggleSwitch = styled.div`
  input[type="checkbox"] {
    display: none;
    -webkit-appearance: none;
  }
  label {
    cursor: pointer;
  }
  label .toggle-track {
    display: block;
    height: 20px;
    width: 35px;
    background: #387dff;
    border-radius: 20px;
    position: relative;
    border: 1px solid #ccc;
  }
  .toggle-track:before {
    content: "";
    display: inline-block;
    height: 12px;
    width: 12px;
    background: white;
    border-radius: 20px;
    position: absolute;
    top: 0;
    right: 1;
    margin-top: 8%;
    transition: right 0.2s ease-in;
  }
  input[type="checkbox"]:checked + label .toggle-track:before {
    background: white;
    right: 15px;
    right: 0;
  }
`;
