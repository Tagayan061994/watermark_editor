const initialState = {
  text: "",
  size: 16,
  color: "black",
  font: "Montserrat",
  istTailedMode: false,
  padding: 10,
  position: "center",
};

export const textConfigs = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TEXT_VALUE":
      return {
        ...state,
        text: action.payload,
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
    case "SET_TEXT_MODE":
      return {
        ...state,
        istTailedMode: !state.istTailedMode,
      };
    case "SET_TEXT_POSITION":
      return {
        ...state,
        istTailedMode: !state.istTailedMode,
      };
    default:
      return state;
  }
};
