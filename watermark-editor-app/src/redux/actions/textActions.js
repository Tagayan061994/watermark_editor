export const setTextValue = (event) => {
    return {
        type: "SET_TEXT_VALUE",
        payload: event.target.value
    };
}

export const setTextSize = (event) => {
    return {
        type: "SET_TEXT_SIZE",
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

export const setTextMode = (event) => {
    return {
        type: "SET_TEXT_MODE",
        payload: event.target.value
    }
}

export const setTextPosition = (position) => {
    return {
        type: "SET_TEXT_POSITION",
        payload: position
    }
}

export const setTextPadding = (event) => {
    return {
        type: "SET_TEXT_PADDING",
        payload: event.target.value
    }
}