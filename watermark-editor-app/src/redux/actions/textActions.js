export const setType = (type) => {
    return {
        type: "SET_TYPE",
        payload: type
    }
}

export const setOpacity = (event) => {
    return {
        type: "SET_OPACITY",
        payload: event.target.value
    }
}

export const setTextPosition = (position) => {
    return {
        type: "SET_POSITION",
        payload: position
    }
}

export const setTextMode = (event) => {
    return {
        type: "SET_MODE",
        payload: event.target.value
    }
}

export const setTextSize = (event) => {
    return {
        type: "SET_TEXT_SIZE",
        payload: event.target.value
    };
}

export const setTextValue = (event) => {
    return {
        type: "SET_TEXT_VALUE",
        payload: event.target.value
    };
}

export const setTextColor = (event) => {
    return {
        type: "SET_TEXT_COLOR",
        payload: event.target.value
    };
}

export const setTextFont = (event) => {
    return {
        type: "SET_TEXT_FONT",
        payload: event.target.value
    }
}

export const setTextPadding = (event) => {
    return {
        type: "SET_TEXT_PADDING",
        payload: event.target.value
    }
}

export const resetInitialState = (event) => {
    return {
        type: "SET_INITIAL_STATE",
        payload: event.target.value
    }
}
