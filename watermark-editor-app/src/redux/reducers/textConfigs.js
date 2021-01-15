import { act } from "@testing-library/react";

const initialState = {
  value: "",
  type: "",
  size: 16,
  color: "black",
  font: "Montserrat",
  istTailedMode: true,
  padding: 0,
  opacity: 1,
  position: {
    x: 150,
    y: 150,
  },
  imageCropParams: {
    left: 100,
    top: 10,
    width: 23,
    height: 323,
  },
};

export const textConfigs = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TYPE":
      return {
        ...state,
        type: action.payload,
      };
    case "SET_POSITION":
      return {
        ...state,
        position: {
          ...state.position,
          x: action.payload.x,
          y: action.payload.y,
        },
      };
    case "SET_OPACITY":
      return {
        ...state,
        opacity: action.payload,
      };
    case "SET_TEXT_VALUE":
      return {
        ...state,
        value: action.payload,
      };
    case "SET_TEXT_SIZE":
      return {
        ...state,
        size: action.payload,
      };
    case "SET_TEXT_COLOR":
      return {
        ...state,
        color: action.payload,
      };
    case "SET_TEXT_FONT":
      return {
        ...state,
        font: action.payload,
      };
    case "SET_MODE":
      return {
        ...state,
        istTailedMode: !state.istTailedMode,
      };
    case "SET_TEXT_PADDING":
      return {
        ...state,
        padding: action.payload,
      };
    case "SET_INITIAL_STATE":
      return {
        value: "",
        type: "",
        size: 16,
        color: "black",
        font: "Montserrat",
        istTailedMode: true,
        padding: 0,
        opacity: 40,
        position: {
          x: 150,
          y: 150,
        },
        imageCropParams: {
          left: 100,
          top: 10,
          width: 23,
          height: 323,
        },
      };
    default:
      return state;
  }
};
